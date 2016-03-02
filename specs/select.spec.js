'use strict';

var expect = require( 'must' );
var select = require( '../lib/select' );
var constants = require( '../lib/constants' );
var _ = require( 'lodash' ),
  fx = require( './fixtures/index' );

describe( "select", function(){

  describe( "spec file", function(){
    it( "must be found", function(){
      expect( true ).to.be.true();
    } );
  } );

  describe( "module", function(){
    it( "should export an object", function(){
      expect( select ).to.be.an.object();
    } );
    describe( "exported object", function(){
      it( "should have a select function", function(){
        expect( select.select ).to.be.a.function();
      } );
    } );
  } );

  describe( "#select", function(){
    var inputErrorA = /parameters should be defined/;
    var inputErrorB = /should be an array/;
    var inputErrorC = /one representation that is to rank/;
    var inputErrorD = /least one benchmark/;
    var inputErrorE = /2 objects that are ranked and close to a benchmark/;
    var inputErrorF = /assessment stage doesn't have a correct value/;
    var inputErrorG = /should have an ability.value/;
    it( "should throw an error when `payload` is undefined", function(){
      expect( function(){
        select.select();
      } ).to.throw( /An error occurred: payload is required/i );
    } );
    it( "should throw an error when `payload.representations` is not a array", function(){
      expect( function(){
        select.select( {
          representations: { _id: "representations: invalid input" },
          comparisons: fx.select.comparisons,
          assessment: fx.select.assessment,
          assessor: fx.select.assessor
        } );
      } ).to.throw( /payload.representations is the wrong type/i );
    } );
    it( "should throw an error when `payload.representations` does not contain at least 3 elements", function(){
      expect( function(){
        select.select( {
          representations: fx.select.representations.slice( 0, 2 ),
          comparisons: fx.select.comparisons,
          assessment: fx.select.assessment,
          assessor: fx.select.assessor
        } );
      } ).to.throw( /payload.representations has less items than allowed/i );
    } );
    it( "should throw an error when representations does not contain a representation to rank", function(){
      expect( function(){
        select.select( {
          representations: fx.select.representationsMissingToRank,
          comparisons: fx.select.comparisons,
          assessment: fx.select.assessment,
          assessor: fx.select.assessor
        } );
      } ).to.throw( /payload.representations should contain at least one representation that is to rank/i );
    } );
    it( "should throw an error when representations does not contain a benchmark", function(){
      expect( function(){
        select.select( {
          representations: fx.select.representationsMissingBenchmark,
          comparisons: fx.select.comparisons,
          assessment: fx.select.assessment,
          assessor: fx.select.assessor
        } );
      } ).to.throw( /An error occurred: payload.representations should contain at least one benchmark/i );
    } );
    it( "should throw an error when representations does not contain an object that is ranked and close to benchmark",
      function(){
        expect( function(){
          select.select( {
            representations: [
              {
                _id: "to rank 1",
                rankType: "to rank",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              }, {
                _id: "benchmark",
                rankType: "benchmark",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              },
              {
                _id: "to rank 2",
                rankType: "to rank",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              }
            ],
            comparisons: fx.select.comparisons,
            assessment: fx.select.assessment,
            assessor: fx.select.assessor
          } );
        } ).to.throw( /An error occurred: payload.representations should contain at least 2 objects that are ranked and close to a benchmark/i );
        expect( function(){
          select.select( {
            representations: [
              {
                _id: "to rank",
                rankType: "to rank",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              }, {
                _id: "benchmark",
                rankType: "benchmark",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              },
              {
                _id: "ranked",
                rankType: "ranked",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              }
            ],
            comparisons: fx.select.comparisons,
            assessment: fx.select.assessment,
            assessor: fx.select.assessor
          } );
        } ).to.throw( /An error occurred: payload.representations should contain at least 2 objects that are ranked and close to a benchmark/i );
        expect( function(){
          select.select( {
            representations: [
              {
                _id: "to rank",
                rankType: "to rank",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              }, {
                _id: "benchmark",
                rankType: "benchmark",
                compared: [],
                ability: {
                  value: null,
                  se: null
                }
              },
              {
                _id: "ranked",
                rankType: "ranked",
                compared: [],
                ability: {
                  value: null,
                  se: null
                },
                closeTo: "invalid"
              },
              {
                _id: "ranked 2",
                rankType: "ranked",
                compared: [],
                ability: {
                  value: null,
                  se: null
                },
                closeTo: "benchmark"
              }
            ],
            comparisons: fx.select.comparisons,
            assessment: fx.select.assessment,
            assessor: fx.select.assessor
          } );
        } ).to.throw( /An error occurred: payload.representations should contain at least 2 objects that are ranked and close to a benchmark/i );
      } );
    it( "should throw an error when assessment does not contain a stage field equal to 0 or 1", function(){
      expect( function(){
        select.select( {
          representations: fx.select.representations,
          comparisons: fx.select.comparisons,
          assessment: {
            _id: "assessment01",
            limits: {
              comparisonsNum: {
                perRepresentation: 10,
                perAssessor: 7
              }
            }
          },
          assessor: fx.select.assessor
        } );
      } ).to.throw( /An error occurred: payload.assessment referenced schema does not match/ );
      expect( function(){
        select.select( {
          representations: fx.select.representations,
          comparisons: fx.select.comparisons,
          assessment: {
            _id: "assessment01",
            limits: {
              comparisonsNum: {
                perRepresentation: 10,
                perAssessor: 7
              }
            },
            stage: -1
          },
          assessor: fx.select.assessor
        } );
      } ).to.throw( /An error occurred: payload.assessment referenced schema does not match/ );
      expect( function(){
        select.select( {
          representations: fx.select.representations,
          comparisons: fx.select.comparisons,
          assessment: {
            _id: "assessment01",
            limits: {
              comparisonsNum: {
                perRepresentation: 10,
                perAssessor: 7
              }
            },
            stage: 2
          },
          assessor: fx.select.assessor
        } );
      } ).to.throw( /An error occurred: payload.assessment referenced schema does not match/ );
    } );
    it( "should not return a message when all comparisons have been sent out but not finished in stage0", function(){
      var result = select.select( {
        representations: fx.select.notFinishedNoMessage.representations,
        comparisons: fx.select.notFinishedNoMessage.comparisons,
        assessment: fx.select.notFinishedNoMessage.assessment,
        assessor: fx.select.notFinishedNoMessage.assessor
      } );
      expect( result ).to.not.be.null();
      expect( result ).to.be.an.object();
      expect( result.messages ).to.be.undefined();
    } );
    it( "should not return a message when all comparisons but one have been finished in stage0", function(){
      var result = select.select( {
        representations: fx.select.oneNotFinishedNoMessage.representations,
        comparisons: fx.select.oneNotFinishedNoMessage.comparisons,
        assessment: fx.select.oneNotFinishedNoMessage.assessment,
        assessor: fx.select.oneNotFinishedNoMessage.assessor
      } );
      expect( result ).to.not.be.null();
      expect( result ).to.be.an.object();
      expect( result.messages ).to.be.undefined();
    } );
    it( "should return a message when all comparisons have been made", function(){
      var result = select.select( {
        representations: fx.select.reprNoMoreComparisons,
        comparisons: fx.select.comparisons,
        assessment: fx.select.assessment,
        assessor: fx.select.assessor
      } );
      expect( result.messages[ 0 ] ).to.equal( constants.messages.ASSESSMENT_COMPLETED );
    } );
    it( "should return a message the assessor has reached the default max comparisons for stage 0", function(){
      var result = select.select( {
        representations: fx.select.representations,
        comparisons: fx.select.assessorMaxComparisonsStageA,
        assessment: fx.select.assessment4,
        assessor: fx.select.assessor
      } );
      expect( result.messages[ 0 ] ).to.equal( constants.messages.ASSESSOR_STAGE_COMPLETED );
    } );
    it( "should return a message the assessor has reached the set max comparisons for stage 0", function(){
      var result = select.select( {
        representations: fx.select.representations,
        comparisons: fx.select.assessorMaxComparisonsStageB,
        assessment: fx.select.assessment,
        assessor: fx.select.assessor
      } );
      expect( result.messages[ 0 ] ).to.equal( constants.messages.ASSESSOR_STAGE_COMPLETED );
    } );
    it( "should return a message the assessor has reached the default max comparisons for this assessment", function(){
      var result = select.select( {
        representations: fx.select.representations,
        comparisons: fx.select.AssessorMaxComparisonsTotalA,
        assessment: fx.select.assessment2,
        assessor: fx.select.assessor
      } );
      expect( result.messages[ 0 ] ).to.equal( constants.messages.ASSESSOR_ASSESSMENT_COMPLETED );
    } );
    it( "should return a message the assessor has reached the set max comparisons for this assessment", function(){
      var result = select.select( {
        representations: fx.select.representations,
        comparisons: fx.select.AssessorMaxComparisonsTotalB,
        assessment: fx.select.assessment3,
        assessor: fx.select.assessor
      } );
      expect( result.messages[ 0 ] ).to.equal( constants.messages.ASSESSOR_ASSESSMENT_COMPLETED );
    } );
    it( "should not return a message when all comparisons have been finished because we started stage1", function(){
      var result = select.select( {
        representations: fx.select.stage1NoMessage.representations,
        comparisons: fx.select.stage1NoMessage.comparisons,
        assessment: fx.select.stage1NoMessage.assessment,
        assessor: fx.select.stage1NoMessage.assessor
      } );
      expect( result ).to.not.be.null();
      expect( result ).to.be.an.object();
      expect( result.messages ).to.be.undefined();
    } );
    it( "should throw an error in stage 2 when at least one representation does not have an ability field", function(){
      expect( function(){
        var result = select.select( {
          representations: fx.select.reprMissingAbility,
          comparisons: fx.select.comparisons,
          assessment: fx.select.assessment2,
          assessor: fx.select.assessor
        } );
      } ).to.throw( /An error occurred: payload.representations.2 referenced schema does not match/i );
    } );
    it( "should throw an error in stage 2 when at least one representation does not have an ability.value field", function(){
      expect( function(){
        var result = select.select( {
          representations: fx.select.reprMissingAbilityValue,
          comparisons: fx.select.comparisons,
          assessment: fx.select.assessment2,
          assessor: fx.select.assessor
        } );
      } ).to.throw( /An error occurred: payload.representations should all have an ability.value field that is not NA/i );
    } );
    it( "should return an object with a result property 2 different representations in stage 1", function(){
      var reps = select.select( {
        representations: fx.select.representations,
        comparisons: fx.select.comparisons,
        assessment: fx.select.assessment,
        assessor: fx.select.assessor
      } );
      expect( reps.result.length ).to.equal( 2 );
      expect( _.get( reps.result[ 0 ], "_id" ) ).to.not.be.null();
      expect( _.get( reps.result[ 1 ], "_id" ) ).to.not.be.null();
      expect( _.get( reps.result[ 0 ], "_id" ) ).must.not.equal( _.get( reps.result[ 1 ], "_id" ) );
    } );
    it( "should return an object with a result property with 2 different representations in stage 2", function(){
      var reps = select.select( {
        representations: fx.selectStage2Situation.reprNegAPosB.closeA.pos,
        comparisons: fx.selectStage2Situation.comparisonsA,
        assessment: fx.selectStage2Situation.assessment2,
        assessor: fx.selectStage2Situation.assessor
      } );
      expect( reps.result.length ).to.equal( 2 );
      expect( _.get( reps.result[ 0 ], "_id" ) ).to.not.be.null();
      expect( _.get( reps.result[ 1 ], "_id" ) ).to.not.be.null();
      expect( _.get( reps.result[ 0 ], "_id" ) ).must.not.equal( _.get( reps.result[ 1 ], "_id" ) );
    } );

    // testing stage 0

    //situation 1: one comparison sent out for one to Rank, none for the other
    //should select other toRank if one is already sent out
    it( "should give rep08 as A & rep02 or rep04 as B, regardless of which user", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations,
          comparisons: fx.selectStage1Situation.comparisons,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId1
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02" && _.get( result.result[ 1 ], "_id" ) !== "rep04";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08";
      } ) ).to.be.undefined();

      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations,
          comparisons: fx.selectStage1Situation.comparisons,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }
      expect( _.find( results, function( result,
                                         i ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02" && _.get( result.result[ 1 ], "_id" ) !== "rep04";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08";
      } ) ).to.be.undefined();
    } );

    //when >2 toRank, should randomly select another toRank if one is already sent out

    it( "should give rep08 or rep09 as A & rep02 or rep04 as B, regardless of which user", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.oneSentOutRepresentation3toRank,
          comparisons: fx.selectStage1Situation.comparisons,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId1
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08" && _.get( result.result[ 0 ], "_id" ) !== "rep09";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02" && _.get( result.result[ 1 ], "_id" ) !== "rep04";
      } ) ).to.be.undefined();

      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.oneSentOutRepresentation3toRank,
          comparisons: fx.selectStage1Situation.comparisons,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08" && _.get( result.result[ 0 ], "_id" ) !== "rep09";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02" && _.get( result.result[ 1 ], "_id" ) !== "rep04";
      } ) ).to.be.undefined();

    } );

    //when toRank representation have been sent out in an equal amount but one is seen less often by this judge, this should be selected, for this A the non-selected benchmark should be used

    it( "should give rep08  as A & rep02 as B for assessorId2 & rep01 as A & rep04  as B for assessorId1", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.equalSentOutButSeenMoreRepresentation,
          comparisons: fx.selectStage1Situation.equalSentOutButSeenMoreComparisons,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02";
      } ) ).to.be.undefined();

      results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.equalSentOutButSeenMoreRepresentation,
          comparisons: fx.selectStage1Situation.equalSentOutButSeenMoreComparisons,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId1
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep01";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep04";
      } ) ).to.be.undefined();

    } );

    //when toRank representation has been sent out less, this should be selected, for this A  all benchmarks have been selected, it should select paper from BM least chosen, ie rep07, regardless of user

    it( "should give rep01 as A & rep07 as B", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations5,
          comparisons: fx.selectStage1Situation.comparisons5,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId1
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep01";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep07";
      } ) ).to.be.undefined();

      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations5,
          comparisons: fx.selectStage1Situation.comparisons5,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep01";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep07";
      } ) ).to.be.undefined();
    } );

    //when toRank representation has been sent out less (rep01), this should be selected, for this A  if a benchmark comp is completed, it should select paper from the other BM, ie rep07, regardless of user

    it( "situation B: should give rep01 as A & rep07 as B", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations6,
          comparisons: fx.selectStage1Situation.comparisons6,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId1
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep01";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep07";
      } ) ).to.be.undefined();

      results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations5,
          comparisons: fx.selectStage1Situation.comparisons6,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }
      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep01";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep07";
      } ) ).to.be.undefined();
    } );

    // testing situation 2 stage 0

    it( "rep01 as A and rep04 as B for user01", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations2,
          comparisons: fx.selectStage1Situation.comparisons2,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId1
        } ) );
      }

      /*console.log( "Count B: " + JSON.stringify( _.countBy( results, function( rep ){
       return rep.result[ 1 ]._id;
       } ) ) );*/

      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep01";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep04";
      } ) ).to.be.undefined();
    } );

    it( "should give rep08 as A and rep02 as B for user11", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations2,
          comparisons: fx.selectStage1Situation.comparisons2,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }

      //console.log( "Count B: " + JSON.stringify( _.countBy( results, function( rep ){
      //    return rep.result[ 1 ]._id;
      //  } ) ) );

      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02";
      } ) ).to.be.undefined();

    } );

    it( "should give rep08 as A and rep02 or rep09 as B for user11", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations3,
          comparisons: fx.selectStage1Situation.comparisons3,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }

      /* console.log( "Count B: " + JSON.stringify( _.countBy( results, function( rep ){
       return rep.result[ 1 ]._id;
       } ) ) );*/

      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02" && _.get( result.result[ 1 ], "_id" ) !== "rep09";
      } ) ).to.be.undefined();
    } );

//stage 0 situation 3
    it( "should give rep08 as A and rep02 or rep09 as B for user11", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( select.select( {
          representations: fx.selectStage1Situation.representations3,
          comparisons: fx.selectStage1Situation.comparisons3,
          assessment: fx.selectStage1Situation.assessment1,
          assessor: fx.selectStage1Situation.assessorId2
        } ) );
      }

      /*console.log( "Count B: " + JSON.stringify( _.countBy( results, function( rep ){
       return rep.result[ 1 ]._id;
       } ) ) );*/

      expect( _.find( results, function( result ){
        return _.get( result.result[ 0 ], "_id" ) !== "rep08";
      } ) ).to.be.undefined();
      expect( _.find( results, function( result ){
        return _.get( result.result[ 1 ], "_id" ) !== "rep02" && _.get( result.result[ 1 ], "_id" ) !== "rep09";
      } ) ).to.be.undefined();
    } );

//stage0 should be done, but keeps on generating pairs?
    it( "should give a message  if all stage0 comparisons are done", function(){
      var result = select.select( {
        representations: fx.selectStage1Situation.representations4,
        comparisons: fx.selectStage1Situation.comparisons4,
        assessment: fx.selectStage1Situation.assessment1,
        assessor: fx.selectStage1Situation.assessorId2
      } );
      expect( result.messages[ 0 ] ).to.equal( constants.messages.STAGE_COMPLETED );
    } );

    //testing situations stage 1
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA close to bmA and selectedB>0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.pos,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA and selectedB<0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.negAbil,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and < bmA, selectedB<0 and different number of comparisons", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.below.negAbil.diffComp,
          comparisons: fx.selectStage2Situation.comparisonsC,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and < bmA and selectedB<0, and equal number of comparisons", function(){
      it( "should give selectA as first and selectB1 to selectB4 as second", function(){
        var results1 = [], results2 = [];
        for( var i = 0; i < 100; i++ ){
          var tempStore = select.select( {
            representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.below.negAbil.equalComp,
            comparisons: fx.selectStage2Situation.comparisonsD,
            assessment: fx.selectStage2Situation.assessment2,
            assessor: fx.selectStage2Situation.assessor
          } );
          results1.push( tempStore.result[ 0 ]._id );
          results2.push( tempStore.result[ 1 ]._id )
        }
        var counted = _.sumBy( results1, function( result ){
          if( result === "selectA" ){
            return 1
          }
        } );
        expect( counted ).to.equal( results1.length );
        expect( results2.indexOf( "selectB1" ) ).to.be.least( 0 );
        expect( results2.indexOf( "selectB2" ) ).to.be.least( 0 );
        expect( results2.indexOf( "selectB3" ) ).to.be.least( 0 );
        expect( results2.indexOf( "selectB4" ) ).to.be.least( 0 );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA>0 and close to and > bmA, selectedB<0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.posAbil,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA, selectedB=0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.zero,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA, selectedB=bmA", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.equal,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to and > bmA, selectedB1-2=bmA", function(){
      it( "should give selectA as first and selectB1 to selectB2 as second", function(){
        var results1 = [], results2 = [];
        for( var i = 0; i < 100; i++ ){
          var tempStore = select.select( {
            representations: fx.selectStage2Situation.reprNegAPosB.closeA.neg.above.twoEqual,
            comparisons: fx.selectStage2Situation.comparisonsB,
            assessment: fx.selectStage2Situation.assessment2,
            assessor: fx.selectStage2Situation.assessor
          } );
          results1.push( tempStore.result[ 0 ]._id );
          results2.push( tempStore.result[ 1 ]._id )
        }
        var counted = _.sumBy( results1, function( result ){
          if( result === "selectA" ){
            return 1
          }
        } );
        expect( counted ).to.equal( results1.length );
        expect( results2.indexOf( "selectB1" ) ).to.be.least( 0 );
        expect( results2.indexOf( "selectB2" ) ).to.be.least( 0 );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA>0 and close to bmB, selectedB>0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeB.pos,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and close to bmB, selectedB>0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeB.neg,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA>0 and between bmA and bmB, selectedB1>0", function(){
      it( "should give selectA as first and selectB1 to selectB2 as second", function(){
        var results1 = [], results2 = [];
        for( var i = 0; i < 100; i++ ){
          var tempStore = select.select( {
            representations: fx.selectStage2Situation.reprNegAPosB.middle.pos,
            comparisons: fx.selectStage2Situation.comparisonsE,
            assessment: fx.selectStage2Situation.assessment2,
            assessor: fx.selectStage2Situation.assessor
          } );
          results1.push( tempStore.result[ 0 ]._id );
          results2.push( tempStore.result[ 1 ]._id )
        }
        var counted = _.sumBy( results1, function( result ){
          if( result === "selectA" ){
            return 1
          }
        } );
        expect( counted ).to.equal( results1.length );
        expect( results2.indexOf( "selectB1" ) ).to.be.least( 0 );
        expect( results2.indexOf( "selectB2" ) ).to.be.least( 0 );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA<0 and between bmA and bmB, selectedB1>0", function(){
      it( "should give selectA as first and selectB1 to selectB2 as second", function(){
        var results1 = [], results2 = [];
        for( var i = 0; i < 100; i++ ){
          var tempStore = select.select( {
            representations: fx.selectStage2Situation.reprNegAPosB.middle.neg,
            comparisons: fx.selectStage2Situation.comparisonsE,
            assessment: fx.selectStage2Situation.assessment2,
            assessor: fx.selectStage2Situation.assessor
          } );
          results1.push( tempStore.result[ 0 ]._id );
          results2.push( tempStore.result[ 1 ]._id )
        }
        var counted = _.sumBy( results1, function( result ){
          if( result === "selectA" ){
            return 1
          }
        } );
        expect( counted ).to.equal( results1.length );
        expect( results2.indexOf( "selectB1" ) ).to.be.least( 0 );
        expect( results2.indexOf( "selectB2" ) ).to.be.least( 0 );
      } );
    } );
    describe( "condition benchmarkA<0, benchmarkB>0, selectedA=0 and close to bmA, selectedB>0", function(){
      it( "should give selectA as first and selectB as second", function(){
        var results = select.select( {
          representations: fx.selectStage2Situation.reprNegAPosB.closeA.zero,
          comparisons: fx.selectStage2Situation.comparisonsA,
          assessment: fx.selectStage2Situation.assessment2,
          assessor: fx.selectStage2Situation.assessor
        } );
        expect( results.result[ 0 ]._id ).to.equal( "selectA" );
        expect( results.result[ 1 ]._id ).to.equal( "selectB" );
      } );
    } );
  } );
} );
