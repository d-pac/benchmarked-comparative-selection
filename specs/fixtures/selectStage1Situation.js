/**
 * Created by lcoertje on 27/05/2015.
 */

'use strict';

module.exports = {

  assessorId1: "user01",
  assessorId2: "user11",
  assessment1: {
    _id: "assessment01",
    stage: 0,
    comparisonsNum: {
      stage: [5]
    }
  },

  comparisons: [
    {
      _id: "ZZZ",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: {selection: undefined}
    }
  ],

  comparisons2: [{
    _id: "AAA",
    assessor: "user01",
    representations: {
      a: "rep08",
      b: "rep04"
    },
    data: {selection: undefined}
  }, {
    _id: "ZZZ",
    assessor: "user11",
    representations: {
      a: "rep01",
      b: "rep02"
    },
    data: {selection: undefined}
  }],


  representations: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: ["rep02"],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: ["rep01"],
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep08",
      rankType: "to rank",
      closeTo: null
    }
  ],

  representations2: [{
    _id: "rep01",
    rankType: "to rank",
    compared: ["rep02"],
    closeTo: null
  }, {
    _id: "rep02",
    rankType: "ranked",
    compared: ["rep01"],
    closeTo: "rep03"
  }, {
    _id: "rep03",
    rankType: "benchmark",
    closeTo: null
  }, {
    _id: "rep04",
    rankType: "ranked",
    compared: ["rep08"],
    closeTo: "rep05"
  }, {
    _id: "rep05",
    rankType: "benchmark",
    closeTo: null
  }, {
    _id: "rep08",
    rankType: "to rank",
    compared: ["rep04"],
    closeTo: null
  }]

};
