module.exports = {
  comparisonsA: [
    {
      _id: "AAA",
      assessor: "user01",
      representations : {
        a: "selectA",
        b: "skip1"
      },
      data:{selection: undefined }
    },
    {
      _id: "BBB",
      assessor: "user01",
      representations : {
        a: "skip9",
        b: "skip5"
      },
      data:{selection: undefined }
    },
    {
      _id: "CCC",
      assessor: "user01",
      representations : {
        a: "skip9",
        b: "selectB"
      },
      data:{selection: undefined }
    },
    {
      _id: "DDD",
      assessor: "user01",
      representations : {
        a: "skip9",
        b: "skip6"
      },
      data:{selection: undefined }
    },
    {
      _id: "EEE",
      assessor: "user01",
      representations : {
        a: "skip8",
        b: "skip1"
      },
      data:{selection: undefined }
    },
    {
      _id: "EEE",
      assessor: "user01",
      representations : {
        a: "skip8",
        b: "skip4"
      },
      data:{selection: undefined }
    },
    {
      _id: "EEE",
      assessor: "user01",
      representations : {
        a: "skip8",
        b: "skip3"
      },
      data:{selection: undefined }
    },
    {
      _id: "EEE",
      assessor: "user01",
      representations : {
        a: "skip10",
        b: "skip7"
      },
      data:{selection: undefined }
    },
    {
      _id: "EEE",
      assessor: "user01",
      representations : {
        a: "skip10",
        b: "skip2"
      },
      data:{selection: undefined }
    },
    {
      _id: "EEE",
      assessor: "user01",
      representations : {
        a: "skip10",
        b: "skip3"
      },
      data:{selection: undefined }
    }
  ],
  assessor: "user01",
  assessment2: {
    _id: "assessment01",
    stage: 1,
    comparisonsNum: {
      total: 10,
      stage: [5]
    }
  },
  reprNegAPosB:{
    closeA: {
      pos: [
        {
          _id: "selectA",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 0.1
          },
          compared: ["skip1"]
        },
        {
          _id: "benchmarkA",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: -1
          },
          compared: undefined
        },
        {
          _id: "benchmarkB",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: 2.5
          },
          compared: undefined
        },
        {
          _id: "selectB",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: 0.01
          },
          compared: ["skip9"]
        },
        {
          _id: "skip1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 3
          },
          compared: ["selectA", "skip8"]
        },
        {
          _id: "skip2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -6
          },
          compared: ["skip10"]
        },
        {
          _id: "skip3",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2.5
          },
          compared: ["skip8", "skip10"]
        },
        {
          _id: "skip4",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: 0.05
          },
          compared: ["skip8"]
        },
        {
          _id: "skip5",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.9
          },
          compared: ["skip9"]
        },
        {
          _id: "skip6",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1
          },
          compared: ["skip9"]
        },
        {
          _id: "skip7",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1.5
          },
          compared: ["skip10"]
        },
        {
          _id: "skip8",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 3.5
          },
          compared: ["skip1", "skip4", "skip3"]
        },
        {
          _id: "skip9",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3
          },
          compared: ["skip5", "selectB", "skip6"]
        },
        {
          _id: "skip10",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3.4
          },
          compared: ["skip7", "skip2", "skip3"]
        }

      ],
      neg: {
        above: {
          negAbil: [
            {
              _id: "selectA",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -0.5
              },
              compared: ["skip1"]
            },
            {
              _id: "benchmarkA",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: -1
              },
              compared: undefined
            },
            {
              _id: "benchmarkB",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: 2.5
              },
              compared: undefined
            },
            {
              _id: "selectB",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -0.8
              },
              compared: ["skip9"]
            },
            {
              _id: "skip1",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 3
              },
              compared: ["selectA", "skip8"]
            },
            {
              _id: "skip2",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2
              },
              compared: ["skip10"]
            },
            {
              _id: "skip3",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2.5
              },
              compared: ["skip8", "skip10"]
            },
            {
              _id: "skip4",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: 0.05
              },
              compared: ["skip8"]
            },
            {
              _id: "skip5",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 2.9
              },
              compared: ["skip9"]
            },
            {
              _id: "skip6",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip7",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1.5
              },
              compared: ["skip10"]
            },
            {
              _id: "skip8",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: 3.5
              },
              compared: ["skip1", "skip4", "skip3"]
            },
            {
              _id: "skip9",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3
              },
              compared: ["skip5", "selectB", "skip6"]
            },
            {
              _id: "skip10",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3.4
              },
              compared: ["skip7", "skip2", "skip3"]
            }

          ],
          posAbil: [
            {
              _id: "selectA",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: 0.1
              },
              compared: ["skip1"]
            },
            {
              _id: "benchmarkA",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: -1
              },
              compared: undefined
            },
            {
              _id: "benchmarkB",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: 2.5
              },
              compared: undefined
            },
            {
              _id: "selectB",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -0.8
              },
              compared: ["skip9"]
            },
            {
              _id: "skip1",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 3
              },
              compared: ["selectA", "skip8"]
            },
            {
              _id: "skip2",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2
              },
              compared: ["skip10"]
            },
            {
              _id: "skip3",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2.5
              },
              compared: ["skip8", "skip10"]
            },
            {
              _id: "skip4",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: 0.05
              },
              compared: ["skip8"]
            },
            {
              _id: "skip5",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 2.9
              },
              compared: ["skip9"]
            },
            {
              _id: "skip6",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip7",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1.5
              },
              compared: ["skip10"]
            },
            {
              _id: "skip8",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: 3.5
              },
              compared: ["skip1", "skip4", "skip3"]
            },
            {
              _id: "skip9",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3
              },
              compared: ["skip5", "selectB", "skip6"]
            },
            {
              _id: "skip10",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3.4
              },
              compared: ["skip7", "skip2", "skip3"]
            }
          ],
          zero: [
            {
              _id: "selectA",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -0.5
              },
              compared: ["skip1"]
            },
            {
              _id: "benchmarkA",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: -1
              },
              compared: undefined
            },
            {
              _id: "benchmarkB",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: 2.5
              },
              compared: undefined
            },
            {
              _id: "selectB",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: 0
              },
              compared: ["skip9"]
            },
            {
              _id: "skip1",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 3
              },
              compared: ["selectA", "skip8"]
            },
            {
              _id: "skip2",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2.5
              },
              compared: ["skip10"]
            },
            {
              _id: "skip3",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2.5
              },
              compared: ["skip8", "skip10"]
            },
            {
              _id: "skip4",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: 0.05
              },
              compared: ["skip8"]
            },
            {
              _id: "skip5",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 2.9
              },
              compared: ["skip9"]
            },
            {
              _id: "skip6",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip7",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1.5
              },
              compared: ["skip10"]
            },
            {
              _id: "skip8",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: 3.5
              },
              compared: ["skip1", "skip4", "skip3"]
            },
            {
              _id: "skip9",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3
              },
              compared: ["skip5", "selectB", "skip6"]
            },
            {
              _id: "skip10",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3.4
              },
              compared: ["skip7", "skip2", "skip3"]
            }

          ],
          equal: [
            {
              _id: "selectA",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -0.5
              },
              compared: ["skip1"]
            },
            {
              _id: "benchmarkA",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: -1
              },
              compared: undefined
            },
            {
              _id: "benchmarkB",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: 2.5
              },
              compared: undefined
            },
            {
              _id: "selectB",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip1",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 3
              },
              compared: ["selectA", "skip8"]
            },
            {
              _id: "skip2",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2
              },
              compared: ["skip10"]
            },
            {
              _id: "skip3",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2.5
              },
              compared: ["skip8", "skip10"]
            },
            {
              _id: "skip4",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: 0.05
              },
              compared: ["skip8"]
            },
            {
              _id: "skip5",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 2.9
              },
              compared: ["skip9"]
            },
            {
              _id: "skip6",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip7",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1.5
              },
              compared: ["skip10"]
            },
            {
              _id: "skip8",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: 3.5
              },
              compared: ["skip1", "skip4", "skip3"]
            },
            {
              _id: "skip9",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3
              },
              compared: ["skip5", "selectB", "skip6"]
            },
            {
              _id: "skip10",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3.4
              },
              compared: ["skip7", "skip2", "skip3"]
            }

          ],
          twoEqual: [
            {
              _id: "selectA",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -0.5
              },
              compared: ["skip1"]
            },
            {
              _id: "benchmarkA",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: -1
              },
              compared: undefined
            },
            {
              _id: "benchmarkB",
              rankType: "benchmark",
              closeTo: null,
              ability: {
                value: 2.5
              },
              compared: undefined
            },
            {
              _id: "selectB1",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip1",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 3
              },
              compared: ["selectA", "skip8"]
            },
            {
              _id: "skip2",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -2
              },
              compared: ["skip10"]
            },
            {
              _id: "selectB2",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: -1
              },
              compared: ["skip8"]
            },
            {
              _id: "skip4",
              rankType: "ranked",
              closeTo: "benchmarkA",
              ability: {
                value: 0.05
              },
              compared: ["skip8"]
            },
            {
              _id: "skip5",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 2.9
              },
              compared: ["skip9"]
            },
            {
              _id: "skip6",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1
              },
              compared: ["skip9"]
            },
            {
              _id: "skip7",
              rankType: "ranked",
              closeTo: "benchmarkB",
              ability: {
                value: 1.5
              },
              compared: ["skip10"]
            },
            {
              _id: "skip8",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: 3.5
              },
              compared: ["skip1", "skip4", "skip3"]
            },
            {
              _id: "skip9",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3
              },
              compared: ["skip5", "selectB", "skip6"]
            },
            {
              _id: "skip10",
              rankType: "to rank",
              closeTo: null,
              ability: {
                value: -3.4
              },
              compared: ["skip7", "skip2", "skip3"]
            }

          ]
        },
        below: {
          negAbil: {
            diffComp: [
              {
                _id: "selectA",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: -0.5
                },
                compared: ["skip1"]
              },
              {
                _id: "benchmarkA",
                rankType: "benchmark",
                closeTo: null,
                ability: {
                  value: -1
                },
                compared: undefined
              },
              {
                _id: "benchmarkB",
                rankType: "benchmark",
                closeTo: null,
                ability: {
                  value: 2.5
                },
                compared: undefined
              },
              {
                _id: "selectB",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -3
                },
                compared: ["skip9"]
              },
              {
                _id: "skip1",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 3
                },
                compared: ["selectA", "skip8"]
              },
              {
                _id: "skip2",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -2
                },
                compared: ["skip10", "bla", "bla", "bla", "bla"]
              },
              {
                _id: "skip3",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -2.5
                },
                compared: ["skip8", "skip10"]
              },
              {
                _id: "skip4",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: 0.05
                },
                compared: ["skip8", "bla", "bla"]
              },
              {
                _id: "skip5",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 2.9
                },
                compared: ["skip9"]
              },
              {
                _id: "skip6",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 1
                },
                compared: ["skip9"]
              },
              {
                _id: "skip7",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 1.5
                },
                compared: ["skip10"]
              },
              {
                _id: "skip8",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: 3.5
                },
                compared: ["skip1", "skip4", "skip3"]
              },
              {
                _id: "skip9",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: -3
                },
                compared: ["skip5", "selectB", "skip6"]
              },
              {
                _id: "skip10",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: -3.4
                },
                compared: ["skip7", "skip2", "skip3"]
              }

            ],
            equalComp:[
              {
                _id: "selectA",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: -0.5
                },
                compared:["skip1"]
              },
              {
                _id: "benchmarkA",
                rankType: "benchmark",
                closeTo: null,
                ability: {
                  value: -1
                },
                compared:undefined
              },
              {
                _id: "benchmarkB",
                rankType: "benchmark",
                closeTo: null,
                ability: {
                  value: 2.5
                },
                compared:undefined
              },
              {
                _id: "selectB1",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -0.8
                },
                compared:["skip9"]
              },
              {
                _id: "skip1",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 3
                },
                compared:["selectA" , "skip8"]
              },
              {
                _id: "selectB2",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -1.2
                },
                compared:["skip10"]
              },
              {
                _id: "selectB3",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -0.8
                },
                compared:["skip8"]
              },
              {
                _id: "selectB4",
                rankType: "ranked",
                closeTo: "benchmarkA",
                ability: {
                  value: -1.2
                },
                compared:["skip8"]
              },
              {
                _id: "skip5",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 2.9
                },
                compared:["skip9"]
              },
              {
                _id: "skip6",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 1
                },
                compared:["skip9"]
              },
              {
                _id: "skip7",
                rankType: "ranked",
                closeTo: "benchmarkB",
                ability: {
                  value: 1.5
                },
                compared:["skip10"]
              },
              {
                _id: "skip8",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: 3.5
                },
                compared:["skip1","skip4","skip3"]
              },
              {
                _id: "skip9",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: -3
                },
                compared:["skip5","selectB","skip6"]
              },
              {
                _id: "skip10",
                rankType: "to rank",
                closeTo: null,
                ability: {
                  value: -3.4
                },
                compared:["skip7","skip2","skip3"]
              }

            ]
          }
        }
      },
      zero: [
        {
          _id: "selectA",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 0
          },
          compared: ["skip1"]
        },
        {
          _id: "benchmarkA",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: -1
          },
          compared: undefined
        },
        {
          _id: "benchmarkB",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: 2.5
          },
          compared: undefined
        },
        {
          _id: "selectB",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -0.8
          },
          compared: ["skip9"]
        },
        {
          _id: "skip1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 3
          },
          compared: ["selectA", "skip8"]
        },
        {
          _id: "skip2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2
          },
          compared: ["skip10"]
        },
        {
          _id: "skip3",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2.5
          },
          compared: ["skip8", "skip10"]
        },
        {
          _id: "skip4",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: 0.05
          },
          compared: ["skip8"]
        },
        {
          _id: "skip5",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.9
          },
          compared: ["skip9"]
        },
        {
          _id: "skip6",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1
          },
          compared: ["skip9"]
        },
        {
          _id: "skip7",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1.5
          },
          compared: ["skip10"]
        },
        {
          _id: "skip8",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 3.5
          },
          compared: ["skip1", "skip4", "skip3"]
        },
        {
          _id: "skip9",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3
          },
          compared: ["skip5", "selectB", "skip6"]
        },
        {
          _id: "skip10",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3.4
          },
          compared: ["skip7", "skip2", "skip3"]
        }
      ]
    },
    closeB:{
      pos: [
        {
          _id: "selectA",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 2
          },
          compared: ["skip1"]
        },
        {
          _id: "benchmarkA",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: -1
          },
          compared: undefined
        },
        {
          _id: "benchmarkB",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: 2.5
          },
          compared: undefined
        },
        {
          _id: "selectB",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.3
          },
          compared: ["skip9"]
        },
        {
          _id: "skip1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 3
          },
          compared: ["selectA", "skip8"]
        },
        {
          _id: "skip2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2
          },
          compared: ["skip10"]
        },
        {
          _id: "skip3",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -1
          },
          compared: ["skip8", "skip10"]
        },
        {
          _id: "skip4",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: 0.05
          },
          compared: ["skip8"]
        },
        {
          _id: "skip5",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.9
          },
          compared: ["skip9"]
        },
        {
          _id: "skip6",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1
          },
          compared: ["skip9"]
        },
        {
          _id: "skip7",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1.5
          },
          compared: ["skip10"]
        },
        {
          _id: "skip8",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 3.5
          },
          compared: ["skip1", "skip4", "skip3"]
        },
        {
          _id: "skip9",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3
          },
          compared: ["skip5", "selectB", "skip6"]
        },
        {
          _id: "skip10",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3.4
          },
          compared: ["skip7", "skip2", "skip3"]
        }

      ],
      neg: [
        {
          _id: "selectA",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -0.5
          },
          compared: ["skip1"]
        },
        {
          _id: "benchmarkA",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: -2.5
          },
          compared: undefined
        },
        {
          _id: "benchmarkB",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: 1
          },
          compared: undefined
        },
        {
          _id: "selectB",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 0.7
          },
          compared: ["skip9"]
        },
        {
          _id: "skip1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 3
          },
          compared: ["selectA", "skip8"]
        },
        {
          _id: "skip2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2
          },
          compared: ["skip10"]
        },
        {
          _id: "skip3",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -1
          },
          compared: ["skip8", "skip10"]
        },
        {
          _id: "skip4",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: 0.05
          },
          compared: ["skip8"]
        },
        {
          _id: "skip5",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.9
          },
          compared: ["skip9"]
        },
        {
          _id: "skip6",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2
          },
          compared: ["skip9"]
        },
        {
          _id: "skip7",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1.5
          },
          compared: ["skip10"]
        },
        {
          _id: "skip8",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 3.5
          },
          compared: ["skip1", "skip4", "skip3"]
        },
        {
          _id: "skip9",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3
          },
          compared: ["skip5", "selectB", "skip6"]
        },
        {
          _id: "skip10",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3.4
          },
          compared: ["skip7", "skip2", "skip3"]
        }
      ]

    },
    middle:{
      pos:[
        {
          _id: "selectA",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 0.75
          },
          compared: ["skip1"]
        },
        {
          _id: "benchmarkA",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: -1
          },
          compared: undefined
        },
        {
          _id: "benchmarkB",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: 2.5
          },
          compared: undefined
        },
        {
          _id: "selectB1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.3
          },
          compared: ["skip9"]
        },
        {
          _id: "skip1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 3
          },
          compared: ["selectA", "skip8"]
        },
        {
          _id: "skip2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2
          },
          compared: ["skip10"]
        },
        {
          _id: "skip3",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -1
          },
          compared: ["skip8", "skip10"]
        },
        {
          _id: "selectB2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -0.5
          },
          compared: ["skip8"]
        },
        {
          _id: "skip5",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.9
          },
          compared: ["skip9"]
        },
        {
          _id: "skip6",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2
          },
          compared: ["skip9"]
        },
        {
          _id: "skip7",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1.5
          },
          compared: ["skip10"]
        },
        {
          _id: "skip8",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 3.5
          },
          compared: ["skip1", "skip4", "skip3"]
        },
        {
          _id: "skip9",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3
          },
          compared: ["skip5", "selectB", "skip6"]
        },
        {
          _id: "skip10",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3.4
          },
          compared: ["skip7", "skip2", "skip3"]
        }
      ],
      neg: [
        {
          _id: "selectA",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -0.75
          },
          compared: ["skip1"]
        },
        {
          _id: "benchmarkA",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: -2.5
          },
          compared: undefined
        },
        {
          _id: "benchmarkB",
          rankType: "benchmark",
          closeTo: null,
          ability: {
            value: 1
          },
          compared: undefined
        },
        {
          _id: "selectB1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 0.5
          },
          compared: ["skip9"]
        },
        {
          _id: "skip1",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 3
          },
          compared: ["selectA", "skip8"]
        },
        {
          _id: "skip2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2
          },
          compared: ["skip10"]
        },
        {
          _id: "skip3",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -1
          },
          compared: ["skip8", "skip10"]
        },
        {
          _id: "selectB2",
          rankType: "ranked",
          closeTo: "benchmarkA",
          ability: {
            value: -2
          },
          compared: ["skip8"]
        },
        {
          _id: "skip5",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2.9
          },
          compared: ["skip9"]
        },
        {
          _id: "skip6",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 2
          },
          compared: ["skip9"]
        },
        {
          _id: "skip7",
          rankType: "ranked",
          closeTo: "benchmarkB",
          ability: {
            value: 1.5
          },
          compared: ["skip10"]
        },
        {
          _id: "skip8",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: 3.5
          },
          compared: ["skip1", "skip4", "skip3"]
        },
        {
          _id: "skip9",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3
          },
          compared: ["skip5", "selectB", "skip6"]
        },
        {
          _id: "skip10",
          rankType: "to rank",
          closeTo: null,
          ability: {
            value: -3.4
          },
          compared: ["skip7", "skip2", "skip3"]
        }
      ]
    }

  }
};
