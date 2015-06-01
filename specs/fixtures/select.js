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
      _id: "ZZZ",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: {selection: undefined}
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
  ],
  notFinishedNoMessage:{
    representations: [
      {
        _id: "repr01",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: 0.1
        },
        compared: ["repr05","repr07"]
      },
      {
        _id: "repr02",
        rankType: "benchmark",
        closeTo: null,
        ability: {
          value: -1
        },
        compared: undefined
      },
      {
        _id: "repr03",
        rankType: "benchmark",
        closeTo: null,
        ability: {
          value: 2.5
        },
        compared: undefined
      },
      {
        _id: "repr04",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: 0.01
        },
        compared: ["repr13"]
      },
      {
        _id: "repr05",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 3
        },
        compared: ["repr01", "repr12"]
      },
      {
        _id: "repr06",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: -6
        },
        compared: ["repr14"]
      },
      {
        _id: "repr07",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: -2.5
        },
        compared: ["repr12", "repr14", "repr01"]
      },
      {
        _id: "repr08",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: 0.05
        },
        compared: ["repr12","repr13"]
      },
      {
        _id: "repr09",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 2.9
        },
        compared: ["repr13"]
      },
      {
        _id: "repr10",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 1
        },
        compared: ["repr13"]
      },
      {
        _id: "repr11",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 1.5
        },
        compared: ["repr14", "repr12"]
      },
      {
        _id: "repr12",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: 3.5
        },
        compared: ["repr05", "repr08"]
      },
      {
        _id: "repr13",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: -3
        },
        compared: ["repr09", "repr04"]
      },
      {
        _id: "repr14",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: -3.4
        },
        compared: ["repr11", "repr06"]
      }
    ],
    comparisons: [
      {
        _id: "AAA",
        assessor: "user01",
        representations : {
          a: "repr01",
          b: "repr05"
        },
        data:{selection: undefined }
      },
      {
        _id: "BBB",
        assessor: "user01",
        representations : {
          a: "repr13",
          b: "repr09"
        },
        data:{selection: undefined }
      },
      {
        _id: "CCC",
        assessor: "user01",
        representations : {
          a: "repr13",
          b: "repr04"
        },
        data:{selection: undefined }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr12",
          b: "repr05"
        },
        data:{selection: undefined }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr12",
          b: "repr08"
        },
        data:{selection: undefined }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr14",
          b: "repr11"
        },
        data:{selection: undefined }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr14",
          b: "repr06"
        },
        data:{selection: undefined }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr01",
          b: "repr07"
        },
        data:{selection: undefined }
      }
    ],
    assessor: "user02",
    assessment: {
      _id: "assessment01",
      stage: 0,
      comparisonsNum: {
        total: 10,
        stage: [5]
      }
    }
  },
  oneNotFinishedNoMessage:{
    representations: [
      {
        _id: "repr01",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: 0.1
        },
        compared: ["repr05","repr07"]
      },
      {
        _id: "repr02",
        rankType: "benchmark",
        closeTo: null,
        ability: {
          value: -1
        },
        compared: undefined
      },
      {
        _id: "repr03",
        rankType: "benchmark",
        closeTo: null,
        ability: {
          value: 2.5
        },
        compared: undefined
      },
      {
        _id: "repr04",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: 0.01
        },
        compared: ["repr13"]
      },
      {
        _id: "repr05",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 3
        },
        compared: ["repr01", "repr12"]
      },
      {
        _id: "repr06",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: -6
        },
        compared: ["repr14"]
      },
      {
        _id: "repr07",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: -2.5
        },
        compared: ["repr12", "repr14", "repr01"]
      },
      {
        _id: "repr08",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: 0.05
        },
        compared: ["repr12","repr13"]
      },
      {
        _id: "repr09",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 2.9
        },
        compared: ["repr13"]
      },
      {
        _id: "repr10",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 1
        },
        compared: ["repr13"]
      },
      {
        _id: "repr11",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 1.5
        },
        compared: ["repr14", "repr12"]
      },
      {
        _id: "repr12",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: 3.5
        },
        compared: ["repr05", "repr08"]
      },
      {
        _id: "repr13",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: -3
        },
        compared: ["repr09", "repr04"]
      },
      {
        _id: "repr14",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: -3.4
        },
        compared: ["repr11", "repr06"]
      }
    ],
    comparisons: [
      {
        _id: "AAA",
        assessor: "user01",
        representations : {
          a: "repr01",
          b: "repr05"
        },
        data:{selection: "repr01" }
      },
      {
        _id: "BBB",
        assessor: "user01",
        representations : {
          a: "repr13",
          b: "repr09"
        },
        data:{selection: "repr09" }
      },
      {
        _id: "CCC",
        assessor: "user01",
        representations : {
          a: "repr13",
          b: "repr04"
        },
        data:{selection: "repr13" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr12",
          b: "repr05"
        },
        data:{selection: "repr05" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr12",
          b: "repr08"
        },
        data:{selection: "repr12" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr14",
          b: "repr11"
        },
        data:{selection: "repr11" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr14",
          b: "repr06"
        },
        data:{selection: "repr14" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr01",
          b: "repr07"
        },
        data:{selection: undefined }
      }
    ],
    assessor: "user02",
    assessment: {
      _id: "assessment01",
      stage: 0,
      comparisonsNum: {
        total: 10,
        stage: [5]
      }
    }
  },
  stage1NoMessage:{
    representations: [
      {
        _id: "repr01",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: 0.1
        },
        compared: ["repr05","repr07"]
      },
      {
        _id: "repr02",
        rankType: "benchmark",
        closeTo: null,
        ability: {
          value: -1
        },
        compared: undefined
      },
      {
        _id: "repr03",
        rankType: "benchmark",
        closeTo: null,
        ability: {
          value: 2.5
        },
        compared: undefined
      },
      {
        _id: "repr04",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: 0.01
        },
        compared: ["repr13"]
      },
      {
        _id: "repr05",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 3
        },
        compared: ["repr01", "repr12"]
      },
      {
        _id: "repr06",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: -6
        },
        compared: ["repr14"]
      },
      {
        _id: "repr07",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: -2.5
        },
        compared: ["repr12", "repr14", "repr01"]
      },
      {
        _id: "repr08",
        rankType: "ranked",
        closeTo: "repr02",
        ability: {
          value: 0.05
        },
        compared: ["repr12","repr13"]
      },
      {
        _id: "repr09",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 2.9
        },
        compared: ["repr13"]
      },
      {
        _id: "repr10",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 1
        },
        compared: ["repr13"]
      },
      {
        _id: "repr11",
        rankType: "ranked",
        closeTo: "repr03",
        ability: {
          value: 1.5
        },
        compared: ["repr14", "repr12"]
      },
      {
        _id: "repr12",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: 3.5
        },
        compared: ["repr05", "repr08"]
      },
      {
        _id: "repr13",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: -3
        },
        compared: ["repr09", "repr04"]
      },
      {
        _id: "repr14",
        rankType: "to rank",
        closeTo: null,
        ability: {
          value: -3.4
        },
        compared: ["repr11", "repr06"]
      }
    ],
    comparisons: [
      {
        _id: "AAA",
        assessor: "user01",
        representations : {
          a: "repr01",
          b: "repr05"
        },
        data:{selection: "repr01" }
      },
      {
        _id: "BBB",
        assessor: "user01",
        representations : {
          a: "repr13",
          b: "repr09"
        },
        data:{selection: "repr09" }
      },
      {
        _id: "CCC",
        assessor: "user01",
        representations : {
          a: "repr13",
          b: "repr04"
        },
        data:{selection: "repr13" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr12",
          b: "repr05"
        },
        data:{selection: "repr05" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr12",
          b: "repr08"
        },
        data:{selection: "repr12" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr14",
          b: "repr11"
        },
        data:{selection: "repr11" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr14",
          b: "repr06"
        },
        data:{selection: "repr14" }
      },
      {
        _id: "EEE",
        assessor: "user01",
        representations : {
          a: "repr01",
          b: "repr07"
        },
        data:{selection: undefined }
      }
    ],
    assessor: "user01",
    assessment: {
      _id: "assessment01",
      stage: 1,
      comparisonsNum: {
        total: 10,
        stage: [5]
      }
    }
  }
};
