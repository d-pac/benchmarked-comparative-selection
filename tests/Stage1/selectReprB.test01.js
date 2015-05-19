'use strict';
var _ = require('lodash');

var select = require('../../lib/Stage1/selectReprB');

var representations = [{
  _id: "rep01",
  rankType: "toRank",
  closeTo: null
},{
  _id: "rep02",
  rankType: "ranked",
  closeTo: "rep03"
},{
  _id: "rep03",
  rankType: "benchmark",
  closeTo: null
},{
  _id: "rep04",
  rankType: "ranked",
  closeTo: "rep05"
},{
  _id: "rep05",
  rankType: "benchmark",
  closeTo: null
}];

var result =[];
_.times(1000, function(i){
  result.push(select(representations, [], representations[0] ));
});
console.log( _.countBy(result, "_id"));
