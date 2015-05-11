/* select benchmark for representation
(by Liesje)
*/

var _ = require('lodash');

// create list to filter out a list of benchmarks from the representations
//repid als representation id
//repobjects als representation list
module.exports = function selectBM(representation, comparisons) {
  var BM = [];
  _.each(representation, function (repobjects) {
    if (repobjects.rankType === "benchmark") {
      BM.push(repobjects._id);
    }
  });

  console.log("BM");
  console.log(BM);

  // als nog geen enkele representation is uitgestuurd voor ReprA, dan direct random benchmark selecteren (als niet - else- dan de ReprCompleted berekenen)
  // list of all representations that have been sent out
  //hier rep01 nog vervangen door reprA wanneer alles samenzet
  var repCompare = [];
  _.each(representation, function (repobjects) {
    //hier rep01 nog vervangen door reprA wanneer alles samenzet
    if (repobjects._id=== "rep01")
    {
      _.each(repobjects.compared, function(elem){repCompare.push(elem)});
    }
  });
  console.log("repCompare");
  console.log(repCompare);

  if (repCompare==0) {
    BMrandom= _.shuffle(BM);
    console.log("BM geshuffled");
    console.log (BMrandom);
    BMtaken = BMrandom.shift();
    console.log("No comparisons sent out yet; benchmark taken");
    console.log(BMtaken);
    // het innterval van repr nemen die bij closeTo deze benchmark hebben
    var BMinterval = [];
    _.each(representation, function (repobject) {
      if (repobject.closeTo === BMtaken) {
        BMinterval.push(repobject._id);
      }
    });
    console.log("BMinterval");
    console.log(BMinterval);
    //console.log(typeof BMinterval);
    // random een rep uitnemen
    var reprBid = (_.shuffle(BMinterval));
    var reprBid = reprBid.shift();
    console.log("reprBid");
    console.log(reprBid);
    // hier moet reprBobject het hele representation object waarvan de id overeenstemt met reprB returnen
    //console.log(representation);
    var reprBObject = _.filter(representation, function (repobject){
      return repobject._id === reprBid;
    });
    console.log("reprBObject");
    console.log(reprBObject);

  }
  else {

  // lijst van alle representaties die nog open zijn, i.e. undefined zijn bij selectie
    // lijst van alle openstaande comparisons
    //rep01 nog vervangen door reprA wanneer alles samenzet

    var compReprA= [];
    _.each(comparisons, function (comp) {
      if (comp.representations.a === "rep01" || comp.representations.b === "rep01"  ) {
        compReprA.push(comp);
      }
    });

    console.log("compReprA");
    console.log(compReprA);


  // hieruit selectie nlk welke van deze comparisons met reprA erin staan nog open?

    var compOpen = [];
    _.each(comparisons, function (comp) {
      if (!comp.data.selection) {
        compOpen.push(comp);
       }
    });
  console.log("compOpen");
  console.log(compOpen);


    // van die openstaande comparisons, de representaties nemen

     var selectOpen = [];

      _.each(compOpen, function (comp) {
        selectOpen.push(comp.representations.a);
        selectOpen.push(comp.representations.b);
      });


  console.log("selectOpen");
  console.log(selectOpen);

// die lijst aftrekken van de lijst van compared


    var ReprCompleted = _.difference(repCompare, selectOpen);
    console.log("ReprCompleted");
    console.log(ReprCompleted);


     /// als nog geen comparisons zijn afgerond
     if (ReprCompleted.length===0) {
       repCompareId= [];
       BMSentOut=[];
       _.each(representation, function (repid) {
         if(repCompare.indexOf(repid._id)>-1){
           repCompareId.push(repid._id);
           console.log("repCompareId", repCompareId);
         }
       });
       // voor deze id's nagaan wat hun closeTo is
       _.each(repCompareId, function(repid){
         var rep = _.find(representation,function(representation){
           return representation._id === repid
         });
         if (rep.closeTo) {
           BMSentOut.push(rep.closeTo);
         }
       });

       console.log("BMSentOut");
       console.log (BMSentOut);

      var BMnotselected = _.difference(BM,  BMSentOut);
       console.log("BM not selected yet");
       console.log (BMnotselected);
       //als BMnotselected === 0, een random benchmark kiezen

       if (BMnotselected.length===0) {
         // benchmark nemen die het minste is uitgestuurd

        // take the representations for this comparison
          var reps = [];
         _.each(BMSentOut, function (representation) {

// if this representation does not exist in the variable reps, create it
             if (!reps[representation]) {
               reps[representation] = 0;
             }
// if it already exist, augment with one
             reps[representation]++;
           })
         console.log("reps", reps);
         // DIT WERKT NOG NIET!!
         var repsSort= _.sortBy(reps.length-1);
         console.log("repsSort", repsSort);

        BMtaken = repsSort.shift();
         console.log ("BMtaken", BMtaken);
       }
       else {
       BMnotselected = _.shuffle(BMnotselected);
       BMtaken= BMnotselected.shift();
       console.log("Length ReprCompleted is zero, but already one comparison sent out, not completed; benchmark taken");
       console.log(BMtaken);
       }
       // het interval van repr nemen die bij closeTo deze benchmark hebben
       var BMinterval = [];
       _.each(representation, function (repobject) {
         if (repobject.closeTo === BMtaken) {
           BMinterval.push(repobject._id);
         }
         });
       console.log("BMinterval");
       console.log(BMinterval);
       //console.log(typeof BMinterval);
       // random een rep uitnemen
       // vraag @ San: nu random een genoemn, geen verschillijst genomen met diegene die nog niet gebeurd zijn => mogelijk dat 2 keer hetzelfde paar wordt uitgestuurd. wenselijk?
       var reprBid = (_.shuffle(BMinterval));
       var reprBid = reprBid.shift();
       console.log("reprBid");
       console.log(reprBid);
       // hier moet reprBobject het hele representation object waarvan de id overeenstemt met reprB returnen
       //console.log(representation);
       var reprBObject = _.filter(representation, function (repobject){
         return repobject._id === reprBid;
       });
       console.log("reprBObject");
       console.log(reprBObject);

     }
     else {
       console.log("Length ReprCompleted is not zero; benchmark taken");
       var ReprCompletedId = [];
       var BMCompleted = [];
       // om te beslissen welke benchmarks er al gedaan zijn, voor elke representatie uit ReprCompleted
       // nagaan of en welke benchmark die was
       // ReprCompletedId = voor elke representatie in ReprCompleted, de id eruit halen
       _.each(representation, function (repid) {
         if(ReprCompleted.indexOf(repid._id)>-1){
           ReprCompletedId.push(repid._id);

         }
       });
       console.log("ReprCompletedId", ReprCompletedId);

       // voor elk van deze id nagaan of er al benchmarks zijn geselecteerd
       _.each(ReprCompletedId, function(repid){
        var rep = _.find(representation,function(representation){
           return representation._id === repid
         });
         if (rep.closeTo) {
           BMCompleted.push(rep.closeTo);
         }
       })
       console.log("BMCompleted");
       console.log(BMCompleted);
      // verschil tussen to do benchmarks (=BM) en diegene die afgerond zijn (=BMcompleted)
       BMselect = (_.shuffle(_.difference(BM, BMCompleted)));
       // zorgen dat BM select slechts één waarde kan zijn
       BMselect = BMselect.shift();

       var reprBObject = _.shuffle(_.filter(representation, function (repobject){
         //console.log(representation);
         return repobject.closeTo === BMselect;
       }));

       reprBObject = reprBObject.shift();

       console.log("BMselect");
       console.log(BMselect);


       console.log("reprBObject");
       console.log(reprBObject);
              }

  }

};
