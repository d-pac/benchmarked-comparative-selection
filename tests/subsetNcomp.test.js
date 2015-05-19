
var subsetNComp = require('../lib/Stage2/subsetNComp');
var _=require("lodash");

var Representations = [
  { _id: "reprA",
    compared: ["reprB"],
    closeTo:null
  },
  { _id: "reprB",
    compared: ["reprA","reprD"],
    closeTo: "reprE"
  },
  { _id: "reprC",
    compared: ["reprF","reprE"],
    closeTo: null
  },
  { _id: "reprD",
    compared: ["reprB"],
    closeTo: "reprE"
  },
  { _id: "reprE",
    compared: ["reprC"],
    closeTo: null
  },
  { _id: "reprF",
    compared: ["reprC","reprH","reprH","reprH","reprH"],
    closeTo: "reprC"
  },
  { _id: "reprG",
    compared: ["reprH","reprH","reprH","reprH"],
    closeTo: "reprE"
  }
];

var candidateOpponents = subsetNComp.subsetCloseTo(Representations, "reprE");
console.log(_.pluck(candidateOpponents, "_id"));
candidateOpponents = subsetNComp.subsetNcomp(candidateOpponents);

console.log(candidateOpponents);
