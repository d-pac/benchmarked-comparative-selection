var NCP = require('../lib/Stage2/nearestCuttingPoint');
var expect = require( 'must' );
var fx = require('./fixtures');
var _ = require('lodash');

describe( "nearest cutting point", function() {
  describe("spec file", function () {
    it("must be found", function () {
      expect(true).to.be.true();
    });
  });
  describe( "module", function() {
    it("should export a function", function () {
      expect(NCP).to.be.a.function();
    });
  });
  describe( "#nearestCuttingPoint", function() {
    var inputErrorA = /should be an array/;
    var inputErrorB = /should have rankType benchmark/;
    it("should thow an error when benchmarks is undefined", function() {
      expect(function() {
        NCP();
      }).to.throw(inputErrorA);
    });
    it("should throw an error when benchmarks has length < 2", function() {
      expect(function() {
        NCP(0,[{}]);
      }).to.throw(inputErrorA);
    });
    it("should throw an error when benchmarks contains an element with rankType != 'benchmark'", function() {
      expect(function(){
        NCP(0,[{rankType:'ranked'}, {rankType:'benchmark'}]);
      }).to.throw(inputErrorB);
      expect(function(){
        NCP(0,[{rankType:'to rank'}, {rankType:'benchmark'}]);
      }).to.throw(inputErrorB);
      expect(function(){
        NCP(0,[{rankType:'something else'}, {rankType:'benchmark'}]);
      }).to.throw(inputErrorB);
      expect(function(){
        NCP(0,[{rankType:'benchmark'}, {rankType:'to rank'}]);
      }).to.throw(inputErrorB);
      expect(function(){
        NCP(0,[{rankType:'benchmark'}, {rankType:'to rank'}]);
      }).to.throw(inputErrorB);
    });
    it("should return an object that is not a vector and contains the keys '_id', 'ability.value' and 'rankType'", function() {
      var CP = NCP(0, [{_id: "A", ability: {value: 0.2}, rankType: "benchmark"}, {
        _id: "B",
        ability: {value: 1.2},
        rankType: "benchmark"
      }]);
      expect(CP).to.be.an.object();
      expect(CP).not.to.be.an.array();
      expect(CP).to.have.keys(["_id","ability","rankType"]);
      expect(CP.ability).to.have.property("value");
    });
    it("should select the correct benchmark", function(){
      //run though benchmark conditions
      _.forIn(fx.nearestCuttingPoint, function(bench_value, bench_key){
        _.forIn(bench_value, function(rep_value, rep_key){
          if(rep_key==/benchmarks/){
            var Bench = rep_value;
          } else if(rep_key==/repr/){
            _.forIn(rep_value, function(rep_cond_value, rep_cond_key){
              _.forIn(rep_cond_value, function(rep_case_value, rep_case_key){
                if(!rep_case_value.answer){
                  var CP_array=[];
                  for(var i = 0 ; i <= 100 ; i++){
                    CP_array.push(NCP(rep_case_value.value, Bench)._id);
                  }
                  expect(CP.indexOf("A")).to.be.least(0);
                  expect(CP.indexOf("B")).to.be.least(0)
                } else{
                  CP = NCP(rep_case_value.value, Bench)._id;
                  expect(CP).to.equal(rep_case_value.answer)
                }
              })
            })
          }
        })
      });

      //do calculations
      //do tests
    });
  });
});
