'use strict';

module.exports = {
      asserorId1: "user01",
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
    representations: [
      {
        _id: "rep01",
        rankType: "to rank",
        closeTo: null
      },{
        _id: "rep02",
        rankType: "ranked",
        compared: [ "rep01"],
        closeTo: "rep03"
      },{
        _id: "rep03",
        rankType: "benchmark",
        closeTo: null
      },{
        _id: "rep04",
        rankType: "ranked",
        compared: [ "rep01"],
        closeTo: "rep05"
      },{
        _id: "rep05",
        rankType: "benchmark",
        closeTo: null
      },{
        _id: "rep06",
        rankType: "ranked",
        closeTo: "rep03"
      },{
        _id: "rep07",
        rankType: "ranked",
        closeTo: "rep05"
      }, {
        _id: "rep08",
        rankType: "to rank",
        closeTo: null
      }
    ],
    repsCommonCountIsHigherThenCompLength1: [
      {
        _id: "rep09",
        rankType: "to rank",
        closeTo: null
      },
      {
        _id: "rep10",
        rankType: "to rank",
        closeTo: null
      }
    ],
    repsCommonCountIsHigherThenCompLength2: [
      {
        _id: "rep09",
        rankType: "to rank",
        closeTo: null,
        compared: ["rep02"]
      },
      {
        _id: "rep10",
        rankType: "to rank",
        closeTo: null
      }
    ]


};
