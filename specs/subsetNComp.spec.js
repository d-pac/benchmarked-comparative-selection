var subsetNcomp = require( '../lib/Stage2/subsetNComp' );
var expect = require( 'must' );
var fx = require( './fixtures' );
var _ = require( 'lodash' );

describe( "subset number of comparisons", function(){
  describe( "spec file", function(){
    it( "must be found", function(){
      expect( true ).to.be.true();
    } );
  } );
  describe( "module", function(){
    it( "should export an object", function(){
      expect( subsetNcomp ).to.be.an.object();
    } );
  } );
  describe( "#subsetCloseTo", function(){
    var inputErrorA = /should be an array/;
    var inputErrorB = /should be a string/;
    it( "should export a function", function(){
      expect( subsetNcomp.subsetCloseTo ).to.be.a.function();
    } );
    it( "should thow an error when representations is undefined", function(){
      expect( function(){
        subsetNcomp.subsetCloseTo();
      } ).to.throw( inputErrorA );
    } );
    it( "should throw an error when representations is not an array", function(){
      expect( function(){
        subsetNcomp.subsetCloseTo( {} );
      } ).to.throw( inputErrorA );
    } );
    it( "should throw an error when representations has length < 2", function(){
      expect( function(){
        subsetNcomp.subsetCloseTo( [ {} ] );
      } ).to.throw( inputErrorA );
    } );
    it( "should throw an error when cuttingPoint is undefined", function(){
      expect( function(){
        subsetNcomp.subsetCloseTo( fx.subsetNComp_closeTo.twoRepr.allUndeff.Repr )
      } ).to.throw( inputErrorB );
    } );
    it( "should throw an error wen cuttingPoint is not a string", function(){
      expect( function(){
        subsetNcomp.subsetCloseTo( fx.subsetNComp_closeTo.twoRepr.allUndeff.Repr, 1 )
      } ).to.throw( inputErrorB );
      expect( function(){
        subsetNcomp.subsetCloseTo( fx.subsetNComp_closeTo.twoRepr.allUndeff.Repr, [] )
      } ).to.throw( inputErrorB );
      expect( function(){
        subsetNcomp.subsetCloseTo( fx.subsetNComp_closeTo.twoRepr.allUndeff.Repr, {} )
      } ).to.throw( inputErrorB );
    } );
    describe( "functionality", function(){
      var subset = subsetNcomp.subsetCloseTo( fx.subsetNComp_closeTo.twoRepr.allCP.Repr, fx.subsetNComp_closeTo.CP );
      it( "should return an array", function(){
        expect( subset ).to.be.array();
      } );
      it( "should return an array with at least 1 object", function(){
        expect( subset[ 0 ] ).to.be.an.object();
      } );
      it( "should return an an array with objects with equal keys as input objects", function(){
        var theKeys = _.keys( fx.subsetNComp_closeTo.twoRepr.allCP.Repr[ 0 ] );
        expect( subset[ 0 ] ).to.have.keys( theKeys );
        expect( subset[ 1 ] ).to.have.keys( theKeys );

      } );
      _.forIn( fx.subsetNComp_closeTo, function( repres_value,
                                                 repres_key ){
        if( repres_key != 'CP' ){
          describe( "case ".concat( repres_key ), function(){
            _.forIn( repres_value, function( cond_value,
                                             cond_key ){
              var conditionText = "in condition ".concat( cond_key );
              conditionText = conditionText.concat( " the correct answer should be given" );
              it( conditionText, function(){
                var subset = subsetNcomp.subsetCloseTo( cond_value.Repr, fx.subsetNComp_closeTo.CP );
                var whatComesOut = _.pluck( subset, '_id' );
                if( !cond_value.answer ){
                  expect( typeof whatComesOut ).not.equal( 'undefined' );
                  expect( whatComesOut.length ).to.be.equal( 0 );
                } else {
                  _.each( whatComesOut, function( someResponse,
                                                  index ){
                    expect( someResponse ).to.equal( cond_value.answer[ index ] );
                  } );

                }
                ;
              } );

            } );
          } );

        }
        ;

      } );
    } );
  } );
  describe( "#subsetNcomp", function(){
    var inputErrorA = /should be an array/;
    var inputErrorB = /must be an array/;
    it( "should export a function", function(){
      expect( subsetNcomp.subsetNcomp ).to.be.a.function();
    } );
    it( "should thow an error when candidateOpponents is undefined", function(){
      expect( function(){
        subsetNcomp.subsetNcomp();
      } ).to.throw( inputErrorA );
    } );
    it( "should throw an error when candidateOpponents is not an array", function(){
      expect( function(){
        subsetNcomp.subsetNcomp( {} );
      } ).to.throw( inputErrorA );
    } );
    it( "should throw an error when candidateOpponents has length < 2", function(){
      expect( function(){
        subsetNcomp.subsetNcomp( [ {} ] );
      } ).to.throw( inputErrorA );
    } );
    it( "should throw an error when one compared field is not an array", function(){
      expect( function(){
        subsetNcomp.subsetNcomp( [
          {
            _id: "valid",
            compared: [ "Z", "Z", "Z", "Z", "Z" ]
          },
          {
            _id: "invalid",
            compared: {}
          }
        ] )
      } ).to.throw( inputErrorB );
    } );
    describe( "functionality", function(){
      describe( "with none compared", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.noneCompared.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return all representations", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.noneCompared.Representations.length )
        } );
      } );
      describe( "with one compared", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.oneCompared.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return all representations but one", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.oneCompared.Representations.length - 1 )
        } );
        it( "should not return the the _id 'skip'", function(){
          expect( resultsIds.indexOf( "skip" ) ).to.be.at.most( -1 )
        } );
      } );
      describe( "with five compared", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.fiveCompared.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return all representations but five", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.fiveCompared.Representations.length - 5 )
        } );
        it( "should not return the the _id 'skip'", function(){
          expect( resultsIds.indexOf( "skip" ) ).to.be.at.most( -1 )
        } );
      } );
      describe( "with all compared", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.allCompared.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return all representation", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.allCompared.Representations.length )
        } );
        it( "should not return the the _id 'skip'", function(){
          expect( resultsIds.indexOf( "skip" ) ).to.be.at.most( -1 )
        } );
      } );
      describe( "with nine compared and all different values", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.nineDifferent.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return one representation", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.nineDifferent.Representations.length - 9 )
        } );
        it( "should not return the the _id 'skip'", function(){
          expect( resultsIds.indexOf( "skip" ) ).to.be.at.most( -1 )
        } );
      } );
      describe( "with five compared multiple times and all different values", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.fiveComparedEqualNot.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return five representations", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.fiveComparedEqualNot.Representations.length - 5 )
        } );
        it( "should not return the the _id 'skip'", function(){
          expect( resultsIds.indexOf( "skip" ) ).to.be.at.most( -1 )
        } );
      } );
      describe( "with five compared nine times and other ten", function(){
        var results;
        var resultsIds;
        results = subsetNcomp.subsetNcomp( fx.subsetNComp_Ncomp.fiveCompared9v10.Representations );
        resultsIds = _.pluck( results, '_id' );
        it( "it should return an array", function(){
          expect( results ).to.be.an.array();
        } );
        it( "should return five representations", function(){
          expect( resultsIds.length ).to.equal( fx.subsetNComp_Ncomp.fiveCompared9v10.Representations.length - 5 )
        } );
        it( "should not return the the _id 'skip'", function(){
          expect( resultsIds.indexOf( "skip" ) ).to.be.at.most( -1 )
        } );
      } );
    } );
  } );
} );
