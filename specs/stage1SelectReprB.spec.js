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
      var St1ReprB = selectBM(fx.stage1SelectReprB.representations, fx.stage1SelectReprB.comparisons, fx.stage1SelectReprB.representationA1);
      expect(St1ReprB).to.be.an.object();
      expect(St1ReprB).not.to.be.an.array();
      expect(St1ReprB).to.have.keys(["_id","closeTo","rankType"]);
    });

    it( "should randomly select a BM if no comparisons have been sent out", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectBM( fx.stage1SelectReprB.representations, fx.stage1SelectReprB.comparisons, fx.stage1SelectReprB.representationA1) );
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
      results.push( selectBM( fx.stage1SelectReprB.representations2, fx.stage1SelectReprB.comparisons, fx.stage1SelectReprB.representationA2) );
    }
    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
    console.log(ids);
  } );

 it( "should select other random BM if one BMcomparison has been sent out, ie rep02 or rep06", function(){
    var results = [];
    for( var i = 0; i < 2000; i++ ){
      results.push( selectBM( fx.stage1SelectReprB.representations3, fx.stage1SelectReprB.comparisons, fx.stage1SelectReprB.representationA2) );
    }
    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
   expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
   expect( ids.indexOf( 'rep06' ) ).to.be.least( 0 );
    console.log(ids);
  } );

  it( "if all benchmarks have been selected, it should select paper from BM least chosen, ie rep07", function(){
    var results = [];
    for( var i = 0; i < 2000; i++ ){
      results.push( selectBM( fx.stage1SelectReprB.representations4, fx.stage1SelectReprB.comparisons2, fx.stage1SelectReprB.representationA3) );
    }
    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep07' ) ).to.be.least( 0 );
    console.log(ids);
  } );

  it( "if one comparison is completed, then the other one should be sent out, ie rep02 or rep06", function(){
    var results = [];
    for( var i = 0; i < 2000; i++ ){
      results.push( selectBM( fx.stage1SelectReprB.representations5, fx.stage1SelectReprB.comparisons3, fx.stage1SelectReprB.representationA2) );
    }
    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep06' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
    console.log(ids);
  } );

  // not the correct test yet
  it( "if one comparison is completed, then the other one should be selected but not the same closeTorepresentation, ie rep06", function(){
    var results = [];
    for( var i = 0; i < 2000; i++ ){
      results.push( selectBM( fx.stage1SelectReprB.representations6, fx.stage1SelectReprB.comparisons3, fx.stage1SelectReprB.representationA4) );
    }
    var ids = _.pluck( results, "_id" );
    expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
    expect( ids.indexOf( 'rep06' ) ).to.be.least( 0 );
    expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
    console.log(ids);
  } );


} );





