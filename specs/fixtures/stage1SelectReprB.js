'use strict';

module.exports = {
  comparisons: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: undefined }
    }
  ],
  comparisons2: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: undefined }
    }, {
      _id: "BBB",
      assessor: "user04",
      representations: {
        a: "rep01",
        b: "rep02"
      },
      data: { selection: undefined }
    }, {
      _id: "CCC",
      assessor: "user11",
      representations: {
        a: "rep01",
        b: "rep06"
      },
      data: { selection: undefined }
    }
  ]
  ,
  comparisons3: [
    {
      _id: "AAA",
      assessor: "user01",
      representations: {
        a: "rep01",
        b: "rep04"
      },
      data: { selection: "rep04" }
    }, {
      _id: "CCC",
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

    }
  ],

  representationA1: {
    _id: "rep01",
    rankType: "to rank",
    closeTo: null
  },

  representationA2: {
    _id: "rep01",
    rankType: "to rank",
    compared: [ "rep04" ],
    closeTo: null
  },
  representationA3: {
    _id: "rep01",
    rankType: "to rank",
    compared: [ "rep04", "rep02", "rep06" ],
    closeTo: null
  },
  representationA4: {
    _id: "rep01",
    rankType: "to rank",
    compared: [ "rep04", "rep02" ],
    closeTo: null
  },

  representations: [
    {
      _id: "rep01",
      rankType: "to rank",
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
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
    }
  ],

  representations2: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep04" ],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
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
    }

  ],

  representations3: [
    {
      _id: "rep01",
      rankType: "to rank",
      compared: [ "rep04" ],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
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
    },
    {
      _id: "rep05",
      rankType: "benchmark",
      closeTo: null
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
    },

  ]
  ,

  representations4: [
    {
      _id: "rep01",
      rankType: "toRank",
      compared: [ "rep04", "rep02", "rep06" ],
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
      compared: [ "rep01" ],
      closeTo: "rep03"
    }, {
      _id: "rep07",
      rankType: "ranked",
      closeTo: "rep05"
    }

  ]
  ,
  representations5: [
    {
      _id: "rep01",
      rankType: "toRank",
      compared: [ "rep04" ],
      closeTo: null
    }, {
      _id: "rep02",
      rankType: "ranked",
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
    }
  ],

  representations6: [
    {
      _id: "rep01",
      rankType: "toRank",
      compared: [ "rep04", "rep02" ],
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
    }

  ]

};
