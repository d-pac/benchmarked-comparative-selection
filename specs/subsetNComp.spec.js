var subsetNcomp = require('../lib/Stage2/subsetNComp');
var expect = require( 'must' );
var fx = require('./fixtures');
var _ = require('lodash');

describe( "subset number of comparisons", function() {
  describe("spec file", function () {
    it("must be found", function () {
      expect(true).to.be.true();
    });
  });
  describe("module", function () {
    it("should export an object", function () {
      expect(subsetNcomp).to.be.an.object();
    });
  });
  describe("#subsetCloseTo", function () {
    var inputErrorA = /should be an array/;
    var inputErrorB = /should be a string/;
    it("should export a function", function () {
      expect(subsetNcomp.subsetCloseTo).to.be.a.function();
    });
  it("should thow an error when representations is undefined", function () {
      expect(function () {
        subsetNcomp.subsetCloseTo();
      }).to.throw(inputErrorA);
    });
    it("should throw an error when representations is not an array", function () {
      expect(function () {
        subsetNcomp.subsetCloseTo({});
      }).to.throw(inputErrorA);
    });
    it("should throw an error when representations has length < 2", function () {
      expect(function () {
        subsetNcomp.subsetCloseTo([{}]);
      }).to.throw(inputErrorA);
    });
    it("should throw an error when cuttingPoint is undefined", function () {
      expect(function () {
        subsetNcomp.subsetCloseTo(fx.subsetNComp.twoRepr.allUndeff.Repr)
      }).to.throw(inputErrorB);
    });
    it("should throw an error wen cuttingPoint is not a string", function () {
      expect(function () {
        subsetNcomp.subsetCloseTo(fx.subsetNComp.twoRepr.allUndeff.Repr, 1)
      }).to.throw(inputErrorB);
      expect(function () {
        subsetNcomp.subsetCloseTo(fx.subsetNComp.twoRepr.allUndeff.Repr, [])
      }).to.throw(inputErrorB);
      expect(function () {
        subsetNcomp.subsetCloseTo(fx.subsetNComp.twoRepr.allUndeff.Repr, {})
      }).to.throw(inputErrorB);
    });
    describe("functionality", function () {
      var subset = subsetNcomp.subsetCloseTo(fx.subsetNComp.twoRepr.allCP.Repr, fx.subsetNComp.CP);
      it("should return an array", function () {
        expect(subset).to.be.array();
      });
      it("should return an array with at least 1 object", function () {
        expect(subset[0]).to.be.an.object();
      });
      _.forIn(fx.subsetNComp, function(repres_value, repres_key){
        if(repres_key!='CP'){
          describe("case ".concat(repres_key), function () {
            _.forIn(repres_value, function(cond_value, cond_key){
                var conditionText = "in condition ".concat(cond_key);
                conditionText = conditionText.concat(" the correct answer should be given");
                it(conditionText, function (){
                  var subset = subsetNcomp.subsetCloseTo(cond_value.Repr,fx.subsetNComp.CP);
                  var whatComesOut = _.pluck(subset,'_id');
                  if(!cond_value.answer){
                    expect(typeof whatComesOut).not.equal('undefined');
                    expect(whatComesOut.length).to.be.equal(0);
                  } else {
                    _.each(whatComesOut, function (someResponse, index) {
                      expect(someResponse).to.equal(cond_value.answer[index]);
                    });

                  };
                });

            });
          });

        };

      });
    });
  });
});
