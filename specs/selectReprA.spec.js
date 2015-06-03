var selectReprA = require( '../lib/selectReprA' );
var _ = require( 'lodash' );
var expect = require( 'must' );
var fx = require( './fixtures/index' );

describe( "select representation A", function(){
  describe( "spec file", function(){
    it( "must be found", function(){
      expect( true ).to.be.true();
    } );
  } );
  describe( "module", function(){
    it( "should export a function", function(){
      expect( selectReprA ).to.be.a.function();
    } );
  } );
  describe( "selectRepresentationA", function(){
    var inputErrorA = /should be an array/;
    var inputErrorB = /reprToRank should be an array/;
    it( "should throw an error when representation is undefined", function(){
      expect( function(){
        selectReprA();
      } ).to.throw( inputErrorA );
    } );

    it( "should throw an error when representation has length < 2", function(){
      expect( function(){
        selectReprA( [] );
      } ).to.throw( inputErrorA );
    } );

    it( "should throw an error when reprToRank has length < 2", function(){
      expect( function(){
          selectReprA( [
            {
              _id: "0",
              rankType: ""
            }, {
              _id: "0",
              rankType: ""
            }
          ] );
        }
      ).to.throw( inputErrorB );
    } );

    it( "should return an object that is not a vector and contains the keys '_id', 'closeTo' and 'rankType'", function(){
      var ReprA = selectReprA( fx.selectReprA.representations, fx.selectReprA.comparisons, "user01" );
      expect( ReprA ).to.be.an.object();
      expect( ReprA ).not.to.be.an.array();
      expect( ReprA ).to.have.keys( [ "_id", "closeTo", "rankType" ] );
    } );

    it( "should throw an error when a commonCount of a repToRank is higher than the compared length", function(){
      var error = /commonCount cannot be higher/;
      expect( function(){
        selectReprA( fx.selectReprA.repsCommonCountIsHigherThenCompLength1, fx.selectReprA.comparisons, fx.selectReprA.asserorId1 );
      } ).to.throw( error );
      expect( function(){
        selectReprA( fx.selectReprA.repsCommonCountIsHigherThenCompLength2, fx.selectReprA.comparisons, fx.selectReprA.asserorId1 );
      } ).to.throw( error );
    } );

    it( "should randomly select a toRank representation if no toRank representation has already been selected", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.nonComparedRepresentations, fx.selectReprA.comparisons, fx.selectReprA.asserorId1 ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.least( 0 );
      expect( ids.indexOf( 'rep08' ) ).to.be.least( 0 );
      //console.log(ids);
    } );

    it( "should select other toRank if one is already sent out", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.oneSentOutRepresentation, fx.selectReprA.oneSentOutComparisons, fx.selectReprA.asserorId1 ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep08' ) ).to.be.least( 0 );
      //console.log(ids);
    } );

    it( "when >2 toRank, should randomly select another toRank if one is already sent out", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.oneSentOutRepresentation3toRank, fx.selectReprA.oneSentOutComparisons, fx.selectReprA.asserorId1 ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep08' ) ).to.be.least( 0 );
      expect( ids.indexOf( 'rep09' ) ).to.be.least( 0 );
      //console.log(ids);
    } );

    it( "when toRank representation have been sent out in an equal amount but one is seen less often by this judge, this should be selected", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.equalSentOutButSeenMoreRepresentation, fx.selectReprA.equalSentOutButSeenMoreComparisons, fx.selectReprA.asserorId2 ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep08' ) ).to.be.least( 0 );
      //console.log(ids);
    } );

    it( "when toRank representation have been sent out in an equal amount but one is seen less often by this judge, this should be selected", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.equalSentOutButSeenMoreRepresentation, fx.selectReprA.equalSentOutButSeenMoreComparisons, fx.selectReprA.asserorId1 ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep08' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.least( 0 );
      //console.log( ids );
    } );

    it( "when toRank representation have been sent out & seen by judge, randomly select", function(){
      var results = [];
      for( var i = 0; i < 2000; i++ ){
        results.push( selectReprA( fx.selectReprA.equalSentOutButSeenMoreRepresentation, fx.selectReprA.equalSentOutAndSeenComparisons, fx.selectReprA.asserorId1 ) );
      }
      var ids = _.pluck( results, "_id" );
      expect( ids.indexOf( 'rep02' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep03' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep04' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep05' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep06' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep07' ) ).to.be.below( 0 );
      expect( ids.indexOf( 'rep08' ) ).to.be.least( 0 );
      expect( ids.indexOf( 'rep01' ) ).to.be.least( 0 );
      //console.log( ids );
    } );

  } );

} );
