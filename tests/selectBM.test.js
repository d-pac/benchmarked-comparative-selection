/**
 * Created by lcoertje on 15/04/2015.
 */
var selectBM= require('../lib/selectBM.js');

/*
 * Simple comparative selection algorithm
 * @param {Object[]} items - Array of items with following minimal structure:
 * @param {string} items[]._id - Unique identifier for the item
 * @param {string[]} items[].compared - Array of unique identifiers
 */
/*function select( items ){
 *if( !items || !_.isArray( items ) || 2 > items.length ){
 *throw new Error( "comparative-selection#select: `items` should be an Array with a minimum length of 2" );
 *} else {
 *items = _.sortBy( _.shuffle( items ), function( item ){
 *return item.compared.length;
 *} );
 *var selected = items.shift();
 *var opponent;
 *if( 0 >= selected.compared.length ){
 *opponent = items.shift();
 *} else {
 *opponent = _.find( items, function( item ){
 *return 0 > item.compared.indexOf( selected._id );
 *} );
 *if( !opponent ){
 *opponent = items.shift();
 *}
 *}
 *return [ selected, opponent ];
 *}
 *}
 *exports = module.exports = {
 *select : select
 };*/




var representation = [{
    _id: "rep01",
    type: "benchmark",
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
  compared: ["rep01"],
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


var comparisons = [{
  _id: "AAA",
  assessor: "user01",
  representations : {
    a: "rep01",
    b: "rep02"
  },
  data:{selection: undefined}
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
  data:{selection: undefined}
}];


selectBM(representation, comparisons);
//console.log(selected);
