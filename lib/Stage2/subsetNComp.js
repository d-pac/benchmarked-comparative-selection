
var _ = require('lodash');

function subsetCloseTo(representations, cuttingPoint){
  //check input
  if(!representations || !_.isArray(representations) || representations.length < 2){
    throw new Error("representations should be an array with a minimum length of 2")
  }
  if(!cuttingPoint || !_.isString(cuttingPoint)){
    throw new Error("cuttingPoint should be a string")
  }
  //cuttingPoint bestaat en is character
  var candidateOppos = [];
  _.each(representations, function(representation){//select representations closeto cuttingPoint
    if(representation.closeTo == cuttingPoint){
      candidateOppos.push(representation)
    }
  });
  return candidateOppos;
}

function subsetNcomp(candidateOpponents){
  //check input
  if(! candidateOpponents || !_.isArray(candidateOpponents) || candidateOpponents.length<2){
    throw new Error("candidateOpponents should be an array with a minimum length of 2")
  }
  _.forIn(candidateOpponents, function(candOppo){
    if(!candOppo.compared ||! _.isArray(candOppo.compared)){
      throw new Error("every object in candidateOpponents should have a 'compared' field which is an array")
    }
  });
  /*if(!candidateOpponents.compared || _.isArray(candidateOpponents.compared)){
    throw new Error("candidateOpponents should have a 'compared' field which is an array")
  }*/
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
