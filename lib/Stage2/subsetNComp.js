
var _ = require('lodash');

function subsetNcomp(representations, cuttingPoint){
  var candidateOppos = [];
  _.each(representations, function(representation){//select representations closeto cuttingPoint //replace by function because used in phase2
    if(representation.closeTo == cuttingPoint){
      candidateOppos.push(representation)
    }
  });

  var smallestNcomp = _.min(candidateOppos, 'comparedNum').comparedNum;//find and store smallest number of comparionsonNum in representations
  //console.log(smallestNcomp);
  return(_.filter(candidateOppos, function(opponent){
          return opponent.compared.length() == smallestNcomp;
        })
  );//filter representations on minimum value and return this

}

module.exports=subsetNcomp;
