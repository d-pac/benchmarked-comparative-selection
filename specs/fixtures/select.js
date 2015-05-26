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
  comparisons: [
    {
      _id: "AAA",
      assessor: "user01",
      representations : {
        a: "rep09",
        b: "rep04"
      },
      data:{selection: undefined }
    },{
      _id: "XXX",
      assessor: "user01",
      representations : {
        a : "rep09",
        b :"rep02"
      },
      data:{selection: undefined}
    }
  ],
  representations: [],
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
