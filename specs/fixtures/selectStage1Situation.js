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
      perAssessor: [ 5 ]
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
      data: { selection: undefined }
    }
  ],

  comparisons2: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
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
  ],

  representations: [
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
      compared: [],
      ability: {},
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      compared: [],
      ability: {},
      closeTo: null
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [],
      ability: {},
      closeTo: null
    }
  ],

  representations2: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep02" ],
      ability: {},
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      ability: {},
      compared: [ "rep01" ],
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
      compared: [ "rep08" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      ability: {},
      compared: [],
      closeTo: null
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04" ],
      ability: {},
      closeTo: null
    }
  ],

  comparisons3: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
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
  ],
  comparisons4: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: "rep04" }
    }, {
      _id: "BBB",
      assessor: "user04",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: { selection: "rep02" }
    },
    {
      _id: "DDD",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
      },
      data: { selection: "rep04" }
    }, {
      _id: "EEE",
      assessor: "user04",
      representations: {
        a: "rep08",
        b: "rep02"
      },
      data: { selection: "rep02" }
    }
  ],

  representations3: [
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
      compared : [],
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep08" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      ability: {},
      compared : [],
      closeTo: null
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04" ],
      ability: {},
      closeTo: null
    }, {
      _id: "rep09",
      rankType: "ranked",
      ability: {},
      compared : [],
      closeTo: "rep03"
    }
  ],

  representations4: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep04", "rep02" ],
      ability: {},
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01", "rep08" ],
      ability: {},
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      compared: [],
      ability: {},
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep01", "rep08" ],
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
    },
    {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04", "rep02" ],
      ability: {},
      closeTo: null
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
    },
    {
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
      compared: [ "rep08" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      ability: {},
      compared: [],
      closeTo: null
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04" ],
      ability: {},
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
  ],

  representations5: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep04", "rep02", "rep06" ],
      ability: {},
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01", "rep08" ],
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
      compared: [ "rep01", "rep08" ],
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
      compared: [ "rep01", "rep08" ],
      ability: {},
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      compared: [ "rep08" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04", "rep02", "rep06", "rep07" ],
      ability: {},
      closeTo: null
    }
  ],

  comparisons5: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
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
    , {
      _id: "CCC",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: undefined }
    }
    , {
      _id: "DDD",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep06"
      },
      data: { selection: undefined }
    }
    , {
      _id: "EEE",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep02"
      },
      data: { selection: undefined }
    }
    , {
      _id: "FFF",
      assessor: "user11",
      representations: {
        a: "rep08",
        b: "rep06"
      },
      data: { selection: undefined }
    }, {
      _id: "GGG",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep07"
      },
      data: { selection: undefined }
    }
  ]
  ,

  representations6: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep02", "rep06", "rep04" ],
      ability: {},
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
      compared: [ "rep01", "rep08" ],
      ability: {},
      closeTo: "rep03"
    }, {
      _id: "rep03",
      rankType: "benchmark",
      compared: [],
      ability: {},
      closeTo: null
    }, {
      _id: "rep04",
      rankType: "ranked",
      compared: [ "rep01", "rep08" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep05",
      rankType: "benchmark",
      compared: [],
      ability: {},
      closeTo: null
    }, {
      _id: "rep06",
      rankType: "ranked",
      compared: [ "rep08" ],
      ability: {},
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      compared: [ "rep08" ],
      ability: {},
      closeTo: "rep05"
    }, {
      _id: "rep08",
      rankType: "to rank",
      compared: [ "rep04", "rep02", "rep06", "rep07" ],
      ability: {},
      closeTo: null
    }
  ],

  comparisons6: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
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
    , {
      _id: "CCC",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: undefined }
    }
    , {
      _id: "DDD",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep06"
      },
      data: { selection: undefined }
    }
    , {
      _id: "EEE",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep02"
      },
      data: { selection: undefined }
    }
    , {
      _id: "FFF",
      assessor: "user11",
      representations: {
        a: "rep08",
        b: "rep06"
      },
      data: { selection: undefined }
    }, {
      _id: "GGG",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep07"
      },
      data: { selection: undefined }
    }
  ],
  comparisonsTerras: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: "rep04" }
    }, {
      _id: "BBB",
      assessor: "user04",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: { selection: "rep02" }
    },
    {
      _id: "DDD",
      assessor: "user01",
      representations: {
        a: "rep08",
        b: "rep04"
      },
      data: { selection: "rep04" }
    }, {
      _id: "EEE",
      assessor: "user04",
      representations: {
        a: "rep08",
        b: "rep02"
      },
      data: { selection: undefined }
    }
  ]
};
