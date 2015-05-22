
var _ = require('lodash');
var raschStats = require('../raschStats');

function selectReprB(candidateOppos,cuttingAbil){
  if(!candidateOppos || !_.isArray(candidateOppos) || candidateOppos.length<2){
    throw new Error("candidateOppos should be a vector with length 2");
  }
  if(!cuttingAbil || !_.isNumber(cuttingAbil) || !_.isNaN(cuttingAbil)){
    throw new Error("cuttingAbil should be a number");
  }

  candidateOppos = _.sortByOrder(_.shuffle(candidateOppos),function(oppo){
    return raschStats.fischerI(cuttingAbil,oppo.ability.value)
      }, false
    );//shuffle and sort descending on info
//console.log(candidateOppos);
  return candidateOppos.shift();//cut highest value from infoObject
}

module.exports = selectReprB;
