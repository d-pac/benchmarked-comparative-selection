/* select benchmark for representation
(by Liesje)
*/

var _ = require('lodash');

// create list to filter out a list of benchmarks from the representations
module.exports = function selectBM(representation, comparisons) {
  var BM = [];
  _.each(representation, function (Representation) {
    if (Representation.type === "benchmark") {
      BM.push(Representation._id);
    }
  });

  console.log("BM");
  console.log(BM);


 // create list van alle representations die completed zijn voor represA


      // lijst van alle representaties die nog open zijn, i.e. undefined zijn bij selectie


    // alle openstaande comparisons
    //rep01 nog vervangen door reprA wanneer alles samenzet

    var compReprA= [];
    _.each(comparisons, function (comparison) {
      if (comparison.representations.a === "rep01" || comparison.representations.b === "rep01"  ) {
        compReprA.push(comparison);
      }
    });

    console.log("compReprA");
    console.log(compReprA);


  // welke van deze comparisons met reprA erin staan nog open?

    var compOpen = [];
    _.each(comparisons, function (comparison) {
      if (!comparison.data.selection) {
        compOpen.push(comparison);
      }
    });
  console.log("compOpen");
  //werkt!
  console.log(compOpen);
    // van die openstaande comparisons de representaties

    var selectOpen = [];
    _.each(compOpen, function (comparison) {
      selectOpen.push(comparison.representations.a);
      selectOpen.push(comparison.representations.b);
    });

  console.log("selectOpen");
  console.log(selectOpen);

   //var repCompare = ["rep02", "rep03", "rep04", "rep05"];
   //console.log("repCompare");
   //console.log(repCompare);

 var repCompare = [];
  _.each(representation, function (representation) {
    if (representation._id=== "rep01")
    {
      repCompare.push(representation.compared);
    }
  });

  console.log("repCompare");
  console.log(repCompare);


  var ReprCompleted = _.difference(repCompare, selectOpen);
     // die lijst aftrekken van de lijst van compared

   console.log("ReprCompleted");
  console.log(ReprCompleted);


     /// als nog geen comparisons zijn afgerond (maar dit kan dan ook zijn als net start, niet?)

     if (ReprCompleted.length===0) {
       BMrandom= _.shuffle(BM);
       console.log("BM geshuffled");
       console.log (BMrandom);
       BMtaken = BMrandom.shift();
       console.log("Length ReprCompleted is zero; benchmark taken");
       console.log(BMtaken);
       var BMinterval = [];
       _.each(representation, function (representation) {
         if (representation.closeTo === BMtaken) {
           BMinterval.push(representation._id);
         }
         });
       console.log("BMinterval");
       console.log(BMinterval);
       var reprB = (_.shuffle(BMinterval));
       reprB.shift();
     }
     else {
       var BMtaken2 = [];
       _.each(ReprCompleted, function (representation) {
         if (ReprCompleted == representation._id) {
           BMtaken2.push(BM);
         }
       });
     }
         console.log("Length ReprCompleted is not zero; benchmark taken");
        console.log("BMtaken2");
       console.log(BMtaken2);


  BMselect = (_.shuffle(_.difference(BM, BMtaken2)));
  var reprB2 = _.shuffle(representation.closeTo == BMselect);
  reprB2.shift();

  console.log("reprB");
  console.log(reprB);

  console.log("reprB2");
  console.log(reprB2);
};
