var _ = require("lodash");

var tempUndeff = {
  _id:"reprA",
  compared:null,
  closeTo:null
}, tempNot= {
  _id:"reprA",
  compared:null,
  closeTo:"reprF"
}, tempCPB= {
  _id:"reprB",
  compared:null,
  closeTo:"reprD"
},tempCPA= {
  _id:"reprA",
  compared:null,
  closeTo:"reprD"
};
var allUndeff=[tempUndeff], oneNot=[], twoNot=[], twoUndeffNot=[], allNot=[tempNot], oneCP=[], twoCP=[];
var twoUndeffCP=[tempUndeff], oneNotOneCP=[], oneUndeffoneCP=[], oneUndeffOneNot=[];
var oneCPNot=[], twoCPNot=[tempCPA], CPTwoNot=[], allCP=[tempCPB], answerAll,answerTwo;

twoUndeffCP.push(tempUndeff);

for( var i=0 ; i < 100 ; i++ ){
  tempUndeff = {
    _id:"repr".concat(i),
    compared:null,
    closeTo:null
  };
  tempCP= {
    _id:"repr".concat(i),
    compared:null,
    closeTo:"reprD"
  };
  allUndeff.push(tempUndeff);
  oneNot.push(tempUndeff);
  allNot.push(tempNot);
  oneCP.push(tempUndeff);
  allCP.push(tempCP);
  if(i>=2){
    twoNot.push(tempUndeff);
    twoCP.push(tempUndeff);
    twoUndeffCP.push(tempCP);
    oneNotOneCP.push(tempUndeff);
    CPTwoNot.push(tempCP);
  }
}

oneCPNot.push(tempCPA);
oneCPNot.push(oneNot);
oneNot.push(tempNot);
twoUndeffNot.push(tempUndeff);
twoUndeffNot.push(tempUndeff);
twoUndeffNot.push(twoNot);
twoCPNot.push(tempCPB);
twoCPNot.push(twoNot);
twoNot.push(tempNot);
twoNot.push(tempNot);
oneCP.push(tempCPA);
twoCP.push(tempCPA);
twoCP.push(tempCPB);
oneUndeffoneCP.push(tempUndeff);
oneUndeffoneCP.push(oneNotOneCP);
oneUndeffoneCP.push(tempCPA);
oneUndeffOneNot.push(tempUndeff);
oneUndeffOneNot.push(tempNot);
oneUndeffOneNot.push(oneNotOneCP);
oneNotOneCP.push(tempNot);
oneNotOneCP.push(tempCPA);
CPTwoNot.push(tempNot);
CPTwoNot.push(tempNot);
answerAll = _.pluck(allCP,'_id');
answerTwo = _.pluck(CPTwoNot, '_id');


module.exports = {
  twoRepr: {
    allUndeff: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: null
        }
      ]
    },
    oneUndeff_oneNotCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprF"
        }
      ]
    },
    oneUndeff_oneCP:{
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprD"
        }
      ],
      answer:["reprB"]
    },
    allNotCP:{
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: "reprF"
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprF"
        }
      ]
    },
    allCP:{
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: "reprD"
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprD"
        }
      ],
      answer:["reprA","reprB"]
    }
  },
  threeRepr:{
    allUndef: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: null
        },
        { _id: "reprC",
          compared: null,
          closeTo: null
        }
      ]
    },
    twoUndeff_oneNotCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: null
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprE"
        }
      ]
    },
    oneUndeff_twoNotCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprE"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprE"
        }
      ]
    },
    threeNotCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: "reprE"
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprE"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprE"
        }
      ]
    },
    twoUndeff_oneCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: null
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprD"
        }
      ],
      answer:["reprC"]
    },
    oneUndeff_NotCP_CP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprE"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprD"
        }
      ],
      answer:["reprC"]
    },
    oneUndeff_twoCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: null
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprD"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprD"
        }
      ],
      answer:["reprB", "reprC"]
    },
    oneCP_twoNotCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: "reprD"
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprE"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprE"
        }
      ],
      answer:["reprA"]
    },
    twoCP_oneNotCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: "reprD"
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprD"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprE"
        }
      ],
      answer:["reprA","reprB"]
    },
    allCP: {
      Repr: [
        {
          _id: "reprA",
          compared: null,
          closeTo: "reprD"
        },
        {
          _id: "reprB",
          compared: null,
          closeTo: "reprD"
        },
        { _id: "reprC",
          compared: null,
          closeTo: "reprD"
        }
      ],
      answer:["reprA","reprB","reprC"]
    }
  },
  hundredRep:{
    allUndeff:{
      Repr:allUndeff
      },
    oneNot:{
      Repr:oneNot
      },
    twoNot:{
      Repr:twoNot
      },
    twoUndeffNot:{
      Repr:twoUndeffNot
      },
    allNot:{
      Repr:allNot
      },
    oneCP:{
      Repr:oneCP,
      answer:["reprA"]
      },
    twoCP:{
      Repr:twoCP,
      answer:["reprA","reprB"]
      },
    twoUndeffCP:{
      Repr:twoUndeffCP,
      answer:answerTwo
      },
    oneNotOneCP:{
      Repr:oneNotOneCP,
      answer:["reprA"]
      },
    oneUndeffoneCP:{
      Repr:oneUndeffoneCP,
      answer:["reprA"]
      },
    oneUndeffOneNot:{
      Repr:oneUndeffOneNot
      },
    oneCPNot:{
      Repr:oneCPNot,
      answer:["reprA"]
      },
    twoCPNot:{
      Repr:twoCPNot,
      answer:["reprA","reprB"]
      },
    CPTwoNot:{
      Repr:CPTwoNot,
      answer:answerTwo
      },
    allCP:{
      Repr: allCP,
      answer:answerAll
    }
  },
  CP: "reprD"
};
