'use strict';

var expect = require( 'must' );
var select = require( '../lib/select' );

describe( "select", function(){

  describe( "spec file", function(){
      it( "must be found", function(){
          expect( true ).to.be.true();
      } );
  } );

  describe( "module", function() {
    it("should export an object", function () {
      expect(select).to.be.an.object();
    });
    describe( "exported object", function() {
      it("should have a select function", function () {
        expect(select.select).to.be.a.function();
      });
    });
  });

  describe( "#select", function(){
    it( "should return an array", function(){
      expect( select.select() ).to.be.an.array();
    } );
  } );
} );
