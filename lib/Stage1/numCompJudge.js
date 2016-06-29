"use strict";

var _ = require( 'lodash' );

/**
 * Calculate the amount of comparisons a judge has done
 * @param {[]} comparisons - List of comparisons
 * @param {string} judgeId - The judge
 * @returns {number} Number of comparisons
 */
function numCompJudge( comparisons,
                       judgeId ){
  return _.filter( comparisons, { assessor: judgeId } ).length;
}

module.exports = numCompJudge;
