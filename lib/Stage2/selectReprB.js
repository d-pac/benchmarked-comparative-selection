
var _ = require('lodash');
var raschStats = require('../raschStats');

function selectReprB(candidateOppos,cuttingAbil){
  if(!candidateOppos || !_.isArray(candidateOppos) || candidateOppos.length<2){
    throw new Error("candidateOppos should be an array with length 2");
  }
  _.each(candidateOppos, function(oppo){
    if(!oppo.ability || !oppo.ability.value || !_.isNumber(oppo.ability.value)){
      throw new Error("candidateOppos should have an 'ability.value' field which is numeric");
    }
  });

  if(!cuttingAbil || !_.isNumber(cuttingAbil) || _.isNaN(cuttingAbil)){
    throw new Error("cuttingAbil should be a number");
  }

  candidateOppos = _.sortByOrder(_.shuffle(candidateOppos),function(oppo){
    return raschStats.fischerI(cuttingAbil,oppo.ability.value)
      }, false
    );//shuffle and sort descending on info
  return candidateOppos.shift();//cut highest value from infoObject
}

module.exports = selectReprB;
