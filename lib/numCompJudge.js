
var _ = require('lodash');

function numCompJudge(comparisons, judgeId){
  // calculate the number of comparisons this judge has already done
  var numComp = 0;
  _.each(comparisons, function(comparison){
    if(comparison.assessor == judgeId){ // if this comparison has been done by current judge
      numComp++; // add 1 to numComp
    }
  });
 return numComp
}

module.exports = numCompJudge;
