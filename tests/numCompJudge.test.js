
var numCompJudge = require('../lib/Stage1/numCompJudge');

var comparisons = [
  {
    assessor: "user1",
    representations: {
      a: "something",
      b: "somethingElse"
    },
    data: "blabla"
  },
  {
    assessor: "user2",
    representations: {
      a: "something",
      b: "somethingElse"
    },
    data: "blabla"
  },
  {
    assessor: "user2",
    representations: {
      a: "something",
      b: "somethingElse"
    },
    data: "blabla"
  },
  {
    assessor: "user2",
    representations: {
      a: "something",
      b: "somethingElse"
    },
    data: "blabla"
  },
  {
    assessor: "user2",
    representations: {
      a: "something",
      b: "somethingElse"
    },
    data: "blabla"
  }
];

var numberComparisons = numCompJudge(comparisons,"user2");

console.log(numberComparisons);
