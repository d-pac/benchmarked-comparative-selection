
var _ = require('lodash');

function subsetCloseTo(representations, cuttingPoint){
  var candidateOppos = [];
  _.each(representations, function(representation){//select representations closeto cuttingPoint
    if(representation.closeTo == cuttingPoint){
      candidateOppos.push(representation)
    }
  });
  return candidateOppos;
}

function subsetNcomp(candidateOpponents){
  var smallestNcomp = _.min(candidateOpponents, function(oppo){
    return oppo.compared.length;
  }).compared.length;//find and store smallest number of comparionsonNum in representations
  return(_.filter(candidateOpponents, function(opponent){
          return opponent.compared.length == smallestNcomp;
        })
  );//filter representations on minimum value and return this

}

module.exports={
  subsetCloseTo:subsetCloseTo,
  subsetNcomp:subsetNcomp
};
