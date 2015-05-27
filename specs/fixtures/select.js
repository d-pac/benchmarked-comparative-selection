'use strict';

module.exports = {
  assessor: "user01",
  assessment: {
    _id: "assessment01",
    stage: 0,
    comparisonsNum: {
      total: 10,
      stage: [5]
    }
  },
  assessment2: {
    _id: "assessment01",
    stage: 1,
    comparisonsNum: {
      total: 10,
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
  maxComparisons: [
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
    },
    {
      _id: "BBB",
      assessor: "user01",
      representations : {
        a: "rep02",
        b: "rep03"
      },
      data:{selection: undefined }
    },
    {
      _id: "CCC",
      assessor: "user01",
      representations : {
        a: "rep02",
        b: "rep03"
      },
      data:{selection: undefined }
    },
    {
      _id: "DDD",
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
      compared: ["rep03"],
      ability: {
        value: 1
      }
    },
    {
      _id: "rep03",
      rankType: "to rank",
      closeTo: null,
      compared: ["rep02"],
      ability: {
        value: 1
      }
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
      closeTo: "rep04",
      ability: {
        value: 0.3
      }
    },
    {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 1
      }
    },
    {
      _id: "rep07",
      rankType: "benchmark",
      closeTo: null,
      ability: {
        value: 0.4
      }
    },
    {
      _id: "rep10",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 1
      }
    },
    {
      _id: "rep08",
      rankType: "to rank",
      closeTo: "rep03",
      ability: {
        value: 1
      }
    },
    {
      _id: "rep09",
      rankType: "to rank",
      closeTo: "rep04",
      ability: {
        value: 2.2
      }
    }
  ],
  reprMissingAbility: [
    {
      _id: "rep02",
      rankType: "to rank",
      closeTo: null,
      ability: {
      value: 1
    },
      compared: ["rep03"]
    },
    {
      _id: "rep03",
      rankType: "to rank",
      closeTo: null,
      compared: ["rep02"],
      ability: {
        value: 3
      }
    },
    {
      _id: "rep04",
      rankType: "benchmark",
      closeTo: null
    },
    {
      _id: "rep05",
      rankType: "ranked",
      closeTo: "rep04",
      ability: {
        value: 0.3
      }
    },
    {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 0.5
      }
    },
    {
      _id: "rep07",
      rankType: "benchmark",
      closeTo: null,
      ability: {
        value: 0.4
      }
    },
    {
      _id: "rep10",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 0.5
      }
    },
    {
      _id: "rep08",
      rankType: "to rank",
      closeTo: "rep03",
      ability: {
        value: 0.6
      }
    },
    {
      _id: "rep09",
      rankType: "to rank",
      closeTo: "rep04",
      ability: {
        value: 2.2
      }
    }
  ],
  reprMissingAbilityValue: [
    {
      _id: "rep02",
      rankType: "to rank",
      closeTo: null,
      ability: {
        value: 1
      },
      compared: ["rep03"]
    },
    {
      _id: "rep03",
      rankType: "to rank",
      closeTo: null,
      compared: ["rep02"],
      ability: {
        value: 3
      }
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
      closeTo: "rep04",
      ability: {
        value: 0.3
      }
    },
    {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep07",
      ability: 0.5
    },
    {
      _id: "rep07",
      rankType: "benchmark",
      closeTo: null,
      ability: {
        value: 0.4
      }
    },
    {
      _id: "rep10",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 0.5
      }
    },
    {
      _id: "rep08",
      rankType: "to rank",
      closeTo: "rep03",
      ability: {
        value: 0.6
      }
    },
    {
      _id: "rep09",
      rankType: "to rank",
      closeTo: "rep04",
      ability: {
        value: 2.2
      }
    }
  ],
  reprAbilityValueNA: [
    {
      _id: "rep02",
      rankType: "to rank",
      closeTo: null,
      ability: {
        value: 1
      },
      compared: ["rep03"]
    },
    {
      _id: "rep03",
      rankType: "to rank",
      closeTo: null,
      compared: ["rep02"],
      ability: {
        value: 3
      }
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
      closeTo: "rep04",
      ability: {
        value: 0.3
      }
    },
    {
      _id: "rep06",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 0.5
      }
    },
    {
      _id: "rep07",
      rankType: "benchmark",
      closeTo: null,
      ability: {
        value: NaN
      }
    },
    {
      _id: "rep10",
      rankType: "ranked",
      closeTo: "rep07",
      ability: {
        value: 0.5
      }
    },
    {
      _id: "rep08",
      rankType: "to rank",
      closeTo: "rep03",
      ability: {
        value: 0.6
      }
    },
    {
      _id: "rep09",
      rankType: "to rank",
      closeTo: "rep04",
      ability: {
        value: 2.2
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
