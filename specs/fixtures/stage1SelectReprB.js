'use strict';

module.exports = {
   comparisons: [{
    _id: "AAA",
    assessor: "user01",
    representations : {
      a: "rep01",
      b: "rep04"
    },
    data:{selection: undefined }

  }

  ],
  representations:
    [
    {
     _id: "rep01",
    rankType: "toRank",
    closeTo: null
  },{
    _id: "rep02",
    rankType: "ranked",
    closeTo: "rep03"
  },{
    _id: "rep03",
    rankType: "benchmark",
    closeTo: null
  },{
    _id: "rep04",
    rankType: "ranked",
    closeTo: "rep05"
  },{
    _id: "rep05",
    rankType: "benchmark",
    closeTo: null
  }
  ],


  representations2:
    [
      {
      _id: "rep01",
  rankType: "toRank",
  compared: [ "rep04"],
  closeTo: null
},{
  _id: "rep02",
    rankType: "ranked",
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
    }

    ],
  representations3:
    [
      {
        _id: "rep01",
        rankType: "toRank",
        compared: [ "rep04"],
        closeTo: null
      },{
      _id: "rep02",
      rankType: "ranked",
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
    }

    ]

};
