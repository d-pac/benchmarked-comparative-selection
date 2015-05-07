/**
 * Created by lcoertje on 21/04/2015.
 */

var represCompare= require('../lib/reprCompare.js');

var representation = [{
  _id: "rep01",
  type: "ranked",
  compared: ["rep02", "rep03", "rep04", "rep05"],
  closeTo: null
},{
  _id: "rep02",
  type: "ranked",
  compared: ["rep01"],
  closeTo: "rep01"
},{
  _id: "rep03",
  type: "benchmark",
  compared: ["rep10"],
  closeTo: "rep01"
},{
  _id: "rep04",
  type: "ranked",
  closeTo: "rep03"
},{
  _id: "rep05",
  type: "ranked",
  closeTo: null
}];

represCompare(representation);

