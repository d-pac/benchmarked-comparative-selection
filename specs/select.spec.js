'use strict';

var expect = require( 'must' );
var select = require( '../lib/select' );
var _ = require('lodash');

describe( "select", function(){

  describe( "spec file", function(){
      it( "must be found", function(){
          expect( true ).to.be.true();
      } );
  } );

  describe( "module", function() {
    it("should export an object", function () {
      expect( select ).to.be.an.object();
    });
    describe( "exported object", function() {
      it("should have a select function", function () {
        expect( select.select ).to.be.a.function();
      });
    });
  });

  describe( "#select", function(){
    var inputErrorA=/parameters should be defined/;
    var inputErrorB=/should be an array/;
    var inputErrorC=/one representation that is to rank/;
    var inputErrorD=/least one benchmark/;
    var inputErrorE=/2 objects that are ranked and close to a benchmark/;
    var inputErrorF=/only contain the numerical value/;
    it("should throw a error when one of the parameters is undefined", function () {
      expect(function(){select.select()}).to.throw(inputErrorA);
      expect(function(){select.select()}).to.throw(inputErrorA);
    });
    it("should throw a error when representations is not a array and does not contain 4 elements", function () {
      expect(function(){
        select.select({_id:"representations: invalid input"},[{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"})
      }).to.throw(inputErrorB);
      expect(function(){
        select.select([{_id:"representations: invalid input"},{_id:"invalid input"}],[{_id:"comparisons"}],
          {_id:"assessment"},{_id:"assessor"})
      }).to.throw(inputErrorB);
    });
    it("should throw an error when representations does not contain a representation to rank", function(){
      expect(function(){
        select.select([{_id:"representations: invalid input"},{_id:"invalid input"},{_id:"invalid input"}],
          [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"})
      }).to.throw(inputErrorC );
    });
    it("should throw an error when representations does not contain a benchmark", function(){
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"}, {_id:"to rank", rankType:"to rank"},
            {_id:"to rank", rankType:"to rank"}],
          [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorD);
    });
    it("should throw an error when representations does not contain an object that is ranked and close to benchmark",
      function(){
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"}, {_id:"benchmark", rankType:"benchmark"},
            {_id:"to rank", rankType:"to rank"}],[{_id:"comparisons"}],
          {_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorE);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"}, {_id:"benchmark", rankType:"benchmark"},
            {_id:"ranked", rankType:"ranked"}],[{_id:"comparisons"}],
          {_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorE);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
            {_id:"ranked", rankType:"ranked", closeTo:"invalid"}],
          [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorE);
    });
    it("should throw an error when assessment does not contain a stage field strictly equal to 1 or 2", function(){
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
          {_id:"ranked", rankType:"ranked", closeTo:"benchmark"}],
        [{_id:"comparisons"}],{_id:"assessment"},{_id:"assessor"});
      }).to.throw(inputErrorF);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
           {_id:"ranked", rankType:"ranked", closeTo:"benchmark"}],
          [{_id:"comparisons"}],{_id:"assessment", stage:0},{_id:"assessor"});
      }).to.throw(inputErrorF);
      expect(function(){
        select.select([{_id:"to rank", rankType:"to rank"},{_id:"benchmark", rankType:"benchmark"},
            {_id:"ranked", rankType:"ranked", closeTo:"benchmark"}],
          [{_id:"comparisons"}],{_id:"assessment", stage:3},{_id:"assessor"});
      }).to.throw(inputErrorF);
    });
    it( "should return a message when all comparisons have been made", function(){
      var result = select.select();
      expect(result).to.not.be.an.null();
      expect(result).to.be.an.object();
      expect(result.messages).to.be.an.array();
      expect(result.messages[0]).to.equal(/All comparisons have been made/);
    });
    it( "should return an array with 2 different representations", function(){
      expect( select.select() ).to.be.an.array();
    } );
  } );
} );
