'use strict';

module.exports = {
  assessor: {_id: "user01"},
  assessment: {
    _id: "assessment01",
    stage: 1,
    comparisonsNum: {
      stage: [5]
    }
  },
  assessment2: {
    _id: "assessment01",
    stage: 2,
    comparisonsNum: {
      stage: [5]
    }
  },
  comparisons: [
    {
      _id: "AAA",
      assessor: "user01",
      representations : {
        a: "rep02",
        b: "rep03"
      },
      data:{selection: undefined }
    },
    {
      _id: "ZZZ",
      assessor: "user01",
      representations : {
        a: "rep02",
        b: "rep03"
      },
      data:{selection: undefined }
    }
  ],
  representations: [
    {
      _id: "rep02",
      rankType: "to rank",
      closeTo: null,
      compared: ["rep03"]
    },
    {
      _id: "rep03",
      rankType: "to rank",
      closeTo: null,
      compared: ["rep02"]
    },
    {
      _id: "rep04",
      rankType: "benchmark",
      closeTo: null,
      ability: {
        value: 2
      }
    },
    {
      _id: "rep05",
      rankType: "ranked",
      closeTo: "rep04"
    },
    {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep07"
    },
    {
      _id: "rep07",
      rankType: "benchmark",
      closeTo: null,
      ability: {
        value: 0.4
      }
    }
  ],
  reprNoMoreComparisons: [
    {
      _id: "rep02",
      rankType: "to rank",
      closeTo: null,
      compared: ["bla","bla","bla","bla","bla","bla","bla","bla","bla","bla"]
    },
    {
      _id: "rep03",
      rankType: "to rank",
      closeTo: null,
      compared: ["bla","bla","bla","bla","bla","bla","bla","bla","bla","bla"]
    },
    {
      _id: "rep04",
      rankType: "benchmark",
      closeTo: null
    },
    {
      _id: "rep05",
      rankType: "ranked",
      closeTo: "rep04"
    },
    {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep07"
    },
    {
      _id: "rep07",
      rankType: "benchmark",
      closeTo: null
    }
  ]
};
