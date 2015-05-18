
var _ = require('lodash');
var raschStats = require('../raschStats');

function selectReprB(candidateOppos,cuttingAbil){
  candidateOppos = _.sortByOrder(_.shuffle(candidateOppos),function(oppo){
    return raschStats.fischerI(cuttingAbil,oppo.ability.value)
      }, false
    );//shuffle and sort descending on info
//console.log(candidateOppos);
  return candidateOppos.shift();//cut highest value from infoObject
}

module.exports = selectReprB;
