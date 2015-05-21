var selectReprA = require( '../lib/selectReprA' );
var _ = require( 'lodash' );
var expect = require( 'must' );
var fx = require('./fixtures/index');

describe( "select representation A", function(){
  describe( "spec file", function(){
    it( "must be found", function(){
      expect( true ).to.be.true();
    } );
  } );
  describe( "module", function() {
    it("should export a function", function () {
      expect(selectReprA).to.be.a.function();
    });
  });
  describe( "selectRepresentationA", function() {
    var inputErrorA = /should be an array/;
    var inputErrorB = /reprToRank should be an array/;
    it("should throw an error when representation is undefined", function() {
      expect(function() {
        selectReprA();
      }).to.throw(inputErrorA);
    });
    it("should throw an error when representation has length < 3", function() {
      expect(function() {
        selectReprA([{}], 0,0);
      }).to.throw(inputErrorA);
    });
   //werkt nog niet
    it("should throw an error when reprToRank has length < 2", function () {
      expect(function () {
        selectReprA(reprToRank([]));
      }).to.throw(inputErrorB);
    });
    it("should return an object that is not a vector and contains the keys '_id', 'closeTo' and 'rankType'", function() {
      var ReprA = selectReprA(fx.selectReprA.representations, fx.selectReprA.comparisons, "user01");
      expect(ReprA).to.be.an.object();
      expect(ReprA).not.to.be.an.array();
      expect(ReprA).to.have.keys(["_id","closeTo","rankType"]);
    });






   /*






  describe( "functionality", function(){
    it( "should select a representation", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.twoEqual.representations, fx.selectReprA.twoEqual.comparisons ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.least( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.least( 0 );
    } );
    */
  } );

} );

