var _ = require('lodash');

/* SELECTION OF REPRESENTATION A
(by Liesje)
 determine representation A of the to rank representations
*/

module.exports = function selectReprA(representations, comparisons, assessorId) {
  if(!_.isArray(representations))
    throw new Error("representations should be an array");

  if(representations.length<2)
    throw new Error("representation should be an array with a minimum length of 2");

  //Create list of representations with rankType "to rank"
  var reprToRank = _.pluck(_.filter(representations,{ rankType: "to rank"}), "_id");

  if(!_.isArray(reprToRank) || reprToRank.length==0)
    throw new Error("reprToRank should be an array with a minimum length of 1");

  console.log("reprToRank", reprToRank);

  // new variable in which we will store the number of times the judge has seen this representation
  var reps = [];
  // calculate how many comparisons per representation the judge (who requires a new pair) has already done
  //for each comparison of the list comparison

  _.each(comparisons, function (compobjects) {
    if (compobjects.assessor === assessorId) {
      console.log(compobjects);
      reps.push(compobjects.representations.a);
      reps.push(compobjects.representations.b);
    }
  });

  console.log("reps", reps);

  // hieruit enkel de reps nemen die ook to rank zijn
  var common = _.intersection(reprToRank, reps);
  console.log("common", common);

  // tellen hoeveel keer die id voorkomt in de array
  commoncount = {};
  _.each (reprToRank, function(repsid){
         commoncount[repsid] = 0;
  });
  _.each(common, function (commonrepid) {
    _.each (reps, function(repsrepid){
      if(repsrepid == commonrepid) {
        ++commoncount[repsrepid];}
    });
  });

  console.log("commoncount", commoncount);

  var ReprToRankSorted = _.sortBy( _.filter( representations, { rankType : "to rank"} ), "compared.length" );

  console.log("ReprToRankSorted", ReprToRankSorted);

  //create variable represA
  // shuffle representation as to make sure that a random selection is done in case more than 1 representation has the lowest score
  // sort ascending
  var represA = _.sortBy(_.shuffle(ReprToRankSorted), function (representation) {
    // number of times a representation has been compared * 100 + (for each id) add the variable reps
    // (i.e., the number of times a judge has seen this representation)
   _.each (ReprToRankSorted);
   {
     if (!representation.compared) {
       console.log("representation._id", representation._id, "no comparisons sent out");
       return 0;
     }
     else {
       console.log("representation._id", representation._id);
       console.log("berekening",representation.compared.length * 100 + commoncount[representation._id]);
       return representation.compared.length * 100 + commoncount[representation._id];
     }
   }
  });

  console.log("represA", represA);

  // take the first element of the sorted list
  return represA.shift();
};
