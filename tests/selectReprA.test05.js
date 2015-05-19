/**
 * Created by lcoertje on 19/05/2015.
 */

var selectA = require('../lib/selectReprA.js');

var representation = [{
  _id: "rep01",
  rankType: "to rank",
  compared: ["rep02"] ,
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
},{
  _id: "rep08",
  rankType: "to rank",
  compared: ["rep04"] ,
  closeTo: null
},{
}];



var comparisons = [{
  _id: "AAA",
  assessor: "user01",
  representations : {
    a: "rep08",
    b: "rep04"
  },
  data:{selection: undefined }
},{
  _id: "XXX",
  assessor: "user01",
  representations : {
    a : "rep04",
    b :"rep01"
  },
  data:{selection: undefined}
},{
  _id: "ZZZ",
  assessor: "user11",
  representations : {
    a : "rep01",
    b :"rep02"
  },
  data:{selection: undefined}
}];


selectA(representation, comparisons, "user01");



