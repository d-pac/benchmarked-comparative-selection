/**
 * Created by lcoertje on 15/04/2015.
 */
var selectBM= require('../lib/selectBM.js');

var representation = [{
  _id: "rep01",
  rankType: "to rank",
  compared: [ "rep04", "rep02", "rep06"],
  closeTo: null
},{
  _id: "rep02",
  rankType: "ranked",
  compared: [ "rep01"],
  closeTo: "rep03"
},{
  _id: "rep03",
  rankType: "benchmark",
  closeTo: null
},{
  _id: "rep04",
  rankType: "ranked",
  compared: [ "rep01"],
  closeTo: "rep05"
},{
  _id: "rep05",
  rankType: "benchmark",
  closeTo: null
},{
  _id: "rep06",
  rankType: "ranked",
  closeTo: "rep03"
},{
  _id: "rep07",
  rankType: "ranked",
  closeTo: "rep05"
}];





var comparisons = [{
  _id: "AAA",
  assessor: "user01",
  representations : {
    a: "rep01",
    b: "rep04"
  },
  data:{selection: undefined }
},{
  _id: "BBB",
  assessor: "user04",
  representations : {
    a : "rep01",
    b :"rep02"
  },
  data:{selection: undefined}
},{
  _id: "CCC",
  assessor: "user11",
  representations : {
    a : "rep01",
    b :"rep06"
  },
  data:{selection: undefined}
}];



selectBM(representation, comparisons);
//console.log(selected);
