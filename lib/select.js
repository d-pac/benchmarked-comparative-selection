'use strict';
var _ = require( "lodash" );
var spec = require( 'd-pac.plugins-spec' );

var selectA = require( "./selectReprA" );
var numCompJudge = require( "./Stage1/numCompJudge" );
var nearestCuttingPoint = require( "./Stage2/nearestCuttingPoint" );
var subsetNComp = require( "./Stage2/subsetNComp" );
var constants = require( './constants' );

var validatePayload = spec.createValidator( 'selectionpayload', {
  "selectionpayload": {
    properties: {
      "representations": {
        required: true,
        minItems: 3
      },
      "comparisons": {
        required: true
      },
      "assessment": {
        required: true
      },
      "assessor": {
        required: true
      }
    }
  },
  "representation": {
    properties: {
      "compared": {
        required: true
      },
      "rankType": {
        required: true
      },
      "ability": {
        required: true
      }
    }
  },
  "assessment": {
    properties: {
      "limits": {
        properties: {
          "comparisonsNum": {
            properties: {
              "perAssessor": {
                required: true
              }
            }
          },
          "assessorsNum": {
            required: false
          }
        }
      },
      "stage": {
        //inclusive
        maximum: 1,
        minimum: 0,
        required: true
      },
    }
  }
} );

var errorHead = '[benchmarked-comparative-selection] An error occurred:';

/**
 * Select representationB if stage is 1
 * @param {[]} representations - A list of representations
 * @param {[]} comparisons - A list of comparisons
 * @param {{}} representationA - The first representation
 * @returns {{}} - A representation
 */
function selectBStage1( representations,
                        comparisons,
                        representationA ){
  var selectB = require( "./Stage1/selectReprB" );
  return selectB( representations, comparisons, representationA );
}

/**
 * Select representationB if stage is 2
 * @param {[]} representations - List of representations
 * @param {[]} comparisons - List of comparisons
 * @param {{}} representationA - The first representation
 * @returns {{}} - A representation
 */
function selectBStage2( representations,
                        comparisons,
                        representationA ){

  var selectB = require( "./Stage2/selectReprB" );

  //Calculate nearest cutting point
  var cuttingPoint = nearestCuttingPoint( representationA.ability.value, _.filter( representations, { rankType: "benchmark" } ) );

  //Create subset based on cutting point
  var subset = subsetNComp.subsetCloseTo( representations, cuttingPoint._id );
  subset = subsetNComp.subsetNcomp( subset );
  if( subset.length < 2 ){
    return subset[ 0 ];
  }
  return selectB( subset, cuttingPoint.ability.value );
}

/**
 * Select and return 2 representations to compare
 * @param {{}} payload - contains all relevant data
 * @param {[]} payload.representations - A list of representation objects
 * @param {[]} payload.comparisons - A list of comparisons already done
 * @param {{}} payload.assessment - The assessment the comparison is for
 * @param {string} payload.assessor - The current assessor id
 * @returns {{}} - An object with either a `results` field containing an Array with 2 selected representations,
 * or a `messages` field containing an Array with messages
 */
function select( payload ){

  var payloadValidation = validatePayload( payload );

  if( !payloadValidation.isValid ){
    var err = errorHead;
    if( payloadValidation.errors.length > 1 ){
      err = '[benchmarked-comparative-selection] Multiple errors occurred:';
    }
    throw new Error( _.reduce( payloadValidation.errors, function( message,
                                                                   error ){
      var field = error.field.replace( 'data', 'payload' );
      return [ message, field, error.message + '.' ].join( ' ' );
    }, err ) );
  }

  var representations = payload.representations;
  var comparisons = payload.comparisons;
  var assessment = payload.assessment;
  var assessor = payload.assessor;

  if( !_.find( representations, { rankType: "to rank" } ) ){
    throw new Error( errorHead + " payload.representations should contain at least one representation that is to rank" );
  }

  if( !_.find( representations, { rankType: "benchmark" } ) ){
    throw new Error( errorHead + " payload.representations should contain at least one benchmark" );
  }

  var counted = _.countBy( _.filter( representations, { rankType: "ranked" } ), function( rep ){
    return (_.find( representations, {
      "_id": rep.closeTo,
      rankType: "benchmark"
    } ))
      ? "y"
      : "n";
  } );

  if( !counted || !counted.y || counted.y < 2 ){
    throw new Error( errorHead + " payload.representations should contain at least 2 objects that are ranked and close to a benchmark" );
  }

  //Check if there are to rank representations with comp < 10
  if( _.find( representations, function( representation ){
      return (representation.rankType === "to rank" && _.get( representation, "compared.length", 0 ) < _.get( assessment, "limits.comparisonsNum.perRepresentation", 10 ));
    } ) ){

    var countBenchmarks = _.filter( representations, { rankType: "benchmark" } ).length;
    var countToRanks = _.filter( representations, { rankType: "to rank" } ).length;
    if( assessment.stage === 0 ){
      //check if for all comparisons completed there are representations with less than Nbenchmark comparisons

      var countComparisons = {};

      _.forEach( representations, function( representation ){
        if( representation.rankType === "to rank" ){
          countComparisons[ representation._id ] = 0;
        }
      } );

      _.forEach( comparisons, function( comparison ){
        if( _.get( comparison, 'data.selection', undefined ) !== undefined ){
          if( _.has( countComparisons, comparison.representations.a ) ){
            countComparisons[ comparison.representations.a ]++;
          }
          if( _.has( countComparisons, comparison.representations.b ) ){
            countComparisons[ comparison.representations.b ]++;
          }
        }
      } );

      if( _.find( countComparisons, function( comparisonCount ){
          return comparisonCount < countBenchmarks;
        } ) === undefined ){
        return { messages: [ constants.messages.STAGE_COMPLETED ] };
      }
    }

    var representationA, representationB;

    var maxComp = countBenchmarks * countToRanks / _.get( assessment, "limits.assessorsNum", 4 );

    var judged = numCompJudge( comparisons, assessor );
    //What stage are we in
    switch( assessment.stage ){
      case 0:
        if( judged >= maxComp ){
          return { messages: [ constants.messages.ASSESSOR_STAGE_COMPLETED ] };
        }
        representationA = selectA( representations, comparisons, assessor );
        representationB = selectBStage1( representations, comparisons, representationA );
        break;
      case 1:
        if( judged >= _.get( assessment, "limits.comparisonsNum.perAssessor", 10 ) ){
          return { messages: [ constants.messages.ASSESSOR_ASSESSMENT_COMPLETED ] };
        }
        if( _.find( representations, function( representation ){
            return (_.get( representation, "ability.value", null ) == undefined); //eslint-disable-line eqeqeq
          } ) ){
          throw new Error( errorHead + " payload.representations should all have an ability.value field that is not NA" );
        }
        representationA = selectA( representations, comparisons, assessor );
        representationB = selectBStage2( representations, comparisons, representationA );
        break;
      default:
        //we should never get here, since the json schema validation already took care of this case.
        throw new Error( errorHead + " payload.assessment.stage doesn't have a correct value" );
    }

    //Return the result
    return { result: [ representationA, representationB ] };

  }

  //Return a message saying all comparisons are done
  return { messages: [ constants.messages.ASSESSMENT_COMPLETED ] };

}

module.exports = {
  select: select,
  constants: constants
};
