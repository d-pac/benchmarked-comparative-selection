
var selectReprB = require('../lib/Stage2/selectReprB');

var CandidateOppos = [
  { _id: "reprA",
    ability:{
      value:0.123,
      se: .1
    }
  },
  { _id: "reprB",
    ability: {
      value: 6,
      se: .1
    }
  },
  { _id: "reprC",
    ability: {
      value: -6,
      se: .1
    }
  },
  { _id: "reprD",
    ability:{
      value:-0.123,
      se: .1
    }
  },
  { _id: "reprE",
    ability:{
      value:5.232,
      se: .1
    }
  },
  { _id: "reprF",
    ability:{
      value:5,
      se: .1
    }
  },
  { _id: "reprG",
    ability:{
      value:9,
      se: .1
    }
  }
];

var reprB = selectReprB(CandidateOppos, 0);

console.log(reprB);
