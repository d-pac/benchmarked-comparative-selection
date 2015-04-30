var selectReprA = require( '../lib/selectReprA' );
var _ = require( 'lodash' );
var expect = require( 'must' );
var fx = require('./fixtures');

describe( "select representation A", function(){
  describe( "spec file", function(){
    it( "must be found", function(){
      expect( true ).to.be.true();
    } );
  } );
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
  } );
} );

