'use strict';
var _ = require("lodash");
var selectA = require("./selectReprA");
var numCompJudge = require("./Stage1/numCompJudge");
var nearestCuttingPoint = require("./Stage2/nearestCuttingPoint");
var subsetNComp = require("./Stage2/subsetNComp");

/**
 * Select and return 2 representations to compare
 * @param representations A list of representation objects
 * @param comparisons A list of comparisons already done
 * @param assessment The assessment the comparison is for
 * @param assessor The current assessor id
 * @returns {*} An array with 2 representations or a message
 */
function select( representations,
                 comparisons,
                 assessment,
                 assessor){

  if(!representations || !comparisons || !assessment || !assessor){
   throw new Error("all parameters should be defined: representations, comparisons, assessment, assessor")
  }

  if(!_.isArray(representations) || representations.length<3){
    throw new Error("representations should be an array containing at least 3 items")
  }

  if(!_.find(representations, {rankType: "to rank"})) {
    throw new Error("representations should contain at least one representation that is to rank")
  }

  if(!_.find(representations, {rankType:"benchmark"})){
    throw new Error("representations should contain at least one benchmark");
  }

  var counted = _.countBy(_.filter(representations, {rankType:"ranked"}), function(rep){
    return (_.find(representations, {"_id":rep.closeTo, rankType:"benchmark" }))?"y":"n";
  });

  if(!counted || !counted.y || counted.y < 2){
    throw new Error("representations should contain at least 2 objects that are ranked and close to a benchmark")
  }

  if(!assessment.stage || !_.isNumber(assessment.stage)|| assessment.stage < 0 || assessment.stage > 2){
    throw new Error("assessment should have a stage field which can only contain the numerical value 1 or 2")
  }

  //Check if there are to rank representations with comp < 10
  if(_.find(representations, function(representation){  //COULD WE NOT DO THIS IN SWICH?
      return (representation.rankType === "to rank" && _.get(representation, "compared.length", 0) < 10);
    })) {

    var representationA = selectA(representations, comparisons, assessor);

    var representationB;

    var maxComp = assessment.comparisonsNum.stage[0] ? assessment.comparisonsNum.stage[0] : 5;

    //What stage are we in
    switch (assessment.stage) {
      case 1:
        if(numCompJudge(comparisons, assessor)>=maxComp)
          return {messages: ["You can't make any more comparisons at the moment."]};
        representationB = selectBStage1(representations, comparisons, representationA);
        break;
      case 2:
        if(_.find(representations, function(representation){
            return (! representation.ability || !representation.ability.value); //CHANGE TO BETTER TEST!!!
          }) ){
          throw new Error("all representations should have an ability.value field that is not NA")
        };
        representationB = selectBStage2(representations, comparisons, representationA);
        break;
    }

    //Return the result
    return [representationA, representationB];

  } else {

    //Return a message saying all comparisons are done
    return {messages: ["All comparisons have been made"]};

  }

}

/**
 * Select representationB if stage is 1
 * @param representations A list of representations
 * @param comparisons A list of comparisons
 * @param representationA The first representation
 * @returns A representation
 */
function selectBStage1(representations, comparisons, representationA) {
  var selectB = require("./Stage1/selectReprB");
  return selectB(representations, comparisons, representationA)
}

/**
 * Select representationB if stage is 2
 * @param representations
 * @param comparisons
 * @returns A representation
 */
function selectBStage2(representations, comparisons, representationA) {

  var selectB = require("./Stage2/selectReprB");

  //Calculate nearest cutting point
  var cuttingPoint = nearestCuttingPoint(representationA.ability, _.filter(representations, {rankType: "benchmark"}));

  var subset = subsetNComp.subsetCloseTo(representations, cuttingPoint._id);

  return selectB(subset, cuttingPoint.ability.value);
}

module.exports = {
  select : select
};
