
var _ = require('lodash');

function numCompJudge(comparisons, judgeId){
  return _.filter(comparisons, {assessor: judgeId} ).length;
}

module.exports = numCompJudge;
