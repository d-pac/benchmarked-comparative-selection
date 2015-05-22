var selectB = require('../lib/Stage2/selectReprB');
var expect = require( 'must' );
var fx = require('./fixtures');
var _ = require('lodash');

describe( "Stage2: Select representation B", function() {
  describe("spec file", function () {
    it("must be found", function () {
      expect(false).to.be.true();
    });
  });
  describe("module", function () {
    it("should export a function", function () {
      expect(selectB).to.be.a.function();
    });
  });
  describe("#selectReprB", function () {
    var inputErrorA = /should be an array/;
    var inputErrorB = /should be a number/;
    it("should thow an error when candidateOppos is undefined", function () {
      expect(function () {
        selectB();
      }).to.throw(inputErrorA);
    });
    it("should throw an error when candidateOppos is not an array", function () {
      expect(function () {
        selectB(0, {});
      }).to.throw(inputErrorA);
    });
    it("should throw an error when candidateOppos has length < 2", function () {
      expect(function () {
        selectB(0, [{}]);
      }).to.throw(inputErrorA);
    });
    it("should throw an error when cuttingAbil is undefined", function () {
      expect(function () {
        //to add
      }).to.throw(inputErrorB);
    });
    it("should throw an error when cuttingAbil is not numeric", function () {
      expect(function () {
        //to add
      }).to.throw(inputErrorB);
    });
    it("should throw an error when cuttingAbil is not NaN", function () {
      expect(function () {
        //to add
      }).to.throw(inputErrorB);
    });
    it("should return an object that is not a vector and contains the keys '_id', 'ability.value' and 'rankType'", function () {
      //to add
    });
  });
});
