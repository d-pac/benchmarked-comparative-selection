/**
 * Created by San Verhavert on 24/03/2015.
 */

var _ = require('lodash');
var math = require('math');

function NCP( abil, benchmarks ){
  //check if benchmarks is vector with at least two elements if so check if all element are benchmarks
  if(benchmarks.length()>2){
    _.each(benchmarks, function(bench){
      if(bench.rankType!="benchmark"){
        throw new error("all objects in benchmarks should have rankType benchmark")
      }
    })
  } else{
    throw new error("This function is only usefull with two or more benchmarks")
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
