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
  var Bench;
    _.forIn(bench_value, function(rep_value, rep_key){
      if(/benchmarks/.test(rep_key)) {
        Bench = rep_value;
      } else {
        _.forIn(rep_value, function(rep_cond_value, rep_cond_key){
            _.forIn(rep_cond_value, function(rep_case_value, rep_case_key){
              var conditionText = "in condition ".concat(rep_case_key);
              conditionText = conditionText.concat(" the correct answer should be given");
                if(!rep_case_value.answer){
                  var CP_array=[];
                  for(var i = 0 ; i <= 100 ; i++){
                    CP_array.push(CP(rep_case_value.value, Bench)._id);
                    console.log(CP_array);
                  }
                } else{
                  //CP = NCP(rep_case_value.value, Bench)._id;
                }

            })

        })
      }
      if(/repr/.test(rep_key)){
        //console.log(Bench);

      }
    })

});
