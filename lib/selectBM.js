/* select benchmark for representation
 (by Liesje)
 */

var _ = require( 'lodash' );

function getRandomElement( collection ){
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
  tally: function tallyBenchmark( id, selection ){
    if( !this.map[ id ] ){
      this.map[ id ] = {
        id: id,
        selected: 0,
        completed: 0
      };
    }
    this.map[ id ].selected++;
    if( selection ){
      this.map[ id ].completed++;
    }
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
      var representationA = _.find(representations, {_id:comparison.representations.a} );
      if(representationA.closeTo){
        return talliedBenchmarks.tally(representationA.closeTo, comparison.data.selection);
      }
      var representationB = _.find(representations, {_id:comparison.representations.b} );
      if(representationB.closeTo){
        talliedBenchmarks.tally(representationB.closeTo, comparison.data.selection);
      }
    } );

    var unusedBenchmarkIds = _.difference( allBenchmarkIds, _.keys( talliedBenchmarks.map ) );
    if( unusedBenchmarkIds.length ){
      selectedRepresentation = getRandomCloseTo( representations, unusedBenchmarkIds );
    } else {
      var sortedBenchmarks = _.sortBy( talliedBenchmarks.map, "selected" );
      var filteredBenchmarks = _.filter( sortedBenchmarks, { selected: sortedBenchmarks[ 0 ].selected } );
      selectedRepresentation = getRandomCloseTo( representations, _.pluck( filteredBenchmarks, 'id' ) );
    }
  }

  return selectedRepresentation;
};
