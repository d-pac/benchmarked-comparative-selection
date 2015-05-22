/**
 * Created by SVerhavert on 24/03/2015.
 */

var CP = require('../lib/Stage2/nearestCuttingPoint');

var myBenchmarks = [ { _id:"AAAAAAAAA", ability:{value:1.236}, rankType:"benchmark"}, { _id:"BBBBBBBBB", ability:{value:-.65 }, rankType:"benchmark"} ];
//CP();
//console.log(CP(1,myBenchmarks));


var fx = require('../specs/fixtures');
var _ = require('lodash');

_.forIn(fx.nearestCuttingPoint, function(bench_value, bench_key){
    _.forIn(bench_value, function(value, key){
      _.forIn(value.repr, function(rep_cond_value, rep_cond_key){
          _.forIn(rep_cond_value, function(rep_case_value, rep_case_key){
              var bench;
              if(!rep_case_value.answer){
                bench = value.benchmarks;
                var CP_array=[];
                for(var i = 0 ; i <= 100 ; i++){
                  CP_array.push(NCP(rep_case_value.value, bench)._id);
                }
              } else{
                bench = value.benchmarks;
                var CP = NCP(rep_case_value.value, bench)._id;
              }
          });
      });
    });
});
