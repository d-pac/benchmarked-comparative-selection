'use strict';
var _ = require("lodash")
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

  //Check if there are to rank representations with comp < 10
  if(_.find(representations, function(representation){
      return (representation.rankType === "to rank" && representation.comparedNum < 10);
    })) {

    var representationA = selectA(representations, comparisons, assessor);

    var representationB;

    //What stage are we in
    switch (assessment.stage) {
      case 1:
        //TODO Max comp berekenen?
        if(numCompJudge(comparisons, assessor)>=5)
          return {messages: ["You can't make any more comparisons at the moment."]};
        representationB = selectBStage1(representations, comparisons, representationA);
        break;
      case 2:
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

  //Calculate conditional likely
  var cuttingPoint = nearestCuttingPoint(representationA.ability);

  var subset = subsetNComp.subsetCloseTo(representations, cuttingPoint);

  return selectB(candidateOpponents, subset);
}

module.exports = {
  select : select
};
