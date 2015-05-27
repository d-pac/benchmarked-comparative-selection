/**
 * Created by lcoertje on 26/05/2015.
 */



var selectBM = require( '../lib/Stage1/selectReprB' );
var _ = require( 'lodash' );
var expect = require( 'must' );
var fx = require('./fixtures/index');

describe( "select representation B", function(){
  describe( "spec file", function(){
    it( "must be found", function(){
      expect( true ).to.be.true();
    } );
  } );
  describe( "module", function() {
    it("should export a function", function () {
      expect(selectBM).to.be.a.function();
    });
  });

    it("should return an object that is not a vector and contains the keys '_id', 'closeTo' and 'rankType'", function() {
      var St1ReprB = selectBM(fx.stage1SelectReprB.representations, fx.stage1SelectReprB.comparisons, "rep01");
      expect(St1ReprB).to.be.an.object();
      expect(St1ReprB).not.to.be.an.array();
      expect(St1ReprB).to.have.keys(["_id","closeTo","rankType"]);
    });

    it( "should randomly select a BM if no comparisons have been sent out", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectBM( fx.stage1SelectReprB.representations, fx.stage1SelectReprB.comparisons, "rep01") );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep02' ) ).to.be.least( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.least( 0 );
       console.log(ids);
    } );

  it( "should select other BM if one BMcomparison has been sent out, ie rep02", function(){
    var results = [];
    for( var i = 0; i < 2000; i++ ){
      results.push( selectBM( fx.stage1SelectReprB.representations2, fx.stage1SelectReprB.comparisons, fx.stage1SelectReprB.representationA2 ) );
    }

    console.log("Count B: "+ JSON.stringify(_.countBy(results, function(rep){
      return rep._id;
    })));

    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
    //expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
    console.log(ids);
  } );

 /* it( "should select other random BM if one BMcomparison has been sent out, ie rep02 or rep06", function(){
    var results = [];
    for( var i = 0; i < 2000; i++ ){
      results.push( selectBM( fx.stage1SelectReprB.representations3, fx.stage1SelectReprB.comparisons, "rep01") );
    }
    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
    console.log(ids);
  } );*/

} );





/*
describe( "selectRepresentationB", function() {
  var inputErrorA = /should be an array/;
  var inputErrorB = /reprToRank should be an array/;
  it("should throw an error when representation is undefined", function() {
    expect(function(){selectReprA();}).to.throw(inputErrorA);
  });

  it("should throw an error when representation has length < 2", function() {
    expect(function(){selectReprA([]);}).to.throw(inputErrorA);
  });

  it("should throw an error when reprToRank has length < 2", function () {
    expect(function(){
        selectReprA([{_id: "0", rankType: ""},{_id: "0", rankType: ""}]);
      }
    ).to.throw(inputErrorB);
  });*/
