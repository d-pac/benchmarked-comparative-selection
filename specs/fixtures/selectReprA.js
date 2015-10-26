'use strict';

module.exports = {
  asserorId1: "user01",
  asserorId2: "user11",
  comparisons: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep09",
        b: "rep04"
      },
      data: { selection: undefined }
    }, {
      _id: "XXX",
      assessor: "user01",
      representations: {
        a: "rep09",
        b: "rep02"
      },
      data: { selection: undefined }
    }
  ],
  representations: [
    {
      _id: "rep01",
      rankType: "to rank",
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01" ],
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep01" ],
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep03"
    }, {
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
      compared: [ "rep02" ]
    },
    {
      _id: "rep10",
      rankType: "to rank",
      closeTo: null
    }
  ],
  nonComparedRepresentations: [
    {
      _id: "rep01",
      rankType: "to rank",
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01" ],
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep01" ],
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      closeTo: null
    }
  ],
  oneSentOutRepresentation: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep02" ],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01" ],
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
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      closeTo: null
    }
  ],
  oneSentOutComparisons: [
    {
      _id: "ZZZ",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: { selection: "rep01" }
    }
  ],
  oneSentOutRepresentation3toRank: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep02" ],
      ability: {},
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01" ],
      ability: {},
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      ability: {},
      compared: [],
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep01" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      ability: {},
      compared: [],
      closeTo: null
    }, {
      _id: "rep06",
      rankType: "ranked",
      ability: {},
      compared: [],
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      ability: {},
      compared: [],
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      ability: {},
      compared: [],
      closeTo: null
    }, {
      _id: "rep09",
      rankType: "to rank",
      ability: {},
      compared: [],
      closeTo: null
    }
  ],
  equalSentOutButSeenMoreRepresentation: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep02" ],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01" ],
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep08" ],
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04" ],
      closeTo: null

    }
  ],
  equalSentOutButSeenMoreComparisons: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
      },
      data: { selection: "rep08" }
    }, {
      _id: "ZZZ",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: { selection: "rep01" }
    }
  ],
  equalSentOutAndSeenRepresentation: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep02" ],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01" ],
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep08" ],
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      closeTo: null
    }, {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04" ],
      closeTo: null

    }
  ],
  equalSentOutAndSeenComparisons: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
      },
      data: { selection: undefined }
    }, {
      _id: "XXX",
      assessor: "user01",
      representations: {
        a: "rep04",
        b: "rep01"
      },
      data: { selection: undefined }
    }, {
      _id: "ZZZ",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: { selection: undefined }
    }
  ]

};
