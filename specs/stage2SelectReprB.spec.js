var selectB = require('../lib/Stage2/selectReprB');
var expect = require( 'must' );
var fx = require('./fixtures');
var _ = require('lodash');

describe( "Stage2: Select representation B", function() {
  describe("spec file", function () {
    it("must be found", function () {
      expect(true).to.be.true();
    });
  });
  describe("module", function () {
    it("should export a function", function () {
      expect(selectB).to.be.a.function();
    });
  });
  describe("#selectReprB", function () {
    var inputErrorA = /should be an array/;
    var inputErrorB = /should have an 'ability.value' field/;
    var inputErrorC = /should be a number/;
    it("should thow an error when candidateOppos is undefined", function () {
      expect(function () {
        selectB();
      }).to.throw(inputErrorA);
    });
    it("should throw an error when candidateOppos is not an array", function () {
      expect(function () {
        selectB({});
      }).to.throw(inputErrorA);
    });
    it("should throw an error when candidateOppos has length < 2", function () {
      expect(function () {
        selectB([{}]);
      }).to.throw(inputErrorA);
    });
    it("should throw an error when candidateOppos has no ability.value", function () {
      expect(function () {
        selectB([{ability:{value:5}},{}]);
      }).to.throw(inputErrorB);
    });
    it("should throw an error when candidateOppos has a non numeric ability.value", function () {
      expect(function () {
        selectB([{ability:{value:5}},{ability:{value:"error"}}]);
      }).to.throw(inputErrorB);
    });
    it("should throw an error when cuttingAbil is undefined", function () {
      expect(function () {
        selectB([{ability:{value:5}},{ability:{value:5}}]);
      }).to.throw(inputErrorC);
    });
    it("should throw an error when cuttingAbil is not numeric", function () {
      expect(function () {
        selectB([{ability:{value:5}},{ability:{value:5}}],"error");
      }).to.throw(inputErrorC);
    });
    it("should throw an error when cuttingAbil is NaN", function () {
      expect(function () {
        selectB([{ability:{value:5}},{ability:{value:5}}],NaN);
      }).to.throw(inputErrorC);
    });
    it("should return an object which is not a vector", function () {
      var results = selectB(fx.stage2SelectReprB.tenOppos.repr.orderedUp,fx.stage2SelectReprB.tenOppos.abil);
      expect(results).to.be.an.object();
      expect(results).not.an.array();
    });
    it("should return an object containing an _id field which is a non-empty string", function () {
      console.log(fx.stage2SelectReprB.tenOppos.repr.orderedUp);
      var results = selectB(fx.stage2SelectReprB.tenOppos.repr.orderedUp,fx.stage2SelectReprB.tenOppos.abil);
      expect(results).to.have.ownProperty("_id");
      expect(typeof results._id).to.be("string");
    });
    describe("functionality", function () {
      _.forIn(fx.stage2SelectReprB, function(oppoValue, oppoKey) {
        describe(oppoKey, function () {
          _.forIn(oppoValue.repr, function(condValue, condKey) {
            describe("in condition " + condKey , function () {
              it("the correct response should be given", function () {
                var theKey = condKey;
                var results = selectB(condValue, oppoValue.abil)._id;
                if(results!="select"){
                  var results_arr=[];
                  for(var i = 0 ; i < 101 ; i++){
                    results_arr.push(selectB(condValue, oppoValue.abil)._id)
                  }
                  var resultsMax= _.max(Number(results_arr));
                  for( var i =0 ; i <= resultsMax ; i ++){

                    expect(results_arr.indexOf(String(i))).to.be.least(0)
                  }
                } else{
                  expect(results).to.equal("select")
                }
              })
            })
          })
        });
      });
    });
  });
});
