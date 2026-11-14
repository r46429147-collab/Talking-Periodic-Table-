export type IsotopeRecord = { massNumber: number; atomicMass: string; naturalAbundance: number | null };
export type AtomicModelRecord = { shells: number[]; electronConfiguration: string; isotopes: IsotopeRecord[]; defaultIsotope: number };

export const atomicModelData: Record<number, AtomicModelRecord> = {
  "1": {
    "shells": [
      1
    ],
    "electronConfiguration": "1s1",
    "isotopes": [
      {
        "massNumber": 1,
        "atomicMass": "1.00782503223(9)",
        "naturalAbundance": 0.999885
      },
      {
        "massNumber": 2,
        "atomicMass": "2.01410177812(12)",
        "naturalAbundance": 0.000115
      },
      {
        "massNumber": 3,
        "atomicMass": "3.0160492779(24)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 1
  },
  "2": {
    "shells": [
      2
    ],
    "electronConfiguration": "1s2",
    "isotopes": [
      {
        "massNumber": 3,
        "atomicMass": "3.0160293201(25)",
        "naturalAbundance": 0.00000134
      },
      {
        "massNumber": 4,
        "atomicMass": "4.00260325413(6)",
        "naturalAbundance": 0.99999866
      }
    ],
    "defaultIsotope": 4
  },
  "3": {
    "shells": [
      2,
      1
    ],
    "electronConfiguration": "1s2 2s1",
    "isotopes": [
      {
        "massNumber": 6,
        "atomicMass": "6.0151228874(16)",
        "naturalAbundance": 0.0759
      },
      {
        "massNumber": 7,
        "atomicMass": "7.0160034366(45)",
        "naturalAbundance": 0.9241
      }
    ],
    "defaultIsotope": 7
  },
  "4": {
    "shells": [
      2,
      2
    ],
    "electronConfiguration": "1s2 2s2",
    "isotopes": [
      {
        "massNumber": 9,
        "atomicMass": "9.012183065(82)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 9
  },
  "5": {
    "shells": [
      2,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p1",
    "isotopes": [
      {
        "massNumber": 10,
        "atomicMass": "10.01293695(41)",
        "naturalAbundance": 0.199
      },
      {
        "massNumber": 11,
        "atomicMass": "11.00930536(45)",
        "naturalAbundance": 0.801
      }
    ],
    "defaultIsotope": 11
  },
  "6": {
    "shells": [
      2,
      4
    ],
    "electronConfiguration": "1s2 2s2 2p2",
    "isotopes": [
      {
        "massNumber": 12,
        "atomicMass": "12.0000000(00)",
        "naturalAbundance": 0.9893
      },
      {
        "massNumber": 13,
        "atomicMass": "13.00335483507(23)",
        "naturalAbundance": 0.0107
      },
      {
        "massNumber": 14,
        "atomicMass": "14.0032419884(40)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 12
  },
  "7": {
    "shells": [
      2,
      5
    ],
    "electronConfiguration": "1s2 2s2 2p3",
    "isotopes": [
      {
        "massNumber": 14,
        "atomicMass": "14.00307400443(20)",
        "naturalAbundance": 0.99636
      },
      {
        "massNumber": 15,
        "atomicMass": "15.00010889888(64)",
        "naturalAbundance": 0.00364
      }
    ],
    "defaultIsotope": 14
  },
  "8": {
    "shells": [
      2,
      6
    ],
    "electronConfiguration": "1s2 2s2 2p4",
    "isotopes": [
      {
        "massNumber": 16,
        "atomicMass": "15.99491461957(17)",
        "naturalAbundance": 0.99757
      },
      {
        "massNumber": 17,
        "atomicMass": "16.99913175650(69)",
        "naturalAbundance": 0.00038
      },
      {
        "massNumber": 18,
        "atomicMass": "17.99915961286(76)",
        "naturalAbundance": 0.00205
      }
    ],
    "defaultIsotope": 16
  },
  "9": {
    "shells": [
      2,
      7
    ],
    "electronConfiguration": "1s2 2s2 2p5",
    "isotopes": [
      {
        "massNumber": 19,
        "atomicMass": "18.99840316273(92)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 19
  },
  "10": {
    "shells": [
      2,
      8
    ],
    "electronConfiguration": "1s2 2s2 2p6",
    "isotopes": [
      {
        "massNumber": 20,
        "atomicMass": "19.9924401762(17)",
        "naturalAbundance": 0.9048
      },
      {
        "massNumber": 21,
        "atomicMass": "20.993846685(41)",
        "naturalAbundance": 0.0027
      },
      {
        "massNumber": 22,
        "atomicMass": "21.991385114(18)",
        "naturalAbundance": 0.0925
      }
    ],
    "defaultIsotope": 20
  },
  "11": {
    "shells": [
      2,
      8,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s1",
    "isotopes": [
      {
        "massNumber": 23,
        "atomicMass": "22.9897692820(19)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 23
  },
  "12": {
    "shells": [
      2,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2",
    "isotopes": [
      {
        "massNumber": 24,
        "atomicMass": "23.985041697(14)",
        "naturalAbundance": 0.7899
      },
      {
        "massNumber": 25,
        "atomicMass": "24.985836976(50)",
        "naturalAbundance": 0.1
      },
      {
        "massNumber": 26,
        "atomicMass": "25.982592968(31)",
        "naturalAbundance": 0.1101
      }
    ],
    "defaultIsotope": 24
  },
  "13": {
    "shells": [
      2,
      8,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p1",
    "isotopes": [
      {
        "massNumber": 27,
        "atomicMass": "26.98153853(11)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 27
  },
  "14": {
    "shells": [
      2,
      8,
      4
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p2",
    "isotopes": [
      {
        "massNumber": 28,
        "atomicMass": "27.97692653465(44)",
        "naturalAbundance": 0.92223
      },
      {
        "massNumber": 29,
        "atomicMass": "28.97649466490(52)",
        "naturalAbundance": 0.04685
      },
      {
        "massNumber": 30,
        "atomicMass": "29.973770136(23)",
        "naturalAbundance": 0.03092
      }
    ],
    "defaultIsotope": 28
  },
  "15": {
    "shells": [
      2,
      8,
      5
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p3",
    "isotopes": [
      {
        "massNumber": 31,
        "atomicMass": "30.97376199842(70)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 31
  },
  "16": {
    "shells": [
      2,
      8,
      6
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p4",
    "isotopes": [
      {
        "massNumber": 32,
        "atomicMass": "31.9720711744(14)",
        "naturalAbundance": 0.9499
      },
      {
        "massNumber": 33,
        "atomicMass": "32.9714589098(15)",
        "naturalAbundance": 0.0075
      },
      {
        "massNumber": 34,
        "atomicMass": "33.967867004(47)",
        "naturalAbundance": 0.0425
      },
      {
        "massNumber": 36,
        "atomicMass": "35.96708071(20)",
        "naturalAbundance": 0.0001
      }
    ],
    "defaultIsotope": 32
  },
  "17": {
    "shells": [
      2,
      8,
      7
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p5",
    "isotopes": [
      {
        "massNumber": 35,
        "atomicMass": "34.968852682(37)",
        "naturalAbundance": 0.7576
      },
      {
        "massNumber": 37,
        "atomicMass": "36.965902602(55)",
        "naturalAbundance": 0.2424
      }
    ],
    "defaultIsotope": 35
  },
  "18": {
    "shells": [
      2,
      8,
      8
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6",
    "isotopes": [
      {
        "massNumber": 36,
        "atomicMass": "35.967545105(28)",
        "naturalAbundance": 0.003336
      },
      {
        "massNumber": 38,
        "atomicMass": "37.96273211(21)",
        "naturalAbundance": 0.000629
      },
      {
        "massNumber": 40,
        "atomicMass": "39.9623831237(24)",
        "naturalAbundance": 0.996035
      }
    ],
    "defaultIsotope": 40
  },
  "19": {
    "shells": [
      2,
      8,
      8,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s1",
    "isotopes": [
      {
        "massNumber": 39,
        "atomicMass": "38.9637064864(49)",
        "naturalAbundance": 0.932581
      },
      {
        "massNumber": 40,
        "atomicMass": "39.963998166(60)",
        "naturalAbundance": 0.000117
      },
      {
        "massNumber": 41,
        "atomicMass": "40.9618252579(41)",
        "naturalAbundance": 0.067302
      }
    ],
    "defaultIsotope": 39
  },
  "20": {
    "shells": [
      2,
      8,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2",
    "isotopes": [
      {
        "massNumber": 40,
        "atomicMass": "39.962590863(22)",
        "naturalAbundance": 0.96941
      },
      {
        "massNumber": 42,
        "atomicMass": "41.95861783(16)",
        "naturalAbundance": 0.00647
      },
      {
        "massNumber": 43,
        "atomicMass": "42.95876644(24)",
        "naturalAbundance": 0.00135
      },
      {
        "massNumber": 44,
        "atomicMass": "43.95548156(35)",
        "naturalAbundance": 0.02086
      },
      {
        "massNumber": 46,
        "atomicMass": "45.9536890(24)",
        "naturalAbundance": 0.00004
      },
      {
        "massNumber": 48,
        "atomicMass": "47.95252276(13)",
        "naturalAbundance": 0.00187
      }
    ],
    "defaultIsotope": 40
  },
  "21": {
    "shells": [
      2,
      8,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
    "isotopes": [
      {
        "massNumber": 45,
        "atomicMass": "44.95590828(77)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 45
  },
  "22": {
    "shells": [
      2,
      8,
      10,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
    "isotopes": [
      {
        "massNumber": 46,
        "atomicMass": "45.95262772(35)",
        "naturalAbundance": 0.0825
      },
      {
        "massNumber": 47,
        "atomicMass": "46.95175879(38)",
        "naturalAbundance": 0.0744
      },
      {
        "massNumber": 48,
        "atomicMass": "47.94794198(38)",
        "naturalAbundance": 0.7372
      },
      {
        "massNumber": 49,
        "atomicMass": "48.94786568(39)",
        "naturalAbundance": 0.0541
      },
      {
        "massNumber": 50,
        "atomicMass": "49.94478689(39)",
        "naturalAbundance": 0.0518
      }
    ],
    "defaultIsotope": 48
  },
  "23": {
    "shells": [
      2,
      8,
      11,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
    "isotopes": [
      {
        "massNumber": 50,
        "atomicMass": "49.94715601(95)",
        "naturalAbundance": 0.0025
      },
      {
        "massNumber": 51,
        "atomicMass": "50.94395704(94)",
        "naturalAbundance": 0.9975
      }
    ],
    "defaultIsotope": 51
  },
  "24": {
    "shells": [
      2,
      8,
      13,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s1 3d5",
    "isotopes": [
      {
        "massNumber": 50,
        "atomicMass": "49.94604183(94)",
        "naturalAbundance": 0.04345
      },
      {
        "massNumber": 52,
        "atomicMass": "51.94050623(63)",
        "naturalAbundance": 0.83789
      },
      {
        "massNumber": 53,
        "atomicMass": "52.94064815(62)",
        "naturalAbundance": 0.09501
      },
      {
        "massNumber": 54,
        "atomicMass": "53.93887916(61)",
        "naturalAbundance": 0.02365
      }
    ],
    "defaultIsotope": 52
  },
  "25": {
    "shells": [
      2,
      8,
      13,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    "isotopes": [
      {
        "massNumber": 55,
        "atomicMass": "54.93804391(48)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 55
  },
  "26": {
    "shells": [
      2,
      8,
      14,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
    "isotopes": [
      {
        "massNumber": 54,
        "atomicMass": "53.93960899(53)",
        "naturalAbundance": 0.05845
      },
      {
        "massNumber": 56,
        "atomicMass": "55.93493633(49)",
        "naturalAbundance": 0.91754
      },
      {
        "massNumber": 57,
        "atomicMass": "56.93539284(49)",
        "naturalAbundance": 0.02119
      },
      {
        "massNumber": 58,
        "atomicMass": "57.93327443(53)",
        "naturalAbundance": 0.00282
      }
    ],
    "defaultIsotope": 56
  },
  "27": {
    "shells": [
      2,
      8,
      15,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
    "isotopes": [
      {
        "massNumber": 59,
        "atomicMass": "58.93319429(56)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 59
  },
  "28": {
    "shells": [
      2,
      8,
      16,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
    "isotopes": [
      {
        "massNumber": 58,
        "atomicMass": "57.93534241(52)",
        "naturalAbundance": 0.68077
      },
      {
        "massNumber": 60,
        "atomicMass": "59.93078588(52)",
        "naturalAbundance": 0.26223
      },
      {
        "massNumber": 61,
        "atomicMass": "60.93105557(52)",
        "naturalAbundance": 0.011399
      },
      {
        "massNumber": 62,
        "atomicMass": "61.92834537(55)",
        "naturalAbundance": 0.036346
      },
      {
        "massNumber": 64,
        "atomicMass": "63.92796682(58)",
        "naturalAbundance": 0.009255
      }
    ],
    "defaultIsotope": 58
  },
  "29": {
    "shells": [
      2,
      8,
      18,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s1 3d10",
    "isotopes": [
      {
        "massNumber": 63,
        "atomicMass": "62.92959772(56)",
        "naturalAbundance": 0.6915
      },
      {
        "massNumber": 65,
        "atomicMass": "64.92778970(71)",
        "naturalAbundance": 0.3085
      }
    ],
    "defaultIsotope": 63
  },
  "30": {
    "shells": [
      2,
      8,
      18,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    "isotopes": [
      {
        "massNumber": 64,
        "atomicMass": "63.92914201(71)",
        "naturalAbundance": 0.4917
      },
      {
        "massNumber": 66,
        "atomicMass": "65.92603381(94)",
        "naturalAbundance": 0.2773
      },
      {
        "massNumber": 67,
        "atomicMass": "66.92712775(96)",
        "naturalAbundance": 0.0404
      },
      {
        "massNumber": 68,
        "atomicMass": "67.92484455(98)",
        "naturalAbundance": 0.1845
      },
      {
        "massNumber": 70,
        "atomicMass": "69.9253192(21)",
        "naturalAbundance": 0.0061
      }
    ],
    "defaultIsotope": 64
  },
  "31": {
    "shells": [
      2,
      8,
      18,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
    "isotopes": [
      {
        "massNumber": 69,
        "atomicMass": "68.9255735(13)",
        "naturalAbundance": 0.60108
      },
      {
        "massNumber": 71,
        "atomicMass": "70.92470258(87)",
        "naturalAbundance": 0.39892
      }
    ],
    "defaultIsotope": 69
  },
  "32": {
    "shells": [
      2,
      8,
      18,
      4
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
    "isotopes": [
      {
        "massNumber": 70,
        "atomicMass": "69.92424875(90)",
        "naturalAbundance": 0.2057
      },
      {
        "massNumber": 72,
        "atomicMass": "71.922075826(81)",
        "naturalAbundance": 0.2745
      },
      {
        "massNumber": 73,
        "atomicMass": "72.923458956(61)",
        "naturalAbundance": 0.0775
      },
      {
        "massNumber": 74,
        "atomicMass": "73.921177761(13)",
        "naturalAbundance": 0.365
      },
      {
        "massNumber": 76,
        "atomicMass": "75.921402726(19)",
        "naturalAbundance": 0.0773
      }
    ],
    "defaultIsotope": 74
  },
  "33": {
    "shells": [
      2,
      8,
      18,
      5
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
    "isotopes": [
      {
        "massNumber": 75,
        "atomicMass": "74.92159457(95)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 75
  },
  "34": {
    "shells": [
      2,
      8,
      18,
      6
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
    "isotopes": [
      {
        "massNumber": 74,
        "atomicMass": "73.922475934(15)",
        "naturalAbundance": 0.0089
      },
      {
        "massNumber": 76,
        "atomicMass": "75.919213704(17)",
        "naturalAbundance": 0.0937
      },
      {
        "massNumber": 77,
        "atomicMass": "76.919914154(67)",
        "naturalAbundance": 0.0763
      },
      {
        "massNumber": 78,
        "atomicMass": "77.91730928(20)",
        "naturalAbundance": 0.2377
      },
      {
        "massNumber": 80,
        "atomicMass": "79.9165218(13)",
        "naturalAbundance": 0.4961
      },
      {
        "massNumber": 82,
        "atomicMass": "81.9166995(15)",
        "naturalAbundance": 0.0873
      }
    ],
    "defaultIsotope": 80
  },
  "35": {
    "shells": [
      2,
      8,
      18,
      7
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
    "isotopes": [
      {
        "massNumber": 79,
        "atomicMass": "78.9183376(14)",
        "naturalAbundance": 0.5069
      },
      {
        "massNumber": 81,
        "atomicMass": "80.9162897(14)",
        "naturalAbundance": 0.4931
      }
    ],
    "defaultIsotope": 79
  },
  "36": {
    "shells": [
      2,
      8,
      18,
      8
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    "isotopes": [
      {
        "massNumber": 78,
        "atomicMass": "77.92036494(76)",
        "naturalAbundance": 0.00355
      },
      {
        "massNumber": 80,
        "atomicMass": "79.91637808(75)",
        "naturalAbundance": 0.02286
      },
      {
        "massNumber": 82,
        "atomicMass": "81.91348273(94)",
        "naturalAbundance": 0.11593
      },
      {
        "massNumber": 83,
        "atomicMass": "82.91412716(32)",
        "naturalAbundance": 0.115
      },
      {
        "massNumber": 84,
        "atomicMass": "83.9114977282(44)",
        "naturalAbundance": 0.56987
      },
      {
        "massNumber": 86,
        "atomicMass": "85.9106106269(41)",
        "naturalAbundance": 0.17279
      }
    ],
    "defaultIsotope": 84
  },
  "37": {
    "shells": [
      2,
      8,
      18,
      8,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    "isotopes": [
      {
        "massNumber": 85,
        "atomicMass": "84.9117897379(54)",
        "naturalAbundance": 0.7217
      },
      {
        "massNumber": 87,
        "atomicMass": "86.9091805310(60)",
        "naturalAbundance": 0.2783
      }
    ],
    "defaultIsotope": 85
  },
  "38": {
    "shells": [
      2,
      8,
      18,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    "isotopes": [
      {
        "massNumber": 84,
        "atomicMass": "83.9134191(13)",
        "naturalAbundance": 0.0056
      },
      {
        "massNumber": 86,
        "atomicMass": "85.9092606(12)",
        "naturalAbundance": 0.0986
      },
      {
        "massNumber": 87,
        "atomicMass": "86.9088775(12)",
        "naturalAbundance": 0.07
      },
      {
        "massNumber": 88,
        "atomicMass": "87.9056125(12)",
        "naturalAbundance": 0.8258
      }
    ],
    "defaultIsotope": 88
  },
  "39": {
    "shells": [
      2,
      8,
      18,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
    "isotopes": [
      {
        "massNumber": 89,
        "atomicMass": "88.9058403(24)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 89
  },
  "40": {
    "shells": [
      2,
      8,
      18,
      10,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
    "isotopes": [
      {
        "massNumber": 90,
        "atomicMass": "89.9046977(20)",
        "naturalAbundance": 0.5145
      },
      {
        "massNumber": 91,
        "atomicMass": "90.9056396(20)",
        "naturalAbundance": 0.1122
      },
      {
        "massNumber": 92,
        "atomicMass": "91.9050347(20)",
        "naturalAbundance": 0.1715
      },
      {
        "massNumber": 94,
        "atomicMass": "93.9063108(20)",
        "naturalAbundance": 0.1738
      },
      {
        "massNumber": 96,
        "atomicMass": "95.9082714(21)",
        "naturalAbundance": 0.028
      }
    ],
    "defaultIsotope": 90
  },
  "41": {
    "shells": [
      2,
      8,
      18,
      12,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
    "isotopes": [
      {
        "massNumber": 93,
        "atomicMass": "92.9063730(20)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 93
  },
  "42": {
    "shells": [
      2,
      8,
      18,
      13,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    "isotopes": [
      {
        "massNumber": 92,
        "atomicMass": "91.90680796(84)",
        "naturalAbundance": 0.1453
      },
      {
        "massNumber": 94,
        "atomicMass": "93.90508490(48)",
        "naturalAbundance": 0.0915
      },
      {
        "massNumber": 95,
        "atomicMass": "94.90583877(47)",
        "naturalAbundance": 0.1584
      },
      {
        "massNumber": 96,
        "atomicMass": "95.90467612(47)",
        "naturalAbundance": 0.1667
      },
      {
        "massNumber": 97,
        "atomicMass": "96.90601812(49)",
        "naturalAbundance": 0.096
      },
      {
        "massNumber": 98,
        "atomicMass": "97.90540482(49)",
        "naturalAbundance": 0.2439
      },
      {
        "massNumber": 100,
        "atomicMass": "99.9074718(11)",
        "naturalAbundance": 0.0982
      }
    ],
    "defaultIsotope": 98
  },
  "43": {
    "shells": [
      2,
      8,
      18,
      13,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
    "isotopes": [
      {
        "massNumber": 97,
        "atomicMass": "96.9063667(40)",
        "naturalAbundance": null
      },
      {
        "massNumber": 98,
        "atomicMass": "97.9072124(36)",
        "naturalAbundance": null
      },
      {
        "massNumber": 99,
        "atomicMass": "98.9062508(10)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 98
  },
  "44": {
    "shells": [
      2,
      8,
      18,
      15,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    "isotopes": [
      {
        "massNumber": 96,
        "atomicMass": "95.90759025(49)",
        "naturalAbundance": 0.0554
      },
      {
        "massNumber": 98,
        "atomicMass": "97.9052868(69)",
        "naturalAbundance": 0.0187
      },
      {
        "massNumber": 99,
        "atomicMass": "98.9059341(11)",
        "naturalAbundance": 0.1276
      },
      {
        "massNumber": 100,
        "atomicMass": "99.9042143(11)",
        "naturalAbundance": 0.126
      },
      {
        "massNumber": 101,
        "atomicMass": "100.9055769(12)",
        "naturalAbundance": 0.1706
      },
      {
        "massNumber": 102,
        "atomicMass": "101.9043441(12)",
        "naturalAbundance": 0.3155
      },
      {
        "massNumber": 104,
        "atomicMass": "103.9054275(28)",
        "naturalAbundance": 0.1862
      }
    ],
    "defaultIsotope": 102
  },
  "45": {
    "shells": [
      2,
      8,
      18,
      16,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
    "isotopes": [
      {
        "massNumber": 103,
        "atomicMass": "102.9054980(26)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 103
  },
  "46": {
    "shells": [
      2,
      8,
      18,
      18
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10",
    "isotopes": [
      {
        "massNumber": 102,
        "atomicMass": "101.9056022(28)",
        "naturalAbundance": 0.0102
      },
      {
        "massNumber": 104,
        "atomicMass": "103.9040305(14)",
        "naturalAbundance": 0.1114
      },
      {
        "massNumber": 105,
        "atomicMass": "104.9050796(12)",
        "naturalAbundance": 0.2233
      },
      {
        "massNumber": 106,
        "atomicMass": "105.9034804(12)",
        "naturalAbundance": 0.2733
      },
      {
        "massNumber": 108,
        "atomicMass": "107.9038916(12)",
        "naturalAbundance": 0.2646
      },
      {
        "massNumber": 110,
        "atomicMass": "109.90517220(75)",
        "naturalAbundance": 0.1172
      }
    ],
    "defaultIsotope": 106
  },
  "47": {
    "shells": [
      2,
      8,
      18,
      18,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
    "isotopes": [
      {
        "massNumber": 107,
        "atomicMass": "106.9050916(26)",
        "naturalAbundance": 0.51839
      },
      {
        "massNumber": 109,
        "atomicMass": "108.9047553(14)",
        "naturalAbundance": 0.48161
      }
    ],
    "defaultIsotope": 107
  },
  "48": {
    "shells": [
      2,
      8,
      18,
      18,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
    "isotopes": [
      {
        "massNumber": 106,
        "atomicMass": "105.9064599(12)",
        "naturalAbundance": 0.0125
      },
      {
        "massNumber": 108,
        "atomicMass": "107.9041834(12)",
        "naturalAbundance": 0.0089
      },
      {
        "massNumber": 110,
        "atomicMass": "109.90300661(61)",
        "naturalAbundance": 0.1249
      },
      {
        "massNumber": 111,
        "atomicMass": "110.90418287(61)",
        "naturalAbundance": 0.128
      },
      {
        "massNumber": 112,
        "atomicMass": "111.90276287(60)",
        "naturalAbundance": 0.2413
      },
      {
        "massNumber": 113,
        "atomicMass": "112.90440813(45)",
        "naturalAbundance": 0.1222
      },
      {
        "massNumber": 114,
        "atomicMass": "113.90336509(43)",
        "naturalAbundance": 0.2873
      },
      {
        "massNumber": 116,
        "atomicMass": "115.90476315(17)",
        "naturalAbundance": 0.0749
      }
    ],
    "defaultIsotope": 114
  },
  "49": {
    "shells": [
      2,
      8,
      18,
      18,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1",
    "isotopes": [
      {
        "massNumber": 113,
        "atomicMass": "112.90406184(91)",
        "naturalAbundance": 0.0429
      },
      {
        "massNumber": 115,
        "atomicMass": "114.903878776(12)",
        "naturalAbundance": 0.9571
      }
    ],
    "defaultIsotope": 115
  },
  "50": {
    "shells": [
      2,
      8,
      18,
      18,
      4
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
    "isotopes": [
      {
        "massNumber": 112,
        "atomicMass": "111.90482387(61)",
        "naturalAbundance": 0.0097
      },
      {
        "massNumber": 114,
        "atomicMass": "113.9027827(10)",
        "naturalAbundance": 0.0066
      },
      {
        "massNumber": 115,
        "atomicMass": "114.903344699(16)",
        "naturalAbundance": 0.0034
      },
      {
        "massNumber": 116,
        "atomicMass": "115.90174280(10)",
        "naturalAbundance": 0.1454
      },
      {
        "massNumber": 117,
        "atomicMass": "116.90295398(52)",
        "naturalAbundance": 0.0768
      },
      {
        "massNumber": 118,
        "atomicMass": "117.90160657(54)",
        "naturalAbundance": 0.2422
      },
      {
        "massNumber": 119,
        "atomicMass": "118.90331117(78)",
        "naturalAbundance": 0.0859
      },
      {
        "massNumber": 120,
        "atomicMass": "119.90220163(97)",
        "naturalAbundance": 0.3258
      },
      {
        "massNumber": 122,
        "atomicMass": "121.9034438(26)",
        "naturalAbundance": 0.0463
      },
      {
        "massNumber": 124,
        "atomicMass": "123.9052766(11)",
        "naturalAbundance": 0.0579
      }
    ],
    "defaultIsotope": 120
  },
  "51": {
    "shells": [
      2,
      8,
      18,
      18,
      5
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    "isotopes": [
      {
        "massNumber": 121,
        "atomicMass": "120.9038120(30)",
        "naturalAbundance": 0.5721
      },
      {
        "massNumber": 123,
        "atomicMass": "122.9042132(23)",
        "naturalAbundance": 0.4279
      }
    ],
    "defaultIsotope": 121
  },
  "52": {
    "shells": [
      2,
      8,
      18,
      18,
      6
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
    "isotopes": [
      {
        "massNumber": 120,
        "atomicMass": "119.9040593(33)",
        "naturalAbundance": 0.0009
      },
      {
        "massNumber": 122,
        "atomicMass": "121.9030435(16)",
        "naturalAbundance": 0.0255
      },
      {
        "massNumber": 123,
        "atomicMass": "122.9042698(16)",
        "naturalAbundance": 0.0089
      },
      {
        "massNumber": 124,
        "atomicMass": "123.9028171(16)",
        "naturalAbundance": 0.0474
      },
      {
        "massNumber": 125,
        "atomicMass": "124.9044299(16)",
        "naturalAbundance": 0.0707
      },
      {
        "massNumber": 126,
        "atomicMass": "125.9033109(16)",
        "naturalAbundance": 0.1884
      },
      {
        "massNumber": 128,
        "atomicMass": "127.90446128(93)",
        "naturalAbundance": 0.3174
      },
      {
        "massNumber": 130,
        "atomicMass": "129.906222748(12)",
        "naturalAbundance": 0.3408
      }
    ],
    "defaultIsotope": 130
  },
  "53": {
    "shells": [
      2,
      8,
      18,
      18,
      7
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
    "isotopes": [
      {
        "massNumber": 127,
        "atomicMass": "126.9044719(39)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 127
  },
  "54": {
    "shells": [
      2,
      8,
      18,
      18,
      8
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    "isotopes": [
      {
        "massNumber": 124,
        "atomicMass": "123.9058920(19)",
        "naturalAbundance": 0.000952
      },
      {
        "massNumber": 126,
        "atomicMass": "125.9042983(38)",
        "naturalAbundance": 0.00089
      },
      {
        "massNumber": 128,
        "atomicMass": "127.9035310(11)",
        "naturalAbundance": 0.019102
      },
      {
        "massNumber": 129,
        "atomicMass": "128.9047808611(60)",
        "naturalAbundance": 0.264006
      },
      {
        "massNumber": 130,
        "atomicMass": "129.903509349(10)",
        "naturalAbundance": 0.04071
      },
      {
        "massNumber": 131,
        "atomicMass": "130.90508406(24)",
        "naturalAbundance": 0.212324
      },
      {
        "massNumber": 132,
        "atomicMass": "131.9041550856(56)",
        "naturalAbundance": 0.269086
      },
      {
        "massNumber": 134,
        "atomicMass": "133.90539466(90)",
        "naturalAbundance": 0.104357
      },
      {
        "massNumber": 136,
        "atomicMass": "135.907214484(11)",
        "naturalAbundance": 0.088573
      }
    ],
    "defaultIsotope": 132
  },
  "55": {
    "shells": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    "isotopes": [
      {
        "massNumber": 133,
        "atomicMass": "132.9054519610(80)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 133
  },
  "56": {
    "shells": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
    "isotopes": [
      {
        "massNumber": 130,
        "atomicMass": "129.9063207(28)",
        "naturalAbundance": 0.00106
      },
      {
        "massNumber": 132,
        "atomicMass": "131.9050611(11)",
        "naturalAbundance": 0.00101
      },
      {
        "massNumber": 134,
        "atomicMass": "133.90450818(30)",
        "naturalAbundance": 0.02417
      },
      {
        "massNumber": 135,
        "atomicMass": "134.90568838(29)",
        "naturalAbundance": 0.06592
      },
      {
        "massNumber": 136,
        "atomicMass": "135.90457573(29)",
        "naturalAbundance": 0.07854
      },
      {
        "massNumber": 137,
        "atomicMass": "136.90582714(30)",
        "naturalAbundance": 0.11232
      },
      {
        "massNumber": 138,
        "atomicMass": "137.90524700(31)",
        "naturalAbundance": 0.71698
      }
    ],
    "defaultIsotope": 138
  },
  "57": {
    "shells": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1",
    "isotopes": [
      {
        "massNumber": 138,
        "atomicMass": "137.9071149(37)",
        "naturalAbundance": 0.0008881
      },
      {
        "massNumber": 139,
        "atomicMass": "138.9063563(24)",
        "naturalAbundance": 0.9991119
      }
    ],
    "defaultIsotope": 139
  },
  "58": {
    "shells": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1",
    "isotopes": [
      {
        "massNumber": 136,
        "atomicMass": "135.90712921(41)",
        "naturalAbundance": 0.00185
      },
      {
        "massNumber": 138,
        "atomicMass": "137.905991(11)",
        "naturalAbundance": 0.00251
      },
      {
        "massNumber": 140,
        "atomicMass": "139.9054431(23)",
        "naturalAbundance": 0.8845
      },
      {
        "massNumber": 142,
        "atomicMass": "141.9092504(29)",
        "naturalAbundance": 0.11114
      }
    ],
    "defaultIsotope": 140
  },
  "59": {
    "shells": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    "isotopes": [
      {
        "massNumber": 141,
        "atomicMass": "140.9076576(23)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 141
  },
  "60": {
    "shells": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    "isotopes": [
      {
        "massNumber": 142,
        "atomicMass": "141.9077290(20)",
        "naturalAbundance": 0.27152
      },
      {
        "massNumber": 143,
        "atomicMass": "142.9098200(20)",
        "naturalAbundance": 0.12174
      },
      {
        "massNumber": 144,
        "atomicMass": "143.9100930(20)",
        "naturalAbundance": 0.23798
      },
      {
        "massNumber": 145,
        "atomicMass": "144.9125793(20)",
        "naturalAbundance": 0.08293
      },
      {
        "massNumber": 146,
        "atomicMass": "145.9131226(20)",
        "naturalAbundance": 0.17189
      },
      {
        "massNumber": 148,
        "atomicMass": "147.9168993(26)",
        "naturalAbundance": 0.05756
      },
      {
        "massNumber": 150,
        "atomicMass": "149.9209022(18)",
        "naturalAbundance": 0.05638
      }
    ],
    "defaultIsotope": 142
  },
  "61": {
    "shells": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
    "isotopes": [
      {
        "massNumber": 145,
        "atomicMass": "144.9127559(33)",
        "naturalAbundance": null
      },
      {
        "massNumber": 147,
        "atomicMass": "146.9151450(19)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 145
  },
  "62": {
    "shells": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
    "isotopes": [
      {
        "massNumber": 144,
        "atomicMass": "143.9120065(21)",
        "naturalAbundance": 0.0307
      },
      {
        "massNumber": 147,
        "atomicMass": "146.9149044(19)",
        "naturalAbundance": 0.1499
      },
      {
        "massNumber": 148,
        "atomicMass": "147.9148292(19)",
        "naturalAbundance": 0.1124
      },
      {
        "massNumber": 149,
        "atomicMass": "148.9171921(18)",
        "naturalAbundance": 0.1382
      },
      {
        "massNumber": 150,
        "atomicMass": "149.9172829(18)",
        "naturalAbundance": 0.0738
      },
      {
        "massNumber": 152,
        "atomicMass": "151.9197397(18)",
        "naturalAbundance": 0.2675
      },
      {
        "massNumber": 154,
        "atomicMass": "153.9222169(20)",
        "naturalAbundance": 0.2275
      }
    ],
    "defaultIsotope": 152
  },
  "63": {
    "shells": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
    "isotopes": [
      {
        "massNumber": 151,
        "atomicMass": "150.9198578(18)",
        "naturalAbundance": 0.4781
      },
      {
        "massNumber": 153,
        "atomicMass": "152.9212380(18)",
        "naturalAbundance": 0.5219
      }
    ],
    "defaultIsotope": 153
  },
  "64": {
    "shells": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
    "isotopes": [
      {
        "massNumber": 152,
        "atomicMass": "151.9197995(18)",
        "naturalAbundance": 0.002
      },
      {
        "massNumber": 154,
        "atomicMass": "153.9208741(17)",
        "naturalAbundance": 0.0218
      },
      {
        "massNumber": 155,
        "atomicMass": "154.9226305(17)",
        "naturalAbundance": 0.148
      },
      {
        "massNumber": 156,
        "atomicMass": "155.9221312(17)",
        "naturalAbundance": 0.2047
      },
      {
        "massNumber": 157,
        "atomicMass": "156.9239686(17)",
        "naturalAbundance": 0.1565
      },
      {
        "massNumber": 158,
        "atomicMass": "157.9241123(17)",
        "naturalAbundance": 0.2484
      },
      {
        "massNumber": 160,
        "atomicMass": "159.9270624(18)",
        "naturalAbundance": 0.2186
      }
    ],
    "defaultIsotope": 158
  },
  "65": {
    "shells": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
    "isotopes": [
      {
        "massNumber": 159,
        "atomicMass": "158.9253547(19)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 159
  },
  "66": {
    "shells": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
    "isotopes": [
      {
        "massNumber": 156,
        "atomicMass": "155.9242847(17)",
        "naturalAbundance": 0.00056
      },
      {
        "massNumber": 158,
        "atomicMass": "157.9244159(31)",
        "naturalAbundance": 0.00095
      },
      {
        "massNumber": 160,
        "atomicMass": "159.9252046(20)",
        "naturalAbundance": 0.02329
      },
      {
        "massNumber": 161,
        "atomicMass": "160.9269405(20)",
        "naturalAbundance": 0.18889
      },
      {
        "massNumber": 162,
        "atomicMass": "161.9268056(20)",
        "naturalAbundance": 0.25475
      },
      {
        "massNumber": 163,
        "atomicMass": "162.9287383(20)",
        "naturalAbundance": 0.24896
      },
      {
        "massNumber": 164,
        "atomicMass": "163.9291819(20)",
        "naturalAbundance": 0.2826
      }
    ],
    "defaultIsotope": 164
  },
  "67": {
    "shells": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
    "isotopes": [
      {
        "massNumber": 165,
        "atomicMass": "164.9303288(21)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 165
  },
  "68": {
    "shells": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
    "isotopes": [
      {
        "massNumber": 162,
        "atomicMass": "161.9287884(20)",
        "naturalAbundance": 0.00139
      },
      {
        "massNumber": 164,
        "atomicMass": "163.9292088(20)",
        "naturalAbundance": 0.01601
      },
      {
        "massNumber": 166,
        "atomicMass": "165.9302995(22)",
        "naturalAbundance": 0.33503
      },
      {
        "massNumber": 167,
        "atomicMass": "166.9320546(22)",
        "naturalAbundance": 0.22869
      },
      {
        "massNumber": 168,
        "atomicMass": "167.9323767(22)",
        "naturalAbundance": 0.26978
      },
      {
        "massNumber": 170,
        "atomicMass": "169.9354702(26)",
        "naturalAbundance": 0.1491
      }
    ],
    "defaultIsotope": 166
  },
  "69": {
    "shells": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
    "isotopes": [
      {
        "massNumber": 169,
        "atomicMass": "168.9342179(22)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 169
  },
  "70": {
    "shells": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
    "isotopes": [
      {
        "massNumber": 168,
        "atomicMass": "167.9338896(22)",
        "naturalAbundance": 0.00123
      },
      {
        "massNumber": 170,
        "atomicMass": "169.9347664(22)",
        "naturalAbundance": 0.02982
      },
      {
        "massNumber": 171,
        "atomicMass": "170.9363302(22)",
        "naturalAbundance": 0.1409
      },
      {
        "massNumber": 172,
        "atomicMass": "171.9363859(22)",
        "naturalAbundance": 0.2168
      },
      {
        "massNumber": 173,
        "atomicMass": "172.9382151(22)",
        "naturalAbundance": 0.16103
      },
      {
        "massNumber": 174,
        "atomicMass": "173.9388664(22)",
        "naturalAbundance": 0.32026
      },
      {
        "massNumber": 176,
        "atomicMass": "175.9425764(24)",
        "naturalAbundance": 0.12996
      }
    ],
    "defaultIsotope": 174
  },
  "71": {
    "shells": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    "isotopes": [
      {
        "massNumber": 175,
        "atomicMass": "174.9407752(20)",
        "naturalAbundance": 0.97401
      },
      {
        "massNumber": 176,
        "atomicMass": "175.9426897(20)",
        "naturalAbundance": 0.02599
      }
    ],
    "defaultIsotope": 175
  },
  "72": {
    "shells": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    "isotopes": [
      {
        "massNumber": 174,
        "atomicMass": "173.9400461(28)",
        "naturalAbundance": 0.0016
      },
      {
        "massNumber": 176,
        "atomicMass": "175.9414076(22)",
        "naturalAbundance": 0.0526
      },
      {
        "massNumber": 177,
        "atomicMass": "176.9432277(20)",
        "naturalAbundance": 0.186
      },
      {
        "massNumber": 178,
        "atomicMass": "177.9437058(20)",
        "naturalAbundance": 0.2728
      },
      {
        "massNumber": 179,
        "atomicMass": "178.9458232(20)",
        "naturalAbundance": 0.1362
      },
      {
        "massNumber": 180,
        "atomicMass": "179.9465570(20)",
        "naturalAbundance": 0.3508
      }
    ],
    "defaultIsotope": 180
  },
  "73": {
    "shells": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    "isotopes": [
      {
        "massNumber": 180,
        "atomicMass": "179.9474648(24)",
        "naturalAbundance": 0.0001201
      },
      {
        "massNumber": 181,
        "atomicMass": "180.9479958(20)",
        "naturalAbundance": 0.9998799
      }
    ],
    "defaultIsotope": 181
  },
  "74": {
    "shells": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    "isotopes": [
      {
        "massNumber": 180,
        "atomicMass": "179.9467108(20)",
        "naturalAbundance": 0.0012
      },
      {
        "massNumber": 182,
        "atomicMass": "181.94820394(91)",
        "naturalAbundance": 0.265
      },
      {
        "massNumber": 183,
        "atomicMass": "182.95022275(90)",
        "naturalAbundance": 0.1431
      },
      {
        "massNumber": 184,
        "atomicMass": "183.95093092(94)",
        "naturalAbundance": 0.3064
      },
      {
        "massNumber": 186,
        "atomicMass": "185.9543628(17)",
        "naturalAbundance": 0.2843
      }
    ],
    "defaultIsotope": 184
  },
  "75": {
    "shells": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
    "isotopes": [
      {
        "massNumber": 185,
        "atomicMass": "184.9529545(13)",
        "naturalAbundance": 0.374
      },
      {
        "massNumber": 187,
        "atomicMass": "186.9557501(16)",
        "naturalAbundance": 0.626
      }
    ],
    "defaultIsotope": 187
  },
  "76": {
    "shells": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
    "isotopes": [
      {
        "massNumber": 184,
        "atomicMass": "183.9524885(14)",
        "naturalAbundance": 0.0002
      },
      {
        "massNumber": 186,
        "atomicMass": "185.9538350(16)",
        "naturalAbundance": 0.0159
      },
      {
        "massNumber": 187,
        "atomicMass": "186.9557474(16)",
        "naturalAbundance": 0.0196
      },
      {
        "massNumber": 188,
        "atomicMass": "187.9558352(16)",
        "naturalAbundance": 0.1324
      },
      {
        "massNumber": 189,
        "atomicMass": "188.9581442(17)",
        "naturalAbundance": 0.1615
      },
      {
        "massNumber": 190,
        "atomicMass": "189.9584437(17)",
        "naturalAbundance": 0.2626
      },
      {
        "massNumber": 192,
        "atomicMass": "191.9614770(29)",
        "naturalAbundance": 0.4078
      }
    ],
    "defaultIsotope": 192
  },
  "77": {
    "shells": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
    "isotopes": [
      {
        "massNumber": 191,
        "atomicMass": "190.9605893(21)",
        "naturalAbundance": 0.373
      },
      {
        "massNumber": 193,
        "atomicMass": "192.9629216(21)",
        "naturalAbundance": 0.627
      }
    ],
    "defaultIsotope": 193
  },
  "78": {
    "shells": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9",
    "isotopes": [
      {
        "massNumber": 190,
        "atomicMass": "189.9599297(63)",
        "naturalAbundance": 0.00012
      },
      {
        "massNumber": 192,
        "atomicMass": "191.9610387(32)",
        "naturalAbundance": 0.00782
      },
      {
        "massNumber": 194,
        "atomicMass": "193.9626809(10)",
        "naturalAbundance": 0.3286
      },
      {
        "massNumber": 195,
        "atomicMass": "194.9647917(10)",
        "naturalAbundance": 0.3378
      },
      {
        "massNumber": 196,
        "atomicMass": "195.96495209(99)",
        "naturalAbundance": 0.2521
      },
      {
        "massNumber": 198,
        "atomicMass": "197.9678949(23)",
        "naturalAbundance": 0.07356
      }
    ],
    "defaultIsotope": 195
  },
  "79": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10",
    "isotopes": [
      {
        "massNumber": 197,
        "atomicMass": "196.96656879(71)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 197
  },
  "80": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
    "isotopes": [
      {
        "massNumber": 196,
        "atomicMass": "195.9658326(32)",
        "naturalAbundance": 0.0015
      },
      {
        "massNumber": 198,
        "atomicMass": "197.96676860(52)",
        "naturalAbundance": 0.0997
      },
      {
        "massNumber": 199,
        "atomicMass": "198.96828064(46)",
        "naturalAbundance": 0.1687
      },
      {
        "massNumber": 200,
        "atomicMass": "199.96832659(47)",
        "naturalAbundance": 0.231
      },
      {
        "massNumber": 201,
        "atomicMass": "200.97030284(69)",
        "naturalAbundance": 0.1318
      },
      {
        "massNumber": 202,
        "atomicMass": "201.97064340(69)",
        "naturalAbundance": 0.2986
      },
      {
        "massNumber": 204,
        "atomicMass": "203.97349398(53)",
        "naturalAbundance": 0.0687
      }
    ],
    "defaultIsotope": 202
  },
  "81": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    "isotopes": [
      {
        "massNumber": 203,
        "atomicMass": "202.9723446(14)",
        "naturalAbundance": 0.2952
      },
      {
        "massNumber": 205,
        "atomicMass": "204.9744278(14)",
        "naturalAbundance": 0.7048
      }
    ],
    "defaultIsotope": 205
  },
  "82": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    "isotopes": [
      {
        "massNumber": 204,
        "atomicMass": "203.9730440(13)",
        "naturalAbundance": 0.014
      },
      {
        "massNumber": 206,
        "atomicMass": "205.9744657(13)",
        "naturalAbundance": 0.241
      },
      {
        "massNumber": 207,
        "atomicMass": "206.9758973(13)",
        "naturalAbundance": 0.221
      },
      {
        "massNumber": 208,
        "atomicMass": "207.9766525(13)",
        "naturalAbundance": 0.524
      }
    ],
    "defaultIsotope": 208
  },
  "83": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    "isotopes": [
      {
        "massNumber": 209,
        "atomicMass": "208.9803991(16)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 209
  },
  "84": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    "isotopes": [
      {
        "massNumber": 209,
        "atomicMass": "208.9824308(20)",
        "naturalAbundance": null
      },
      {
        "massNumber": 210,
        "atomicMass": "209.9828741(13)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 209
  },
  "85": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    "isotopes": [
      {
        "massNumber": 210,
        "atomicMass": "209.9871479(83)",
        "naturalAbundance": null
      },
      {
        "massNumber": 211,
        "atomicMass": "210.9874966(30)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 210
  },
  "86": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    "isotopes": [
      {
        "massNumber": 211,
        "atomicMass": "210.9906011(73)",
        "naturalAbundance": null
      },
      {
        "massNumber": 220,
        "atomicMass": "220.0113941(23)",
        "naturalAbundance": null
      },
      {
        "massNumber": 222,
        "atomicMass": "222.0175782(25)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 222
  },
  "87": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    "isotopes": [
      {
        "massNumber": 223,
        "atomicMass": "223.0197360(25)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 223
  },
  "88": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    "isotopes": [
      {
        "massNumber": 223,
        "atomicMass": "223.0185023(27)",
        "naturalAbundance": null
      },
      {
        "massNumber": 224,
        "atomicMass": "224.0202120(23)",
        "naturalAbundance": null
      },
      {
        "massNumber": 226,
        "atomicMass": "226.0254103(25)",
        "naturalAbundance": null
      },
      {
        "massNumber": 228,
        "atomicMass": "228.0310707(26)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 226
  },
  "89": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    "isotopes": [
      {
        "massNumber": 227,
        "atomicMass": "227.0277523(25)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 227
  },
  "90": {
    "shells": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    "isotopes": [
      {
        "massNumber": 230,
        "atomicMass": "230.0331341(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 232,
        "atomicMass": "232.0380558(21)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 232
  },
  "91": {
    "shells": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    "isotopes": [
      {
        "massNumber": 231,
        "atomicMass": "231.0358842(24)",
        "naturalAbundance": 1
      }
    ],
    "defaultIsotope": 231
  },
  "92": {
    "shells": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    "isotopes": [
      {
        "massNumber": 233,
        "atomicMass": "233.0396355(29)",
        "naturalAbundance": null
      },
      {
        "massNumber": 234,
        "atomicMass": "234.0409523(19)",
        "naturalAbundance": 0.000054
      },
      {
        "massNumber": 235,
        "atomicMass": "235.0439301(19)",
        "naturalAbundance": 0.007204
      },
      {
        "massNumber": 236,
        "atomicMass": "236.0455682(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 238,
        "atomicMass": "238.0507884(20)",
        "naturalAbundance": 0.992742
      }
    ],
    "defaultIsotope": 238
  },
  "93": {
    "shells": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    "isotopes": [
      {
        "massNumber": 236,
        "atomicMass": "236.046570(54)",
        "naturalAbundance": null
      },
      {
        "massNumber": 237,
        "atomicMass": "237.0481736(19)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 237
  },
  "94": {
    "shells": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    "isotopes": [
      {
        "massNumber": 238,
        "atomicMass": "238.0495601(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 239,
        "atomicMass": "239.0521636(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 240,
        "atomicMass": "240.0538138(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 241,
        "atomicMass": "241.0568517(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 242,
        "atomicMass": "242.0587428(20)",
        "naturalAbundance": null
      },
      {
        "massNumber": 244,
        "atomicMass": "244.0642053(56)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 244
  },
  "95": {
    "shells": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    "isotopes": [
      {
        "massNumber": 241,
        "atomicMass": "241.0568293(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 243,
        "atomicMass": "243.0613813(24)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 241
  },
  "96": {
    "shells": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    "isotopes": [
      {
        "massNumber": 243,
        "atomicMass": "243.0613893(22)",
        "naturalAbundance": null
      },
      {
        "massNumber": 244,
        "atomicMass": "244.0627528(19)",
        "naturalAbundance": null
      },
      {
        "massNumber": 245,
        "atomicMass": "245.0654915(22)",
        "naturalAbundance": null
      },
      {
        "massNumber": 246,
        "atomicMass": "246.0672238(22)",
        "naturalAbundance": null
      },
      {
        "massNumber": 247,
        "atomicMass": "247.0703541(47)",
        "naturalAbundance": null
      },
      {
        "massNumber": 248,
        "atomicMass": "248.0723499(56)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 243
  },
  "97": {
    "shells": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    "isotopes": [
      {
        "massNumber": 247,
        "atomicMass": "247.0703073(59)",
        "naturalAbundance": null
      },
      {
        "massNumber": 249,
        "atomicMass": "249.0749877(27)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 247
  },
  "98": {
    "shells": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    "isotopes": [
      {
        "massNumber": 249,
        "atomicMass": "249.0748539(23)",
        "naturalAbundance": null
      },
      {
        "massNumber": 250,
        "atomicMass": "250.0764062(22)",
        "naturalAbundance": null
      },
      {
        "massNumber": 251,
        "atomicMass": "251.0795886(48)",
        "naturalAbundance": null
      },
      {
        "massNumber": 252,
        "atomicMass": "252.0816272(56)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 249
  },
  "99": {
    "shells": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    "isotopes": [
      {
        "massNumber": 252,
        "atomicMass": "252.082980(54)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 252
  },
  "100": {
    "shells": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    "isotopes": [
      {
        "massNumber": 257,
        "atomicMass": "257.0951061(69)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 257
  },
  "101": {
    "shells": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    "isotopes": [
      {
        "massNumber": 258,
        "atomicMass": "258.0984315(50)",
        "naturalAbundance": null
      },
      {
        "massNumber": 260,
        "atomicMass": "260.10365(34#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 258
  },
  "102": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    "isotopes": [
      {
        "massNumber": 259,
        "atomicMass": "259.10103(11#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 259
  },
  "103": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    "isotopes": [
      {
        "massNumber": 262,
        "atomicMass": "262.10961(22#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 262
  },
  "104": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
    "isotopes": [
      {
        "massNumber": 267,
        "atomicMass": "267.12179(62#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 267
  },
  "105": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
    "isotopes": [
      {
        "massNumber": 268,
        "atomicMass": "268.12567(57#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 268
  },
  "106": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
    "isotopes": [
      {
        "massNumber": 271,
        "atomicMass": "271.13393(63#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 271
  },
  "107": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
    "isotopes": [
      {
        "massNumber": 272,
        "atomicMass": "272.13826(58#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 272
  },
  "108": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
    "isotopes": [
      {
        "massNumber": 270,
        "atomicMass": "270.13429(27#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 270
  },
  "109": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
    "isotopes": [
      {
        "massNumber": 276,
        "atomicMass": "276.15159(59#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 276
  },
  "110": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      16,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
    "isotopes": [
      {
        "massNumber": 281,
        "atomicMass": "281.16451(59#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 281
  },
  "111": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      17,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9",
    "isotopes": [
      {
        "massNumber": 280,
        "atomicMass": "280.16514(61#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 280
  },
  "112": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    "isotopes": [
      {
        "massNumber": 285,
        "atomicMass": "285.17712(60#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 285
  },
  "113": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    "isotopes": [
      {
        "massNumber": 284,
        "atomicMass": "284.17873(62#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 284
  },
  "114": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    "isotopes": [
      {
        "massNumber": 289,
        "atomicMass": "289.19042(60#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 289
  },
  "115": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    "isotopes": [
      {
        "massNumber": 288,
        "atomicMass": "288.19274(62#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 288
  },
  "116": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    "isotopes": [
      {
        "massNumber": 293,
        "atomicMass": "293.20449(60#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 293
  },
  "117": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    "isotopes": [
      {
        "massNumber": 292,
        "atomicMass": "292.20746(75#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 292
  },
  "118": {
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "electronConfiguration": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    "isotopes": [
      {
        "massNumber": 294,
        "atomicMass": "294.21392(71#)",
        "naturalAbundance": null
      }
    ],
    "defaultIsotope": 294
  }
};
