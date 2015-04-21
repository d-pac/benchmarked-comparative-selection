
var _ = require('lodash');

function subsetNcomp(representations, cuttingPoint){
  var candidateOppos = [];
  _.each(representations, function(representation){//select representations closeto cuttingPoint //replace by function because used in phase2
    if(representation.closeTo == cuttingPoint){
      candidateOppos.push(representation)
    }
  });

  console.log(candidateOppos);

  //find and store smallest number of comparionsonNum in representations

  //filter representations on minimum value and return this

}

module.exports=subsetNcomp;
