/**
 * Created by San Verhavert on 24/03/2015.
 */

var _ = require('lodash');
var math = require('math');

function NCP( abil, benchmarks ){
    // find benchmark with the smallest "absolute distance" to the selected representation to rank
    benchmarks = _.sortBy( _.shuffle( benchmarks ), function( benchmark ) {  // sort ascending on "absolute distance"
        return math.abs( benchmark.ability - abil );   // calculate the absolute value of the distance between the benchmark
                                                       // and the current ability estimate
    } );
    return benchmarks.shift();      // cut the first element of the array benchmarks
}

module.exports = NCP;