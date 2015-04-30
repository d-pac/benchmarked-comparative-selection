
var _ = require('lodash');
var raschStats = require('./raschStats');

function selectReprB(candidateOppos,cuttingAbil){
  var Finfo = [];
  _.each(candidateOppos, function(oppo){
    var tempInfo = raschStats.fischerI(cuttingAbil,oppo.ability.value);
    Finfo.push({ _id: oppo._id,
                 info: tempInfo
    })
  });
  //console.log(Finfo);

  candidateOppos = _.sortByOrder(_.shuffle(candidateOppos),function(oppo){
    return raschStats.fischerI(cuttingAbil,oppo.ability.value)
      }, false
    );//shuffle and sort descending on info
//console.log(candidateOppos);
  return candidateOppos.shift();//cut highest value from infoObject
}

module.exports = selectReprB;
