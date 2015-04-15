var selectReprA = require('../lib/selectReprA');

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




var comparisons = [{
  assessor: "user01",
  representations : [ "rep01", "rep02"]
},{
  assessor: "user01",
  representations : [ "rep02", "rep03"]
},{
   assessor: "user01",
   representations : [ "rep03", "rep01"]
 }];

var representations = [{
  _id: "rep01",
  comparedNum: 2
},{
  _id: "rep02",
      comparedNum: 4
},{
  _id: "rep03",
       comparedNum: 2
 }];


var selected = selectReprA(representations, comparisons);
console.log(selected);
