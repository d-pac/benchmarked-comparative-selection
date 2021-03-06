/* select benchmark for representation
 (by Liesje)
 */

"use strict";

var _ = require( 'lodash' );

/**
 * selects a random id from `benchmarkIds` and then returns a random representation `closeTo` the selected id
 * @param {{}|[]} representations - representations collection
 * @param {{}|[]} benchmarkIds - benchmark id's collection
 * @returns {{}} - random representation close to one of the benchmarks
 */
function getRandomCloseTo( representations,
                           benchmarkIds ){
  var selectedBenchmarkId = _.sample( benchmarkIds );
  return _.sample( _.filter( representations, { closeTo: selectedBenchmarkId } ) );
}

/**
 * Maintains a map of id's with weights.
 * @constructor
 * @class
 */
function WeighedRepresentations(){
  this.unique = Math.random();
  this.map = {};
}

WeighedRepresentations.prototype.weigh = function( id,
                                                   weight ){
  if( !this.map[ id ] ){
    this.map[ id ] = {
      id: id,
      weight: 0
    };
  }
  this.map[ id ].weight += weight;
};

/**
 * sorts by weight and takes the least weighing (or a random one if multiple)
 * @param {WeighedRepresentations} weighedRepresentationsMap - weighed representations
 * @returns {string} - a Representation id
 */
function getRandomFromLeastWeighing( weighedRepresentationsMap ){
  var sorted = _.sortBy( weighedRepresentationsMap, "weight" );
  var filtered = _.filter( sorted, { weight: sorted[ 0 ].weight } );
  return _.sample( filtered ).id;
}

// create list to filter out a list of benchmarks from the representations
//repid als representation id
//repobjects als representation list
module.exports = function selectBM( representations,
                                    comparisons,
                                    representationA ){
  var allBenchmarkIds = _.map( _.filter( representations, { rankType: 'benchmark' } ), "_id" );
  var selectedRepresentation;

  if( !representationA.compared || !representationA.compared.length ){
    //randomly select any representation close to any benchmark
    selectedRepresentation = getRandomCloseTo( representations, allBenchmarkIds );
  } else {
    //we need to know which benchmarks have been used in comparisons most
    var weighedBenchmarks = new WeighedRepresentations();
    _.forEach( comparisons, function( comparison ){
      //"completed" comparisons get far more weight than non-completed
      var weight = (comparison.data.selection)
        ? 100
        : 1;
      var representation;
      if( comparison.representations.a === representationA._id ){
        representation = _.find( representations, { _id: comparison.representations.b } );
        if( representation.closeTo ){
          weighedBenchmarks.weigh( representation.closeTo, weight );
        }
      } else if( comparison.representations.b === representationA._id ){
        representation = _.find( representations, { _id: comparison.representations.a } );
        if( representation.closeTo ){
          weighedBenchmarks.weigh( representation.closeTo, weight );
        }
      }
    } );

    //let's subtract all benchmarks that occur in `weighedBenchmarks` (i.e. they have been used in a comparison already)
    //from the full list of benchmarks
    var unusedBenchmarkIds = _.without.apply( null, [ allBenchmarkIds ].concat( _.keys( weighedBenchmarks.map ) ) );
    if( unusedBenchmarkIds.length ){
      //we still got some benchmarks that have not been used in comparisons, let's use one of those
      selectedRepresentation = getRandomCloseTo( representations, unusedBenchmarkIds );
    } else {
      //let's retrieve a benchmark that has been used least times (random if multiple)
      var selectedBenchmarkId = getRandomFromLeastWeighing( weighedBenchmarks.map );
      // we want to select a representation B that has been compared to representation A the least amount of times
      // let's get all representations `closeTo` the selected benchmark
      var candidateRepresentations = _.filter( representations, { closeTo: selectedBenchmarkId } );
      var candidateRepresentationIds = _.map( candidateRepresentations, "_id" );
      //let's subtract all representations that `representationA` already has been compared with from the list of candidates
      var uncomparedRepresentationIds = _.without.apply( null, [ candidateRepresentationIds ].concat( _.intersection( representationA.compared, candidateRepresentationIds ) ) );
      var selectedRepresentationId;
      if( uncomparedRepresentationIds.length ){
        //some representations have not been compared with `representationA`, let's use one of those
        selectedRepresentationId = _.sample( uncomparedRepresentationIds );
      } else {
        //all representations have been compared with `representationA`, so we need to find out which ones have been compared the least

        var weighedCandidates = new WeighedRepresentations();
        _.forEach( candidateRepresentations, function( candidate ){
          weighedCandidates.weigh( candidate._id, _.filter( candidate.compared, representationA._id ).length );
        } );
        //let's retrieve a representation that has been used least times (random if multiple)
        selectedRepresentationId = getRandomFromLeastWeighing( weighedCandidates.map );
      }
      selectedRepresentation = _.find( candidateRepresentations, { _id: selectedRepresentationId } );
    }
  }

  return selectedRepresentation;
};
