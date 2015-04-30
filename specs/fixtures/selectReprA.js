'use strict';

module.exports = {
  twoEqual: {
    comparisons: [
      {
        assessor: "user01",
        representations: [ "rep01", "rep02" ]
      }, {
        assessor: "user01",
        representations: [ "rep02", "rep03" ]
      }, {
        assessor: "user01",
        representations: [ "rep03", "rep01" ]
      }
    ],
    representations: [
      {
        _id: "rep01",
        comparedNum: 2
      }, {
        _id: "rep02",
        comparedNum: 4
      }, {
        _id: "rep03",
        comparedNum: 2
      }
    ]
  },
  allEqual: {
    comparisons: [/* todo */],
    representations: [/* todo */]
  }
};
