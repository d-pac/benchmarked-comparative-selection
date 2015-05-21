/**
 * Created by San Verhavert on 24/03/2015.
 */

var _ = require('lodash');
var math = require('math');

function NCP( abil, benchmarks ){

  //check if benchmarks is vector with at least two elements if so check if all element are benchmarks
  if(_.isArray(benchmarks) && benchmarks.length>=2){
    if(_.find(benchmarks, function(benchmark){ return benchmark.rankType != "benchmark" }))
      throw new Error("all objects in benchmarks should have rankType benchmark")
  } else{
    throw new Error("benchmark should be an array with a minimum length of 2")
  }
  //chech if abil is a number
    // find benchmark with the smallest "absolute distance" to the selected representation to rank
    benchmarks = _.sortBy( _.shuffle( benchmarks ), function( benchmark ) {  // sort ascending on "absolute distance"
        return math.abs( benchmark.ability.value - abil );   // calculate the absolute value of the distance between the benchmark
                                                       // and the current ability estimate
    } );
    return benchmarks.shift();      // cut the first element of the array benchmarks
}

module.exports = NCP;
