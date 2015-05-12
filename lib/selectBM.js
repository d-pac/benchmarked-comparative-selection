/* select benchmark for representation
 (by Liesje)
 */

var _ = require( 'lodash' );

function getRandomElement( collection ){
  switch( collection.length ){
    case 0:
      return null;
      break;
    case 1:
      return collection[ 0 ];
      break;
  }
  return collection[ _.random( 0, collection.length - 1 ) ];
}

function getRandomCloseTo( representations,
                           benchmarkIds ){
  var selectedBenchmarkId = getRandomElement( benchmarkIds );
  return getRandomElement( _.filter( representations, { closeTo: selectedBenchmarkId } ) );
}

function TalliedBenchmarks(){
}

_.extend( TalliedBenchmarks.prototype, {
  map: {},
  tally: function tallyBenchmark( id,
                                  selection ){
    if( !this.map[ id ] ){
      this.map[ id ] = {
        id: id,
        weight: 0
      };
    }
    this.map[ id ].weight += (selection)
      ? 100
      : 1;
  }
} );

// create list to filter out a list of benchmarks from the representations
//repid als representation id
//repobjects als representation list
module.exports = function selectBM( representations,
                                    comparisons,
                                    representationA ){
  var allBenchmarkIds = _.pluck( _.filter( representations, { rankType: 'benchmark' } ), "_id" );
  var selectedRepresentation;

  if( !representationA.comparedNum ){
    selectedRepresentation = getRandomCloseTo( representations, allBenchmarkIds );
  } else {
    var talliedBenchmarks = new TalliedBenchmarks();
    _.each( comparisons, function( comparison ){
      var representationA = _.find( representations, { _id: comparison.representations.a } );
      if( representationA.closeTo ){
        return talliedBenchmarks.tally( representationA.closeTo, comparison.data.selection );
      }
      var representationB = _.find( representations, { _id: comparison.representations.b } );
      if( representationB.closeTo ){
        talliedBenchmarks.tally( representationB.closeTo, comparison.data.selection );
      }
    } );

    var unusedBenchmarkIds = _.difference( allBenchmarkIds, _.keys( talliedBenchmarks.map ) );
    if( unusedBenchmarkIds.length ){
      selectedRepresentation = getRandomCloseTo( representations, unusedBenchmarkIds );
    } else {
      var sortedBenchmarks = _.sortBy( talliedBenchmarks.map, "weight" );
      var filteredBenchmarks = _.filter( sortedBenchmarks, { weight: sortedBenchmarks[ 0 ].weight } );
      var selectedBenchmarkId = getRandomElement( filteredBenchmarks ).id;
      var representationCloseToSorted = _.sortBy( _.filter( representations, { closeTo: selectedBenchmarkId } ), "comparedNum" );
      var representationsRange = _.filter( representationCloseToSorted, { comparedNum: representationCloseToSorted[0 ].comparedNum } );
      selectedRepresentation = getRandomElement( representationsRange );
    }
  }

  return selectedRepresentation;
};
