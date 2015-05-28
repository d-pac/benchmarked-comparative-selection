'use strict';

var expect = require( 'must' );
var select = require( '../lib/select' );
var _ = require('lodash'),
    fx = require('./fixtures/index');

describe( "select", function(){

  describe( "spec file", function(){
      it( "must be found", function(){
          expect( true ).to.be.true();
      } );
  } );

  describe( "module", function() {
    it("should export an object", function () {
      expect( select ).to.be.an.object();
    });
    describe( "exported object", function() {
      it("should have a select function", function () {
        expect( select.select ).to.be.a.function();
      });
    });
  });

  describe( "#select", function(){
    var inputErrorA=/parameters should be defined/;
    var inputErrorB=/should be an array/;
    var inputErrorC=/one representation that is to rank/;
    var inputErrorD=/least one benchmark/;
    var inputErrorE=/2 objects that are ranked and close to a benchmark/;
    var inputErrorF=/assessment stage doesn't have a correct value/;
    var inputErrorG=/should have an ability.value/;
    it("should throw a error when one of the parameters is undefined", function () {
      expect(function(){select.select()}).to.throw(inputErrorA);
      expect(function(){select.select()}).to.throw(inputErrorA);
    });
    it("should throw a error when representations is not a array and does not contain 4 elements", function () {
      expect(function(){
        select.select({_id:"representations: invalid input"},[{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"})
      }).to.throw(inputErrorB);
      expect(function(){
        select.select([{_id:"representations: invalid input"},{_id:"invalid input"}],[{_id:"comparisons"}],
          {_id:"assessment"},{_id:"assessor"})
      }).to.throw(inputErrorB);
    });
    it("should throw an error when representations does not contain a representation to rank", function(){
      expect(function(){
        select.select([{_id:"representations: invalid input"},{_id:"invalid input"},{_id:"invalid input"}],
          [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"})
      }).to.throw(inputErrorC );
    });
    it("should throw an error when representations does not contain a benchmark", function(){
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"}, {_id:"to rank", rankType:"to rank"},
            {_id:"to rank", rankType:"to rank"}],
          [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorD);
    });
    it("should throw an error when representations does not contain an object that is ranked and close to benchmark",
      function(){
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"}, {_id:"benchmark", rankType:"benchmark"},
            {_id:"to rank", rankType:"to rank"}],[{_id:"comparisons"}],
          {_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorE);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"}, {_id:"benchmark", rankType:"benchmark"},
            {_id:"ranked", rankType:"ranked"}],[{_id:"comparisons"}],
          {_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorE);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
            {_id:"ranked", rankType:"ranked", closeTo:"invalid"}],
          [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorE);
    });
    it("should throw an error when assessment does not contain a stage field equal to 0 or 1", function(){
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
          {_id:"ranked", rankType:"ranked", closeTo:"benchmark"},{_id:"ranked2", rankType:"ranked", closeTo:"benchmark"}],
        [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorF);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
           {_id:"ranked", rankType:"ranked", closeTo:"benchmark"},{_id:"ranked2", rankType:"ranked", closeTo:"benchmark"}],
          [{_id:"comparisons"}],{_id:"assessment", stage:-1},{_id:"assessor"});
      }).to.throw(inputErrorF);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
            {_id:"ranked", rankType:"ranked", closeTo:"benchmark"},{_id:"ranked2", rankType:"ranked", closeTo:"benchmark"}],
          [{_id:"comparisons"}],{_id:"assessment", stage:2},{_id:"assessor"});
      }).to.throw(inputErrorF);
    });
    it( "should return a message when all comparisons have been made", function(){
      var result = select.select(fx.select.reprNoMoreComparisons, fx.select.comparisons, fx.select.assessment, fx.select.assessor);
      var message = "All comparisons have been made";
      expect(result).to.not.be.null();
      expect(result).to.be.an.object();
      expect(result.messages).to.be.an.array();
      expect(result.messages[0]).to.equal(message);
    });
    it( "should return a message the assessor has reached the max comparisons for stage 1", function(){
      var result = select.select(fx.select.representations, fx.select.maxComparisons, fx.select.assessment, fx.select.assessor);
      var message = "You can't make any more comparisons at the moment.";
      expect(result).to.not.be.null();
      expect(result).to.be.an.object();
      expect(result.messages).to.be.an.array();
      expect(result.messages[0]).to.equal(message);
    });
    it("should throw an error in stage 2 when at least one representation does not have an ability field", function(){
      expect(function(){select.select(fx.select.reprMissingAbility, fx.select.comparisons,
        fx.select.assessment2,fx.select.assessor)}).to.throw(inputErrorG);
    });
    it("should throw an error in stage 2 when at least one representation does not have an ability.value field", function(){
      expect(function(){select.select(fx.select.reprMissingAbilityValue, fx.select.comparisons,
        fx.select.assessment2,fx.select.assessor)}).to.throw(inputErrorG);
    });
    it("should throw an error in stage 2 when at least one representation has an ability value NaN", function(){
      expect(function(){select.select(fx.select.reprMissingAbility, fx.select.comparisons,
        fx.select.assessment2,fx.select.assessor)}).to.throw(inputErrorG);
    });
    it( "should return an object with a result property 2 different representations in stage 1", function(){
      var reps = select.select(fx.select.representations, fx.select.comparisons, fx.select.assessment, fx.select.assessor);
      expect(reps).to.not.be.null();
      expect(reps).to.be.an.object();
      expect(reps.result).to.be.an.array();
      expect(reps.result).to.not.be.null();
      expect(reps.result.length).to.equal(2);
      expect(_.get(reps.result[0], "_id")).to.not.be.null();
      expect(_.get(reps.result[1], "_id")).to.not.be.null();
      expect(_.get(reps.result[0], "_id")).must.not.equal(_.get(reps.result[1], "_id"));
    });
    it( "should return an object with a result property with 2 different representations in stage 2", function(){
      var reps = select.select(fx.select.representations, fx.select.comparisons, fx.select.assessment2, fx.select.assessor);
      expect(reps).to.not.be.null();
      expect(reps).to.be.an.object();
      expect(reps.result).to.be.an.array();
      expect(reps.result).to.not.be.null();
      expect(reps.result.length).to.equal(2);
      expect(_.get(reps.result[0], "_id")).to.not.be.null();
      expect(_.get(reps.result[1], "_id")).to.not.be.null();
      expect(_.get(reps.result[0], "_id")).must.not.equal(_.get(reps.result[1], "_id"));
    });


    // testing situation 1 stage 0
    it( "should give rep08 as A & rep02 or rep04 as B, regardless of which user", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ) {
        results.push(select.select(fx.selectStage1Situation.representations, fx.selectStage1Situation.comparisons, fx.selectStage1Situation.assessment1, fx.selectStage1Situation.assessorId1));
      }
      expect(_.find(results,function(result){
        return _.get(result.result[1], "_id")!=="rep02" && _.get(result.result[1], "_id")!=="rep04";
      })).to.be.undefined();
      expect(_.find(results,function(result){
          return _.get(result.result[0], "_id")!=="rep08";
      })).to.be.undefined();

      for( var i = 0; i < 2000; i++ ) {
        results.push(select.select(fx.selectStage1Situation.representations, fx.selectStage1Situation.comparisons, fx.selectStage1Situation.assessment1, fx.selectStage1Situation.assessorId2));
      }
      expect(_.find(results,function(result){
        return _.get(result.result[1], "_id")!=="rep02" && _.get(result.result[1], "_id")!=="rep04";
      })).to.be.undefined();
      expect(_.find(results,function(result){
        return _.get(result.result[0], "_id")!=="rep08";
      })).to.be.undefined();
    } );

    // testing situation 2 stage 0

    it( "rep01 as A and rep04 as B for user01", function() {
      var results = [];
      for (var i = 0; i < 2000; i++) {
        results.push(select.select(fx.selectStage1Situation.representations2, fx.selectStage1Situation.comparisons2, fx.selectStage1Situation.assessment1, fx.selectStage1Situation.assessorId1));
      }

      console.log("Count B: "+ JSON.stringify(_.countBy(results, function(rep){
        return rep.result[1]._id;
      })));

      expect(_.find(results, function (result) {
        return _.get(result.result[0], "_id") !== "rep01";
      })).to.be.undefined();
      expect(_.find(results, function (result) {
        return _.get(result.result[1], "_id") !== "rep04";
      })).to.be.undefined();
    });

    it( "should give rep08 as A and rep02 as B for user11", function() {
      var results =[];
      for (var i = 0; i < 2000; i++) {
        results.push(select.select(fx.selectStage1Situation.representations2, fx.selectStage1Situation.comparisons2, fx.selectStage1Situation.assessment1, fx.selectStage1Situation.assessorId2));
      }

      console.log("Count B: "+ JSON.stringify(_.countBy(results, function(rep){
        return rep.result[1]._id;
      })));

      expect(_.find(results, function (result) {
        return _.get(result.result[0], "_id") !== "rep08";
      })).to.be.undefined();
      expect(_.find(results, function (result) {
        return _.get(result.result[1], "_id") !== "rep02";
      })).to.be.undefined();

    });

    it( "should give rep08 as A and rep02 or rep09 as B for user11", function() {
      var results =[];
      for (var i = 0; i < 2000; i++) {
        results.push(select.select(fx.selectStage1Situation.representations3, fx.selectStage1Situation.comparisons3, fx.selectStage1Situation.assessment1, fx.selectStage1Situation.assessorId2));
      }

      console.log("Count B: "+ JSON.stringify(_.countBy(results, function(rep){
          return rep.result[1]._id;
        })));

      expect(_.find(results, function (result) {
        return _.get(result.result[0], "_id") !== "rep08";
      })).to.be.undefined();
      expect(_.find(results, function (result) {
        return _.get(result.result[1], "_id") !== "rep02" && _.get(result.result[1], "_id") !== "rep09";
      })).to.be.undefined();
    });


//stage0 should be done
    it( "should not give any more give representations if all stage0representations are done", function() {
      var results =[];
      for (var i = 0; i < 2000; i++) {
        results.push(select.select(fx.selectStage1Situation.representations4, fx.selectStage1Situation.comparisons4, fx.selectStage1Situation.assessment1, fx.selectStage1Situation.assessorId2));
      }

      console.log("Count B: "+ JSON.stringify(_.countBy(results, function(rep){
          return rep.result[1]._id;
        })));

      expect(_.find(results, function (result) {
        return _.get(result.result[0], "_id") !== "rep08" && _.get(result.result[0], "_id") !== "rep01";
      })).to.be.undefined();
      expect(_.find(results, function (result) {
        return _.get(result.result[1], "_id") !== "rep06" && _.get(result.result[1], "_id") !== "rep02"&& _.get(result.result[1], "_id") !== "rep04";
      })).to.be.undefined();
    });





    //testing situations stage 1
    describe("condition benchmarkA<0, benchmarkB>0, selectedA close to bmA and selectedB>0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.pos,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA and selectedB<0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.negAbil,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and < bmA, selectedB<0 and different number of comparisons", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.below.negAbil.diffComp,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and < bmA and selectedB<0, and equal number of comparisons", function(){
      it("should give selectA as first and selectB1 to selectB4 as second", function(){
        var results1 = [], results2 = [];
        for(var i = 0 ; i < 100 ; i++){
          var tempStore = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.below.negAbil.equalComp,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
          results1.push(tempStore.result[0]._id);
          results2.push(tempStore.result[1]._id)
        };
        var counted = _.sum(results1, function(result){
          if(result==="selectA"){
            return 1
          }
        });
        expect(counted).to.equal(results1.length);
        expect(results2.indexOf("selectB1")).to.be.least(0);
        expect(results2.indexOf("selectB2")).to.be.least(0);
        expect(results2.indexOf("selectB3")).to.be.least(0);
        expect(results2.indexOf("selectB4")).to.be.least(0);
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA>0 and close to and > bmA, selectedB<0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.posAbil,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA, selectedB=0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.zero,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA, selectedB=bmA", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.equal,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA, selectedB1-2=bmA", function(){
      it("should give selectA as first and selectB1 to selectB2 as second", function(){
        var results1 = [], results2 = [];
        for(var i = 0 ; i < 100 ; i++){
          var tempStore = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.twoEqual,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
          results1.push(tempStore.result[0]._id);
          results2.push(tempStore.result[1]._id)
        };
        var counted = _.sum(results1, function(result){
          if(result==="selectA"){
            return 1
          }
        });
        expect(counted).to.equal(results1.length);
        expect(results2.indexOf("selectB1")).to.be.least(0);
        expect(results2.indexOf("selectB2")).to.be.least(0);
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA>0 and close to bmB, selectedB>0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeB.pos,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to bmB, selectedB>0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeB.neg,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA>0 and between bmA and bmB, selectedB1>0", function(){
      it("should give selectA as first and selectB1 to selectB2 as second", function(){
        var results1 = [], results2 = [];
        for(var i = 0 ; i < 100 ; i++){
          var tempStore = select.select(fx.selectStage2Situation.reprNegAPosB.middle.pos,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
          results1.push(tempStore.result[0]._id);
          results2.push(tempStore.result[1]._id)
        };
        var counted = _.sum(results1, function(result){
          if(result==="selectA"){
            return 1
          }
        });
        expect(counted).to.equal(results1.length);
        expect(results2.indexOf("selectB1")).to.be.least(0);
        expect(results2.indexOf("selectB2")).to.be.least(0);
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA<0 and between bmA and bmB, selectedB1>0", function(){
      it("should give selectA as first and selectB1 to selectB2 as second", function(){
        var results1 = [], results2 = [];
        for(var i = 0 ; i < 100 ; i++){
          var tempStore = select.select(fx.selectStage2Situation.reprNegAPosB.middle.neg,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
          results1.push(tempStore.result[0]._id);
          results2.push(tempStore.result[1]._id)
        };
        var counted = _.sum(results1, function(result){
          if(result==="selectA"){
            return 1
          }
        });
        expect(counted).to.equal(results1.length);
        expect(results2.indexOf("selectB1")).to.be.least(0);
        expect(results2.indexOf("selectB2")).to.be.least(0);
      });
    });
    describe("condition benchmarkA<0, benchmarkB>0, selectedA=0 and close to bmA, selectedB>0", function(){
      it("should give selectA as first and selectB as second", function(){
        var results = select.select(fx.selectStage2Situation.reprNegAPosB.closeA.zero,fx.selectStage2Situation.comparisonsA, fx.selectStage2Situation.assessment2,fx.selectStage2Situation.assessor);
        expect(results.result[0]._id).to.equal("selectA");
        expect(results.result[1]._id).to.equal("selectB");
      });
    });
  } );
} );
