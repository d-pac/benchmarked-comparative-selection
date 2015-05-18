'use strict';

module.exports = {

  posA_posB_highB:{
    benchmarks:[ { _id:"A", ability:{value:0.2}}, { _id:"B", ability:{value:1.2 }} ],
    repr: {
      negRep_lowA_lowB: {
        nearestA:{value:-0.1, answer:"A"}
      },
      posRep_lowA_lowB: {
        nearestA:{value:0.1, answer:"A"}
      },
      posRep_highA_lowB: {
        nearestA:{value:0.3, answer:"A"} ,
        nearestB:{value:1.1, answer:"B"} ,
        repMiddle:{value:0.7}
      },
      posRep_highA_highB: {
        nearestB:{value:1.3,answer:"B"}
      },
      zeroRep_lowA_lowB: {
        nearestA:{value:0, answer:"A"}
      }
    }
  },
  posA_posB_highA:{
    benchmarks:[ { _id:"A", ability:{value:1.2}}, { _id:"B", ability:{value:0.2 }} ],
    repr:{
      negRep_lowA_lowB:{
        nearestB:{value:-0.1, answer:"B"}
      },
      posRep_lowA_lowB:{
        nearestB:{value:0.1, answer:"B"}
      },
      posRep_lowA_highB:{
        nearestA:{value:1.1,answer:"A"},
        nearestB:{value:0.3, answer:"B"},
        repMiddle:{value:0.7}
      },
      posRep_highA_highB:{
        nearestA:{value:1.3, answer:"A"}
      },
      zeroRep_lowA_lowB:{
        nearestB:{value:0, answer:"B"}
      }
    }
  },
  negA_negB_highB:{
    benchmarks:[ { _id:"A", ability:{value:-1.2}}, { _id:"B", ability:{value:-0.2 }} ],
    repr:{
      negRep_lowA_lowB:{
        nearestA:{value:-1.3,answer:"A"}
      },
      negRep_highA_lowB:{
        nearestA:{value:-1.1,answer:"A"},
        nearestB:{value:-0.3,answer:"B"},
        repMiddle:{value:-0.7}
      },
      negRep_highA_highB:{
        nearestB:{value:-0.1,answer:"B"}
      },
      posRep_highA_highB:{
        nearestB:{value:0.1,answer:"B"}
      },
      zeroRep_highA_highB:{
        nearestB:{value:0,answer:"B"}
      }
    }
  },
  negA_negB_highA:{
    benchmarks:[ { _id:"A", ability:{value:-0.2}}, { _id:"B", ability:{value:-1.2 }} ],
    repr:{
      negRep_lowA_lowB:{
        nearestB:{value:-1.3,answer:"B"}
      },
      negRep_lowA_highB:{
        nearestA:{value:-0.3,answer:"A"},
        nearestB:{value:-1.1, answer:"B"},
        repMiddle:{value:-0.7}
      },
      negRep_highA_highB:{
        nearestA:{value:-0.1,answer:"A"}
      },
      posRep_highA_highB:{
        nearestA:{value:0.1,answer:"A"}
      },
      zeroRep_highA_highB:{
        nearestA:{value:0,answer:"A"}
      }
    }
  },
  negA_posB_highB:{
    benchmarksA:[ { _id:"A", ability:{value:-0.2}}, { _id:"B", ability:{value:0.3 }} ],
    reprA:{
      negRep_lowA_lowB:{
        nearestA:{value:-0.3,answer:"A"}
      },
      negRep_highA_lowB:{
        nearestA:{value:-0.1,answer:"A"},
        nearestB:{value:0.2,answer:"B"},
        repMiddle:{value:-0.05}
      },
      posRep_highA_lowB:{
        nearestA:{value:0.1,answer:"A"},
        nearestB:{value:0.2,answer:"B"}
      },
      posRep_highA_highB:{
        nearestB:{value:0.4,answer:"B"}
      },
      zeroRep_highA_lowB:{
        nearestA:{value:0,answer:"A"}
      }
    },
    benchmarksB:[ { _id:"A", ability:{value:-0.1}}, { _id:"B", ability:{value:0.3 }} ],
    reprBposRep_highA_lowB: {
      repMiddle: {value:0.1}
    },
    benchmarksC:[ { _id:"A", ability:{value:-0.3}}, { _id:"B", ability:{value:0.1 }} ],
    reprCzeroRep_highA_lowB:{
      nearestB:{value:0,answer:"B"}
    },
    benchmarksD:[ { _id:"A", ability:{value:-0.3}}, { _id:"B", ability:{value:0.1 }} ],
    reprDzeroRep_highA_lowB:{
      repMiddle:{value:0}
    }
  },
  posA_negB_highA: {
    benchmarks: [{_id: "A", ability:{value: 0.1}}, {_id: "B", ability:{ value:-0.3}}],
    repr: {
      negRep_lowA_lowB: {
        nearestB: {value:-0.4,answer:"B"}
      },
      negRep_lowA_highB: {
        nearestA: {value:-0.05,answer:"A"},
        nearestB: {value:-0.2,answer:"B"},
        repMiddle: {value:-0.1}
      },
      posRep_lowA_highB: {
        nearestA: {valus:0.05,answer:"A"}
      },
      posRep_highA_highB: {
        nearestA: {value:0.2,answer:"A"}
      },
      zeroRep_lowA_highB: {
        nearestA: {value:0,answer:"A"}
      }
    },
    benchmarksB: [{_id: "A", ability: {value:0.3}}, {_id: "B", ability: {value:-0.1}}],
    reprB: {
      posRep_lowA_highB: {
        nearestB: {value:0.05,answer:"B"},
        repMiddle: {value:0.1}
      },
      zeroRep_lowA_highB: {
        nearestB: {value:0,answer:"B"}
      }
    },
    benchmarksC: [{_id: "A", ability: {value:0.1}}, {_id: "B", ability: {value:-0.1}}],
    reprCzeroRep_lowA_highB: {
      repMiddle: {value:0}
    }
  }
};
