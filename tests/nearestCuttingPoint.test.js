/**
 * Created by SVerhavert on 24/03/2015.
 */

var CP = require('../lib/Stage2/nearestCuttingPoint');

var myBenchmarks = [ { _id:"AAAAAAAAA", ability:{value:1.236}, rankType:"benchmark"}, { _id:"BBBBBBBBB", ability:{value:-.65 }, rankType:"benchmark"} ];
CP();
//console.log(CP(1,myBenchmarks));
