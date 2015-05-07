/**
 * Created by lcoertje on 15/04/2015.
 */
var selectBM= require('../lib/selectBM.js');



var representation = [{
    _id: "rep01",
    rankType: "benchmark",
    compared: [ "rep02", "rep04", "rep05"],
    closeTo: null
},{
    _id: "rep02",
    rankType: "ranked",
  compared: ["rep01"],
  closeTo: "rep01"
},{
    _id: "rep03",
    rankType: "benchmark",
  compared: ["rep01"],
    closeTo: "rep01"
},{
    _id: "rep04",
    rankType: "ranked",
    closeTo: "rep03"
},{
    _id: "rep05",
    rankType: "ranked",
    closeTo: null
}];


var comparisons = [{
  _id: "AAA",
  assessor: "user01",
  representations : {
    a: "rep01",
    b: "rep02"
  },
  data:{selection: undefined }
},{
  _id: "BBB",
  assessor: "user01",
  representations : {
    a : "rep02",
    b :"rep03"
  },
  data:{selection: "rep02"}
},{
  _id: "DDD",
  assessor: "user01",
  representations : {
    a : "rep03",
    b :"rep02"
  },
  data:{selection: "rep02"}
}];


selectBM(representation, comparisons);
//console.log(selected);
