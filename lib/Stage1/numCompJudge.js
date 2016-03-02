var _ = require( 'lodash' );

/**
 * Calculate the amount of comparisons a judge has done
 * @param comparisons List of comparisons
 * @param judgeId The judge
 * @returns {*} Number of comparisons
 */
function numCompJudge( comparisons,
                       judgeId ){
  var n= _.filter( comparisons, { assessor: judgeId } ).length;
  return n;
}

module.exports = numCompJudge;
