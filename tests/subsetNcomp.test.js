
var subsetNComp = require('../lib/subsetNComp');

var Representations = [
  { _id: "reprA",
    comparedNum: 1,
    closeTo:null
  },
  { _id: "reprB",
    comparedNum: 2,
    closeTo: "reprE"
  },
  { _id: "reprC",
    comparedNum: 2,
    closeTo: null
  },
  { _id: "reprD",
    comparedNum: 1,
    closeTo: "reprE"
  },
  { _id: "reprE",
    comparedNum: 1,
    closeTo: null
  },
  { _id: "reprF",
    comparedNum: 5,
    closeTo: "reprC"
  },
  { _id: "reprG",
    comparedNum: 1,
    closeTo: "reprE"
  }
];

var candidateOpponents = subsetNComp(Representations, "reprE");

console.log(candidateOpponents);
