/**
 * Created by lcoertje on 27/05/2015.
 */

'use strict';

var _ = require('lodash');
var select = require('../../lib/Stage1/selectReprB');

var representations = [{
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
  compared: [ "rep08"],
  closeTo: "rep05"
},{
  _id: "rep05",
  rankType: "benchmark",
  closeTo: null
},{
  _id: "rep08",
  rankType: "to rank",
  compared: ["rep04"] ,
  closeTo: null
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
  _id: "ZZZ",
  assessor: "user11",
  representations : {
    a : "rep01",
    b :"rep02"
  },
  data:{selection: undefined}
}];


var result =[];
_.times(1000, function(i){
  result.push(select(representations, comparisons, representations[0] ));
});
console.log( _.countBy(result, "_id"));
