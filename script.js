const questions = [
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHIzdSWMUnkyr-jozR2l9s4eeteaH_SOiyGBWi_jihhNO3ACIjqJXEvL_BUJVJoKxbaU2pgXH7N1R48FCnTkUU9lhR5Alru0FLfsxIzHI7QWXC_ufM80kOB7PRgQqRyPP-xbiHPEHAbfEW2cEIiOl9fSbEK2GwNEwNfSYBOfTWHrs9P9jhmNGE479Lzfw/s1600/1-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4XXSI3Rv9kV22YwYqcfszVFZFYNEwF3MZlttbeQL5vYspYD8d2l44VRteqduJeNbHHcEzBve6AvEVMsivwQirjkYlm4lyZ74WzpJfNX3TaP6I0rdteD_WA5nxxwE6108NSsBNxWVrX93zrZoUbc07z0IlsluOcbpgkYO7yRkNuVaS2h2y9khcF9DdXDY/s1600/1-2.jpg",
    },
    chapters: ["Moving Charges and Magnetism"],
    topics: ["Force between Two Parallel Currents, the Ampere"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDdJYqFsh8Ues-t5ipk5xQdqIgDYv97nn8yCYh4agsUbenKZxyV6SJvpv_q34PnqZtBft7KMi9Yl6cNmu78DrhCJkfgW4iHTh0R53SOXZcagw4Iv73GmkuQdFKPJPGWbd8-8V6rar6-o2PtNqWqn3s0X-yRSvdjxzs1ds2sfsd0clnz-1346ssz2ewUjc/s1600/2-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivi3oYr4u-gIhsCPnVd7cmpe_vjOGbhpb30Z8ofPqiH0SktSz3zfRgqbzE4bBd0bVvTYlpVqk68BLVielyUmdND_3AALje9LTc6rJZ6foXDHZipkf15z9DeSAkCg5fkJANNx-IASxT_s57l9qSQEsSN3VVBhl2nepm15HxEaLDuXnNlgTSqnGNXsJ9G-4/s1600/2-2.png",
    },
    chapters: ["Laws of Motion"],
    topics: [
      "Applications of Newton's Laws",
      "Problems involving friction, inclined plane, and elevators",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgltNloFKnXK_lXjluBhke8k1IlTGmYW15Lrzuq-fSln6YOT2V-xQvJWppeumfWXHNvWApows6lytotCKAv8c66Dr1pwgDAFeGmaGZBlsZSOPx7ihC6doW0tmI19pmK-FCNMT84unlgp01unOW_PdmR5Jmez0JBvomCL_-PG6nTGp_goqUv3y4_U_XTecY/s1600/3-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIOtlCPQtr9hext3llJH-1CQtnIIR-zKV3Te6lS-9umj69KEFfDH3NtN8T-cseiZQ64hFPPsUD1zBWjKnKnOroSrYRIBoDpcPLPY5oYTg46nG3CLjFSRCEKRMKsagxWOulDDMPQUpjo4z4O6sbdPgmgnwezWylpH8PEgloNhQP-HbVYwd3jrmkyUtOyKg/s1600/3-2.jpg",
    },
    chapters: ["Dual Nature of Radiation and Matter"],
    topics: ["Photoelectric Effect"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBF_O48mjs11cuE97at8eYD3Dlw_UZFf5cgWMx_9Qr50NI95vd33H2AsV6lSQdKgeObqmv-X6qxcrfFfYKkvXTMHIgoK-WbgOZsa0FnQtKDBUkd22RYgvGm69gUjprUROQ2mRvum3IcCghSIe-htt0fFAIhK4wEprjWBEBYAI-krnbsyiqmQMm3H2D7mQ/s1600/4-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4MdeOUvCzALdqbUve-51LX1N9-3hX4fUP7SwDVay08X3g2xuRVMcSmJkEDOjHMpUacmrZbzkWxKk6oeAcaTeloOvKZDC-MowNUXcJcypyCZsBd2T6A6AHWHopcL5D06Qv1sboTSvvRR24iNaBMKB6ZMhVEt5WEqVgckA8WbX8-chzwUwAvyoqVoGRyQ8/s1600/4-2.jpg",
    },
    chapters: ["Gravitation"],
    topics: [
      "Gravitational field and potential due to a point mass, variation of g with altitude and depth",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj54YmVaW7TC7pOhP12QsqG8H0DkUKMnZlHKYOeyHxlrJqnt3mt8d_GxxYk4hT_20ju57MnmxRaMFITDUdebVUv_TaKb9FIaLStzXzFgA_z84EbdVRzZ2WVSjPPazB27iV6alMhaGFGpHSXIUE7FXAc3PoRBCnuE0l_AFykzTf0aM_2zBl2Gq5qbM0ZvGI/s1600/5-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6ZPmE5uNB48VL6faLQSspza-pA_UWU04ZUAsbE48JlqOeyLp08k8rkTPcf4qfeVr_LFc4e32cS2ibrcTO98g3YQ130Q3CZZxaJqG6MOphBYAI69LZQMYkWkJNtwcbw-KNVX9VuqGE5njEZRnyTaQnIssUrBqi_ylbEXebVRSoIv_Ruzr4TU8J11_MYZg/s1600/5-2.jpg",
    },
    chapters: ["Mechanical Properties of Solids"],
    topics: [
      "Elastic behavior, Hooke's law, stress, and strain",
      "Elasticity and elastic constants, stress-strain curve",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOPgs-9I0ENPggz55O4BW5kkqwY4r8S923l_TA3013qpuN8JrrUXxHIJNUl2ycIMO-jEUQv3_8R4aIW3YtT4Ky8dL23QHZDV4hTqgU1XjeDlxryIzi4_hfkz3zUW-HKs_OffQxtpZGMNRqQSTzWrNFIRUhYYGmiy1taPcb81kPVZDfKVvozCelq9f0Zp4/s1600/6-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM0ofCaDG2hoZ66EoeF2fUgiWFgWW13bjszi-CLuA88Fqv8T80jv3aAMmbH5ptuVd2jThYQ-or9XQGv0_dbwssIdwNXkE9Rnd9Z7bYaPkkCNPG3P9CAg7Wij_J5L_2j0MSAwPnD0b5FGFMyQwCRT2KK-y2Ns8Ny1SG4gLTSjqqIr389tBhGfFK6sqC06s/s1600/6-2.jpg",
    },
    chapters: ["Thermodynamics"],
    topics: ["Heat, work, and internal energy"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVj4ctKSxggnIZZe-sOyjEU8gRtyazqMKgslpr-MYc1Sc_GDDRqmgbgQkc8kUxyORkJ0mE5ylL8j97VK_fZaMcI6HkTHjd7S4jBjfnxIyoEsmPhtNuokjMjp_Qi-BhWOWg8pLG5E-EhZ1gVR8lmwrehD_thYQJsTGdpS-hmlkepuR6rZ822KYWWsWvsfY/s1600/7-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTO-rUGVCc-Nz46V8u10wXrXc0d_eu67Btmr0jRGQ9FDZoyINStQLzBhdLkWviZz6nZo10zg1INyQJSNJdBXqmH7ADL-MT1IoJGhVQbHLmxYpxrWNvHlgqNkXif-Yn5BsjjQK_r9OwM3ufC4F9E1-pBmlbbfrbOWbC1wVuRBT3-TCdKFMk-IKkaaMft4I/s1600/7-2.jpg",
    },
    chapters: ["Communication Systems"],
    topics: ["Amplitude Modulation (AM)"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiONb5D3KQuFZ-SWkgox_0KFZg3aSnXthSmZMn76PITLnoTsJban261hXRgiFqUfFFqoTBIDhm3LkuJGIQB8ZYEE2po85vyK5BgrMZFXxiu8mWc-JK88veDVNsjcfCLS6527sltfH6ePonU6jXQVBzKdPZzel0hBVuj9ZAy8F-oxDJ0NllWsciHFQymhiA/s1600/8-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvp-Y3A1E8uTsXiIaxe8hkSwaeK1dlJjrZcYgId_CoTKBUipwmIKzrMwMWfnPEL8u_jaRNJ2xHd5fcbpwAjRJ0k8gEHPsaw78Qg--QudQHSPBFHf1Ntd4Uvw0UvXiAjUC3SHYraFX_CYYapgDVvBejdXQmFA9sLc9XIX3Q9RgPIsCk9SodqT6UClwcI9s/s1600/8-2.jpg",
    },
    chapters: ["Laws of Motion"],
    topics: ["Friction, pulleys, and inclined planes"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTrw7ks6vfhJLLlv3WWuVs8AlsTBK3KmNkZMvrDnQ4pckPv30fZRa34jpZSuneFepzEjXGH7BvSYZolg1jmtzH1eCaUN3TaL-M0FPpeTQNLDB3CNoxchXspKl-us_IJ2vPKLYhSWvE8Dji0fU-QHSLrMNt6IQ8Xj1iYvtKnnDgTtxTo8b1JZkGPdQ8ScM/s1600/9-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghPcmJpCBf2OWwojQDw_XpUZLo9dP980qr867kxqoibKBrR1JUwWR-c1QLYqMp-cpozjPpuVTJhMsAfNL_5emFpuIyK2GmKv1x3pFpoo49cnU-emDqETy6wUFweTo2ZYNkS7f5LBlkR8pSbz8bJWHMEa2JMwC8SnMqRoo6i-lqTQd83N2Jz_y45I-XdDY/s1600/9-2.jpg",
    },
    chapters: ["Semiconductor"],
    topics: ["Semiconductor diodes, photodiodes, p-n junctions"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFkVMG6CAC8klLU_smGfYxZW5gE1_ueJF98szRqj-xg-_WL05rBl8fjoa7GNB4UnIi7-7Mp3lPiViFDIMkX5WED1APV0UuXRPXm9U9eq_eON_XEuSZSBu_6VY5JONBX474LclieLV8rBVB4V-cjhZPH9uIF_bdea_jrr0oirX0g2tTacsg6gpr-HLb1zE/s1600/10-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRePAxTQXW_8592D8eC7Rx51Nut5QOJUyzfcVvE_phzVxG33pG4p5BNVK2A7V-OLUdKCBzfhT234m0uPi8mrtIneqoNEv0Nqh7q1t_rrfBrqHwdlpUN_xz4dZ8a9f8qQHMf4uFpoQR_KuCJK7BAgkISCziLAFJjn4LDoZQhaoWcAOLGiLNT7pzUoHqcuw/s1600/10-2.jpg",
    },
    chapters: ["Electromagnetic Waves"],
    topics: ["Characteristics and properties of electromagnetic waves"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrkARNfsUeUzi04rGEnNJoZfkwTRtCTv--9bCagFhnKo1dpGnsZUBA5Cyz9jCiGDoDn5uAs7_r-HsvMPYjpWtFmtjY-PPAzclFudBXNDEQE5Qn1D3XWTzD5kzJ9Av4v-3oKWqM46nWK-ZwZDcXXDhJhBZYMIGADh1E8-0rhQJ8h9twR_hudLamm-v5VX0/s1600/11-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ77jj9GoH08dP8my4AzGCoer9QgtibuLpcCjsnFaEiVhZfYpW20wfpdeuz3sm49nZh6KpJhCoSvRSQSbtw40XHrnPBEiVV3tyQkP4RcO6mKh3QabuDQ0Jo9FUgNMHJtm0B6zlu0WrRKpSmehTBOX1JhcdanmIS_nz2CHK1AT-ZssgGux21mSiYGHY-3A/s1600/11-2.jpg",
    },
    chapters: ["Moving Charges and Magnetism"],
    topics: [
      "Magnetic field due to a current-carrying circular loop, Biot-Savart law",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikYGF7JcJsY_TYUT939I0X59hUIuHBnGIwdjOaL9fSMUYcu5rBHu2uBaWYAWToB38YLC6WsHMe3kwdzBtjERzUVGLrlSvd33snT0dznW3wt45BKPvvJy-3M5jcy27VkJe9QDb60x4NWQ9xjwqcJSr4oACuYJKV06CtrWwmp0QErkeeM92MRqzLdWHyIaI/s1600/12-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6ABJgRKThmxQwdDUcnvEn5IZ2DkhpSg8LwNyjPN56PEzUIS_WsmIrWTWg8Xsg1nK7v3amtiloTT139lJSfFjjrXDianYM7bn-ZmCB7wVwxwHaItY1uOWYaIvPkgpx4ISk5xt6XEC3LhSAEwmemdAzNWREfkWk1sLDAjbFooxPsnVX6MqxOirbfhGx0mE/s1600/12-2.jpg",
    },
    chapters: ["Waves"],
    topics: ["Types of waves, wave parameters, wave equation"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpLop6W0z5RgQRGYTvEo406XFplG_NfzyUzWuC-rfxLLO0zQmqPT417Xi8_SwJ0gyN96nHbYFAwGg7AbsKEKz3lEcCM2zzaGw3m4jqOnQwaoTW2-vXnfWmZo0qA_v-INAcp3nFCzU_4J4hEy1y8bbOCim9CH8nfYS63Mqy20zxf0040S4sWAY3s8FQQWI/s1600/13-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIYrM-sgRJ16-XlSLbLh7HfMgE9af19JWQSGaVpjMfv3Q-54rJGwIXMuaixX5ZAvuCDBm7ToY2I64ykle181QVOp2kFU1Ot36GXnpAbvVeeSXdno3qxR0fxhv08IDPCulRjmXybZ-mRz-zZa2iFCfLnzSDyZ3nrBaWY7e7U9dSXbHZupBRC6OElaFDPvM/s1600/13-2.jpg",
    },
    chapters: ["Current Electricity"],
    topics: [
      "Circuit Theory - Series and Parallel Circuits, Ohm's Law, Kirchhoff's Laws",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhImRQOcO_ML9lxXAZ40lFvKbRKQV9xan_YULPzsmZvA1B0dHrLn41acjwTl567E1g1lAUhDqS5x-JHrhTw-z9tkvWtI1wpuFkmYefvBzRgO_bdjU5x41dThULAoyM-jFKszDgQKAwPdY9JAr2tRs605uqjOJLAAve9kmArBBFH_3Ate-i4ekxeTl44U5A/s1600/14-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMJpIhIJxOjlORqX5wiP7_Q48yn_dXcmGCZWd6RvL-hM0OG7MmdPUk5-_go5i_HFKmAWCPcbguc3JTHwGEwlAxW_Udj62oq3ExxEDkOmSMOt59U3kyVprDzUdWIpgbzzLsEitKkq4EagqPCxcNJ4ggwn5g4M7r_QxVcgkoPybwCf6_91HjGA4YQTyDgN8/s1600/14-2.jpg",
    },
    chapters: ["Ray Optics and Optical Instruments"],
    topics: [
      " Reflection and Refraction of Light - Brewster's Law and Polarization",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi28-R-oexPdyNF_kMvCWZIc1BsJtAwHKKWM9SF2ZMmFXFPekfa3xNZC9vt0aKlxHWP1fbyR4hcDqHuPbOGDxy4vAW1aZ1RgVgqPlsBaCYVoWn_Wg1ugXKjYhukUCVqydrSGsfgdhPFLIqSi4Ea97SBMgXTwDXk7FV8kI1j44lMizNt5NoPo14baelY3RQ/s1600/15-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZp1BUs5dJZ0QR74UmPrOD2VXnwFACXIT2fws0fpGubXyojlwdOWe6yu4V9zAjkgWVLr_tZjVTDazuXJmjc_41Jz13-sfENGLfT2VHrgfGqS6gmswt0SGRm0TGSBZxdApRXV3bteORc18krLboOTA6rmEvJZPLP0v080EKwGmXL9h2mhRluW-QM4wFVKQ/s1600/15-2.jpg",
    },
    chapters: ["Electrostatics"],
    topics: [
      "Electric Charges and Fields - Coulomb's Law, Electric Field Intensity",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3tpPeHmhCs3A1h5npc8XeMQ9Dpl-yIyDWFqIhYxffVitqvbaILYEzNoJ8L1H06hkAZq7fujhD3qDdFbcy-MrsrTFuYCjtR4C9m2Dw2L7IhLDhfkJjPF8xgptd0d08LdWG0Tj8PD92g5FaIyBVIiJxUnsetpfShSGWToBCGsAz1v5Zl2APNOZy9giWCRc/s1600/16-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZqqSKzaazUWIEMRFzVceh5H2ziNT9NJbrrp79O5W_yqeri-lr3f7NDi4DiKTvHndGaTRveuHGVw3L0rUv6YJcIhBfEj1TIIAh7zGLR1kpjyas_0tPkIZ2LNgiB8IcYwtrshuv9IWNRSRf5rV05aUve0v6k_lZHIylPO0w_R2ZGWG9Lk2BlM1Z3bOMXi4/s1600/16-2.jpg",
    },
    chapters: ["Nuclei"],
    topics: ["Radioactivity, Alpha, Beta and Gamma Decay, Nuclear Reactions"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6bbEJiQyuEKiAvXi_YfOx4mkPqfALkP2oNb8J10_kecsSppmi924v3AfIN7HXDuS3PLNCkekTuPvHyfCPW4-bOtIDF9lZ6crJ6ROksVwpFMLYVu0UWq0_TyHL3YpTtUZrtSCFIIVXw3UdExbal59AVJednySFYt9FMu1-HYjmHvTeQMSHT9pvG9ZxvgM/s1600/17-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMy9_BEEkSelvSAXwHPoT-X6Fw5TmV89YfjAUkDcLAKAHd3AEmde6R02DW39hZi1Uoj28LX3inBAUxmcnl2aUtIINhU4bYqdIEBUyi4sPL_dDysNUDxt_osgEFqZxWURUSFmpbFZUSPMm3L9UMXv4ytKjFDJ85cIZhudsFgs9ZLdr-dUNtnqan7SGo9EI/s1600/17-2.jpg",
    },
    chapters: ["Thermodynamics"],
    topics: ["Kinetic Theory, Gas Laws, Thermodynamic Processes"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL3VGA7GUyn8WoA5XurMK7_PwfLf6kTuhZcOeRwF_getgEFWWF2oBZN-R0fJvxJs5TQ9CMV_UZrZvP6rAcd-_5S6v7ELi9WmhUyyhly-koAaEUj7qKm-4EBxVFIdNxfFZKLFx81p-miaD_VGzwTC1jKf2cy7S8_HeE0Sz6gAsLeh2INczJXo5AuSJVGBs/s1600/18-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgL3sQ9CaFUTsFFaYvdHbDrKuzOy5Tah2W0nq3NEisZfUgLzpLYuzBZ1U8ZMruwlpMUv-UUk4WuDxltQdQ7pnq4PIkEfrTV_fuPJ3E5_0h8S3RVSB2C8XjKiWzplwUEWchCy9xiECWSfOBSehSC4cCIM4iN6oxRA9CiJ1x4c9IE0flSlIcTNR1CYrujCNg/s1600/18-2.jpg",
    },
    chapters: ["Motion in a Plane"],
    topics: ["Projectile Motion, Kinematics of Circular Motion"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnYFkBFtMAITYBN0GRxr_asR8rWXDSDESU0b4ig0JbZrxS_TAx2fWw-PUoycxwfIHF3MkVo6CXImfvvintTaHAzjKQDuwEi7jwxE7n1qEsNzUvYfOdN062LGGbuMsMpLjP_IAdK9O5KDZRQNA6SFehZw6m6TmL7I0rTQ0QzKEIQOac0UqnAjgBvhydTGc/s1600/19-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0xuYhWo0lT8mgepMaY9MCsAHEO6W90twDu3mM4QQJXvvFEQdYh9HhvhkQ5FkGUWhjhMBJJLSxrBGs9jVxf0JB1jx9VIfOGhYYxpQZzt6j9QCAOU8VRmbMYdW_4eLsMw25Ztt1TNSZ82kFfvmJ91AOxekFHwq346XWnOGb4hJYHrBmKxYZQQQ8p9yuiLk/s1600/19-2.jpg",
    },
    chapters: ["Electromagnetic Induction"],
    topics: [
      " Faraday's Law of Electromagnetic Induction, Lenz's Law, Induced EMF",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZv_3lHkVvHrCIx8xb13YNVoZjXFv1rn8Q_WeM1E_LxJSxlCjypmiUg7fhw6yth1ek30RVUNDSKdXBQQzWaFSHnZwkhZ7nQ2rW0LBrBHPOhwuEmKUkdk9un5CXK75SDx7nbXcJxR_Z3w5uth6hd4s6uQ5aMzDfTfGfxfIekin9YToZSClaySCE1ZiLyeU/s1600/20-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKS92Ml-jpU1GQwj58mwacUREcHpNSo9I7VxmZckxZooWWB3EB059uAcHsC0-MmGAyDSK8k0qxPryEUm3SfZ3SZeYtOlrWmaz9MtGo1Sp_mXU8eZedANnOV6Hhea1SqRJoRIhUyIc5gryyAfqcwl3cGhHOqz9NTSqPGfytFOaNWmmf1H2gag_qL0ADWaE/s1600/20-2.jpg",
    },
    chapters: ["Unit and Dimensions"],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjn3OkwEryWrFzAiEG25trTfiNtQpC6Vv0LwX578tnHoixYSxN70vLabYYSnSc-fTuIb5VkEDulecrwe8As_Hto8fRJQwyzTMjmqOecIwaZvRwUckPiQdUtS0eIb9SfIOgO5o8ru2_6tg4j4ILDHpD9i9M_1uaT9xOjarMsQCyXILFaKd91rd15WnD82KI/s1600/21-1.jpg",
    options: [],
    correctAnswer: 40,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFP5893Hy1u_KSrJyimcKHNnmhvD0F_8KnhdiwOfuJIiY6Ie6dgBSN_vVU9JL9Hu2Tfu3ElONMOb0u_Pvmj7bGmi_BaDdBNdrYtcQdSVON_Ts28ACJWyUw7rXhznvwSemTRCo26RllyieQ0yYCgG96dq4VtP0iBw2ykdn992ikiqq1pNtut2cV7IdEuo8/s1600/21-2.jpg",
    },
    chapters: ["Laws of Motion"],
    topics: ["Newton's Laws, Motion under a Constant Force, Kinematics"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbBSnaZCkwWcwqb2b1whxkoTozhGC99h8q8RT9VH1_4vOlIcQWLuxHEVaiwTGRgmxK1695nJitMzypxxkz79w3XXxPQrUqWQ9i6Ntka0C1f6FjCJjZiyubuTArU4GOfZYZ-pjU52vtVNInS1E_qmIHQMHa0sYVNHLqx9y1TM5OVHzRDVmwmI3IiJj5wLg/s1600/22-1.jpg",
    options: [],
    correctAnswer: 5,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXF3ZsRXkHvqwAnq3yADXYMDOt5aXaXwRd21c41NOgsxDSW1JC2xl4pEdrHU5SnpXqK7FmkZdybVerD3MF0-6WqWgTztTzaL9XwXQqHdldO_NnkhMGo_V2DdgX4GN2nayWqlI2AXnrdJWFgxLbAeq435ii1rUIcui-DTN7418A7cNmt8RiRTaCBYgdkfA/s1600/22-2.jpg",
    },
    chapters: ["Oscillations"],
    topics: [
      "Simple Harmonic Motion (SHM), Energy in SHM, Oscillations due to a Spring",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZclI912Cbz-1fBZNPSkVROr9jmzhBImV9a-9H_Pgp6_HjesNPzVUpgsQG8hfh90Euc7XR6nNHplMWQyk7J1QG_zA38ZcMKTHD9M-cn2b9k0uKsUsYbk2HmAfBbCFNoXmyIDhtv8gGgCQBRTiOgsWwi80DLyHyV8ijjoPlonOyKgHlXPVitAocb9Q_8IY/s1600/23-1.jpg",
    options: [],
    correctAnswer: 12,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUhJQ2Y2IRFEHz7zTNuC26nbmjn_WFaOQsIOKLhk1MFtqpu91vog41i9jc4C4bVDD1XhQtzIVn_Lbn_YAvBRwCYtssuLbToXU7WlO7IBawsKR8tn6B5bVfX4PR96ELooxm4Lj9p07Bz5xVvAin0vmP4qSe-yQjlpila6cn_IuQmJCgkcKymxoeNWfvoeQ/s1600/23-2.jpg",
    },
    chapters: ["Thermal Properties of Matter"],
    topics: [" Heat Transfer, Expansion of Solids, Liquids, and Gases"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeXr0cYo-QfNVsBhK6Co-tvosVBiaQzf0Zp_SjFgrcFbGbxmR7_bHNqgoaASMtqxMiZ3GILpWcmS2ZW7JtMcXSVQS-hJxZ2NV9jOS53OfoBiV0m_WluBvb6J8vTy-sxKr_W0Mn4IKaQUUiAHJcoSgA1TF2xPK0mPPt2AA_eTBtc-v1eofrX2f20AbyK_4/s1600/24-1.jpg",
    options: [],
    correctAnswer: 10,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeMAYhddtra0kYVKlWtOr5nr_gvVQagSgFvoSRY9J0KBU39zBS4UGiMFbDoN-gtsFz3eBvISMNexrom-p-VAMbqJVc5kEEoEvCmdAxsMMisvFRaibyIlUUPdeCwCSTsN1JMUo-YdAy-NXIf_DL2fkNLWtJGTr6EhVygHBM-A_573_A8PeZrxH_eDyA_vE/s1600/24-2.jpg",
    },
    chapters: ["Alternating Current"],
    topics: ["AC Circuits, Resonance, Quality Factor, Bandwidth"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBx4Xr_vrHyxTmRGSN9OyVUH-dJ9mhNbeTk6CkeVc0jLJLE0usD6OzNxx6MIN6VfWPQqQvGpsjpUBuoGOkBl0rz2USLjcbjaUyvzAsLMDLMooju-flfHlD2yXuap9JLK3GGEfIaE8-whw7PH5EzUzjRKmOdPb-MU6HM1s0vtBeZXs2udoDrzrnXX02I_U/s1600/25-1.jpg",
    options: [],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDiVCtCut2Ns2WIC6vPiqc-XnIMi_F2u2Vq3sxhekd0xuEYNXXpvo-Amsr-c7TR2vtbW-JijzyThG-JraIf5uWZqbs622i6OGTp7LCGP_oTqtNDlUZA-sTeH9hunmWzv-HZIQxXIrNGwJmbMvSkgf1zTnPKMLUoMj6goLqQiFuzXPV0DWGivk5DCpU5mY/s1600/25-2.jpg",
    },
    chapters: ["Current Electricity"],
    topics: [
      "Conductors and Insulators, Resistance and Resistivity, Ohm's Law",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2__ABFDrWbErv8KNYwMnpWBu6k_c0SgQaf4zeaBTByx0U7wMgasq2x6awrM2SXnpcNEki4sRv_iFtb_woG8xLRrKvBXntbBVhgtJHLjaQHKNCM6NAsesO3F3RufjFSbXqC59ZjM0TrfcEW5i4UAnUZXPE7M0sSXj1V9OVKHjTgJOQyM-7ZgSguSa8JfQ/s1600/26-1.jpg",
    options: [],
    correctAnswer: 120,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg51eZzocAxnIP_NS8iCEWx_uuG4P0Pm-utkSXDqFJJx9NfN3QhKO9t92KtrSiifBo-G-sblCy3B0xaJq3RVdC8FJqF_b7ildR0SMcPj2fyIqF9jgN5oDD9Wo_BTh9smAwMFjnWjiZA_us0phOmgvfb0aTbLaqM52y6w2kLvcfI5uiXPMzWbrSjlP4-GEc/s1600/26-2.jpg",
    },
    chapters: ["Ray Optics and Optical Instruments"],
    topics: ["Lenses, Lens Formula, Lens Combinations"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZaz0hQGry4uZ4V0XtKsYcyrxxSAUfUD2NWqrT70iSywPaB0ZHF_nqLZ1BU_Wq6anTfYvLhIW74EnId8gJaUTtQO9eu4IbTIZxFxAIERCM__ZoIJMQ-N8rPs5cBzJbeSTNaz-glKOnLK1hERLEWSGlAHW0CTyml9iJ_7ZlvTIEzpZj7few3wWoD5J4t94/s1600/27-1.jpg",
    options: [],
    correctAnswer: 110,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghFTXMHTyGoVllH9_zeag9O9ZUDNtJYA6cl5SWPLThECHqzrEgdjtjKN9m5plBbhXTBS6UGhxjLAltQRCDq2f_MJSbNAjT33wsW-PglVD6aEMMga_k3Zy70iSbeu22ogrbfgL9d8ZZsAKDlw9FgYSW6oDEwODM56O1QEQSrf-kYe861SnOMOLJzBdoh_A/s1600/27-2.jpg",
    },
    chapters: ["Rotational Motion"],
    topics: [
      "Dynamics of Rotational Motion, Moment of Inertia, Radius of Gyration",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFqrFUq6EuQVCwsCfLUhGXt-6z1OIl7VMBfHlnuJZNVLto_GzAb4U1gUssmKUYxQ-Sg1oic0s9y4VjIHgIAepE6D5ICYEHYybW_Fk3jZfq3pgsk0bYwJmsBevcq7ZU2Ogx2FJ4Oc_DqWX6qmJaDxYNq5xrqw_fYvv7o8cItI7TEDSFM1FzMFOmxknsPLg/s1600/28-1.jpg",
    options: [],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggxnf98dpGqHkMmtVEnPVp9xbo6Jqy22t0A4rq4jMubFANbul5RKWPmDpMlu2QywFamj6X_L6ecei9Ud8_zdGjvnahVY7neXAb8iahywhihOYCfto6QHg43-VFcfMfgLwhF1cAy-zup2hhZ431ZGvC2HzlbtLao7JRa2tHJj8_QCYQl12vWvfDg1WucEs/s1600/28-2.jpg",
    },
    chapters: ["Vector Algebra"],
    topics: ["Vectors, Scalar and Vector Products, Orthogonality of Vectors"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhR5E2ez0YVQuUh0r4jCPX6m2HhgAGpxfPfS4rWt-vMYcAOZTzq2TkMLaX6CWoyg6BMomUedJF7p8IoYaK3HOSzHpQgblIV77wER13E2zjXL-tasxBw57OAbgFnE_wYCt5-dSB1wpOGPg8cdo1KqJ8eAKessIb662Z_chGB-HUctuog4-b_EFnBNlmEf08/s1600/29-1.jpg",
    options: [],
    correctAnswer: 11,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgISH_HQgKqbUfts2S6bS5sWMP-3XGglrKpjCicty0ss28uIPD9bwuOzHYynD8BOyfYUxBTdATT4GQjFQSVBxvx25DPSsZLxMgPp_FXsS6wlKZCVl4kHnRMI96V0rxdogGxDXRlB2GTG2CC5hpGNBT7a0WgQJ-fqfp4bfbbj2u4L5OIJFTeEpHpHunlGQk/s1600/29-2.jpg",
    },
    chapters: ["Nuclei"],
    topics: ["Nuclear Structure, Atomic Models, Nuclear Density"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Physics",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHJRwvwy3DFVQHBrsGMR9T8EBmuWbwI9-kI4rqFOB3CzUn-XyvCDDOfk9liaJPVnRWZlsh3mfcFD6d1o1Q7YIO2iNUny0nMgR-5S6AwtNTIVA5z6tz3CGYr2ksjysRB9Q19wGeg42rdkbtsAcBzB3qq4P0YNF2u4C4XY9BVAH3WduhPRPWgbo5LhKSbZQ/s1600/30-1.jpg",
    options: [],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifqsbJyKiFvX2pHGbbABeD0L_GS-bXEUYVss2lFODiAizl12vtPC6E3QOgpItTVhpxWpAMXpkyj5LI3Jgf3bq3cLsiR1HXOAy6bEvKFJpsoWNLvdwTa2X7cb7saOP36N4xfRjc9B8WiW1fD-ROQa6oSQp3oCuJTjqxw2eKrfnvON7xe-Amfu5SHKt9LcQ/s1600/30-2.jpg",
    },
    chapters: ["Electromagnetic Waves"],
    topics: [
      "Electric and Magnetic Fields, Lorentz Force, Charged Particle Motion",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5QbPTtHGOiehtb3G7LMKskmGfVnZvPlLWaKaFV3TXxUACgIIZxFdUiH8ZmmlkWjK5DYRR_zliMB7UkEDdvAuHFaSQWNIve1QKzOKYcVhLMz8CsAHRas9-kkGj8NCVXYpBgp0V0gqQw8yUfU3ICksAbSz8AP_FV9JfR8pXBj9LryNdSZv5A8esg6uU0XM/s1600/31-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1fOC3ldjxNeoVKiizJpvy_p3g6o9TMPU1Vj5guUN0wGl_5yd3484ML_pcO3hHXHKAFGVEMwJeYo4JhUG_hXMrzsTHTlHQ0N30h2sfdc1bZ3TmM6dyKj9hpo395zjEWKBx0okjq2c-jsuxaLHI4CLpw2QjXdd7pJnG1LAsvevHhYcaCBeU_D2PB97XCl0/s1600/31-2.jpg",
    },
    chapters: ["Aldehydes, Ketones and Carboxylic Acids"],
    topics: ["Reactions of Carboxylic Acids, Lactones"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRJcL5jZ3GhhpA3-Yo6Hv3FgxYJ6YUyc2kthCDNk8hCliq9lwjpyi4xzScbG-0J94xAXQHz7eLzLo21dypJnJjqDHWDV9YOkz2DxTUJ4tsDfOcAx5Tu-3wOidTWchY0UulSNrSAgo2fxrqJgf7vgArW2pKkGSe8RqXYTccsGIWpIZc6_K7viKM3vmZXIE/s1600/32-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRkJIsnppHEYJvbA85a880zbPVodVEukyM578_rtqBYi0hSv0LIX_WpzlhV4RFrZtITMHgC4H1TbUNp9CVDU63Jhooj7FnJhDgPPggq-OhoJTuIYlmMJHScGKOExU7CepJEPMGzZ4NkyT1-EftpDPdT8vxMj0lmnIYEfzzST00gMHiW5iqCAcq89Cps1E/s1600/32-2.jpg",
    },
    chapters: ["Haloalkanes and Haloarenes"],
    topics: ["Nucleophilic Substitution Reactions, SN1 and SN2 Mechanisms"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwm6N6FT1PMw6wJsLdoT1v15VsiG1Az-zc4T9cA5qfh7TKS81uCcqa_5l7bAubGorUv6a0CY5YVjypR3Hm5GR7mFMsFBFD8X-kG4yu5eMpHqqg_6mngda_bL7OjvJ6wrueKsOEL3tlsq9xdTh18wFKPvy_DrtWqiw0S-EHMacbSu5TKtTJ8jMFOzUpwXY/s1600/33-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSO-H6Npr4y_ce9ekBK86OcfTLgxyXfoSuv7nOHaIu0PrU38qCiZPXWVDoB_rgK8k_0P9vQWeahCUdPOyIYAZhgwxzy7rmR3RF0qDO4wDv1sDsr9LukzUuFiwNAstInDBgmhiPvJYhSeT-7E5KhuQlND7JmOFKGqlA9tPkVK6t3I-wuoOKocbJ3zuqNjM/s1600/33-2.jpg",
    },
    chapters: ["Chemical Bonding and Molecular Structure"],
    topics: ["Ionic Bonding, Covalent Bonding, and Properties of Compounds"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNSt-0DTkOqX09vDSuM7YPO8SbpLTw77JMPuy4XwRHQiv9Nxu_bb6oMla4C0GyFpBnfKFjnziGLUNlUlmHHuEKMOYMTISHx3rt1hznKDJvavo2Vgr4lCwlwX2-VYm9f683_CDFGEDHonl9ATkaIHKgaxvNAz7VMW4wirEOSNTgR8kvi6X6g47Vfgg4jTY/s1600/34-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi5hzrL9VOLeLhUsFVlPtxQmOBfTLK2QBnp3x4Dh5jpY5uvTa9H5VALq4c7NTW4zwRkGDGQItUS3vkcx2Z1APzwuzzH6VjjQEVi_PqhHwjLPb-OH4mgC1bwEjFD0B6twiVp7-Y1r9IjRzd9CpEiEEWtdf0nfYI59PqEI1mVC-_nRcburA_7c9_pTkEudM/s1600/34-2.jpg",
    },
    chapters: ["Resonance"],
    topics: ["Resonance Structures, Stability of Resonance Structures"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvUFfpf0V8U3ovcD5cg4LXfk28Wj7yH38aKrzc1XGCGMv0ZREMKY284aExuSyBU0l8voaX3fsGIv9H5IWmY4ieP3aCNsNjvpyk1f27saR92gHsbSXXhy0dgetJ52uiRKMb2DnMnw0jiil55zChYrZtaypk4K6_r2-zFe0jRwXkxUvzDXMEfKdP5N7Udww/s1600/35-1..jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFsAjSramtYNYNSsivn6_Bgjx85YknqzAeFGSDuchEDNO9fzebleLzjYfCttOPDD_uNgiDtuxqMm8buYguUB3F_hQpGHmzHwDbPhGNOEmHdmdl1XTQgv5AcgWboDQsk7DjAeplQAemr9-tcYY-WS_IijPX_L02CeaLoBy9u990WMiwEG56jmKVFxkwEEE/s1600/35-2.jpg",
    },
    chapters: ["Coordination Compounds"],
    topics: [
      "Magnetic Properties of Transition Metal Complexes, Calculation of Magnetic Moment",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCHjut2XhJKfkLNQedz7YTlbHLmTfqaFXg25dmQA7Fyod3TALa49iAUnDRKFJqalP210E5sC_UtRHQN6yboCc7uo3vENAazYUfVUWwAar8YK-ocEVhlsYrAEeh3VVAnPVhcUwJyeAhLPbTrvY426CCX4FHa2VfNaK6fRSsWI6zRilapKCUYJ_ATFASnI4/s1600/36-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRNtsMecCTu4_lpJpv1VhOaDXxtxhIjh40VCSHXM76PLP_4UcEA0IcnPWd6lZYviJQlbDmW006TasdZ4nG_TqgQ_3hp9S3GSWslHl8WI7XT7fUph5X_Jxuw8nxoAL6xGEk7h9hjfzQ0D7ufaJXAzEsYMhaknNCat88i8I8BVjBl1sIc8-KR5ePYNbHc-g/s1600/36-2.jpg",
    },
    chapters: ["General Principles and Processes of Isolation of Elements"],
    topics: ["Metallurgical Processes, Furnaces used in Metallurgy"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiufbfvRTRTe1wPeB5X7rf2NzENdEJGW8dLotf__oEA2FzOfgrST52aTSz1mnFYl7ZRAY-M13gBS-VSS6YFqurBRH4sKDC4aRvePk7jo_CW7Lhpk2EFQFjU_nSU0hG1g4Icz9VDRnIehs3zJNQuEzl2boSZcDULIatJ2DY8kt5WfFQmHB9hz1EUV9d92T0/s1600/37-1.png",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnWMLNdlOSBtvcYyLHuVQXHBPPpRtd6teTTQvtUXIhKBqSfuN9v7yygI_rZYRg7adGwtuuWMxkR3njQmqYD5HSo-OrK3IVXvWfIzdzPn6TMZ8hOUggh4ehUOVWsnG41fudV-zpPWvVdpXATNdh7SE4exMVsPCov3gmD9UUGb2fuw37qeMa9cmLl7hRhsc/s1600/37-2.jpg",
    },
    chapters: ["Structure of Atom"],
    topics: ["X-ray Spectra, Moseley's Law"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiik4QZjb8f6VlWiYJmtXLmDOnXqphhXxZIAbRo1nvQFQ1XdK6JGNg_1D4L7GQcvCzHiUnK1jlHkF-h09zHsET8vi0DGyyt5cAjdJnFmd_JoAE-PuyzAeUJ1IAm4mQGRNhC2s_G8rZjb7BD7alvUE661R9IEHhmDgWSFqx1h7x4IEdMyCwYP180SGOWd_I/s1600/38-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6aa7TNJm1K3WqwM4mekwY2e_8JlEfjamGNY8KSAE1Ue9fLlp3An_5dxHFFGRDS19duRi6CKP1ssQLtoEgHqq1_r0bNTQ1o63Ibp0gw7iqurQLEq6zZpCXKu-w0gyQciBhfbYWCL5Yo6OIS9z-OJwIDSIzoXg9YahntAZ0GC2B35JMS07sPkQ9xb3mhFs/s1600/38-2.jpg",
    },
    chapters: ["P-Block Elements"],
    topics: ["Oxoacids of Phosphorus"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaTVHRt_L3gLoxgY7Ym4VntHy3EDhHHN6L3hSWBdvD3S3IpulWB1sF2ah5kOdxltXIP2zGM8ccIUF3MuD0-K_kztN5ohOp8pLqIjrSs6LqRuvG2ee0kqG-KhcEne4p4vzGh6iMBzEjLT8KzwnF6CBq3pw4soXfOtNjGW1Gd5ZzLhZI5aaFJHiqYjjDkZE/s1600/39-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHqPMNvLqseWn7-BhHx2ts3_d7m4MkFcRWTp0Aw2EiDrkSzwVcm4KApf6vZ8_UoRFc37C3_E9PATsWhhqZkOA9P6frx7onkNZiOWFSLCANx2pt_EPZnlF5BAscvWfG5nhZLczAFsAWR1mUxwilV8_BgnArLl7AG3BzoQk9D6sNHb3ouJpFeI9Y_91nT2Y/s1600/39-2.jpg",
    },
    chapters: ["Coordination Compounds"],
    topics: [
      "Werner’s Theory of Coordination Compounds, Primary and Secondary Valencies",
    ],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjL74X3Fi2ML4_zq-kPPTYjetgMpqp7e1HpsrFfh-9heqB-Tc87cTkp2Lk0f4niG633hAl0iRuh40h-qpICoClQH3kKm76iynjAF79Tzu9s2G3m4SzKec7o8YNMzxrh53GT0Eu4mGWMBMa862jBOSskai1lgOxJxQC52DA5jRHtJjp3Rt56c3nEc2PazOg/s1600/40-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzCrjpyncCKOyvXB0nHCBLWiFvjGIjaBHkWXg03q2pqLpbILsqWsrOinEyrAiljjStzL37NqXtjjomdcEOC9iFKlAk35LgOEyptmCgy8MiF4zV9r9f5jzmGjszsFR4fhESd9Uxwt9qOLYRp5wDc9pPYYD3QZR9o7Lbc0_wl9DjxJNtiLev3uHJ9Imb7Yo/s1600/40-2.jpg",
    },
    chapters: ["Qualitative Inorganic Analysis"],
    topics: ["Tests for Metal Ions, Dimethylglyoxime Test for Nickel"],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLifqNoTvy9IKqJxclUb5YuwX_Ti5rHKzmSpr3vZjEbQPGcBM9dNOezrAdisvWo6kIFTnBfopYfXhIY0sC-jaa3PEvGTuNOf13udlh33k7VagCkcIH2g7K7LH3jdLlsK_XTiVad95YLqwJ9_fVuSFxIudSV-rZuRyuJU3hVRN2PGg2SxwbbK7nT3kBm8A/s1600/41-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsWSiwGbG95xhJyeC8I-0jZVKrGi9vToLRBNg37SdhEQrighJPnHJrq1UyHaRimufgxfaoHJxNrrMeFDbyH4FRGB-VY6taer7WAnp6Yt6o60iaXXrMdB5kEHzQTR35rgW4fzqnelHZ5SY_x65Zc9xn5yUlpGVTl73ZTGNNBE_EawTdRp_-slf41Mj18xk/s1600/41-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCmwqeRwc8KNvzmCTXk6ilFRkJZNuZVFOK8LaNM1ZXEtycuZWIeP2gYlE_p4QM6ApeLXtQ12mk85chuLyTqckugZS8y3XUlGy7KH2745BAmpJ94RFVjaIuoaKLuzwYmRz6dEvb7k8U_i2d8NgiiGeD5c99tlmOiOpUCLGuR2QftXnhvEIINlp3eMFfQJA/s1600/42-1.png",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_aZV_E8KMKoqV53Z51cZS6GwqlgPBHM5eqv0mnvZqBHBDv1ypPZeRG_lAzV--4e_hZMZWNbk7QFZNE1xwTHvll3R5Wnpm-jhSlJLMkzfg4qJk8LexNYnefG4m0MQ7qkehnvRqmriETLEcK8iMOXyMFYhSD_QBvhgSbDlVwGP8R6UJYHoi9ZS_q4XftxU/s1600/42-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3RZxW7hMqHGmIHIQGqCQaHyBZLTIvsL9pSFRHnm_RPP-m0aoYak6mkICBzQUjfV01Xb_zNmgbp-KTdxZPQQEIS4SCAj9bY_mdzaxQK-aeA3YCBDG8Qnj_DL6cEjsI_1C4g2WyuEwxY62rBeCMotqFHpaTNphmJzrN4LPgitVWO8BVdxk9Y7dFxtNE9U4/s1600/43-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlsfNQUOtTTvNpqcWFUGrSPya4ykQeUJmHJDOrGOQuw_LhJSnA_kAVgMezDgT0bE7RhRnB246ypXdLUUwP6b2n62yK-G5XxJlpTbg-BjNgfkUe1AJVwjMKv5UDTVAXbmk3p-xYycHjYmP73KvWdm08UHeDEZRZ75ENpNvJBfLHIY3L5sMtJivLqv8t1wg/s1600/43-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEideXF703tUTFmsFzNIgMU4llu8UagUihDceYAbv9Pcs8gAIYX6Hd4NKtUib-z2B9e24LVe_Wt4a3yQpE99uj68qaPB3_wRYCG_UnTe4GDQMwCv92-dfoa2PldXvyShS-bkQ-A5G2mOrGzxe0f1RXiXXQr-fv1Q_7_0w5XMYrRw-6V0zl9oTZaxxcbekIA/s1600/44-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju4y5svJBgUCxR-HBESzPFTmNJwC-herHMm6tT6hCYOYyI6UtzrjdVqDEhRIoJYhgTXHtXMydqQ1SN93xJpRnM-qBEPtQKxvkjRji8Za32y4cS9847v7sEDvfIaVMZfml7EOYR5hFwSz-f5Rfutrl-GO_F_ybiZImv9BRft1ABDmgVQPYX9jtMS9Olx8U/s1600/44-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4caJI8KQkM6eppH6f9K8QQ9qxGlhAtZ4F8499L5E95h34_Da9ep-Ew7X16uxcLK5SnpZ1eIm9uh3SlQ7SL5wqqXQjnvjeDDEnuEyo6c9u3j7X9alowmakhjoNUTk0mhTl8Fx1E-pnFJ1bBG9npwsM8IpvbJR2QoV4HpA_btP6_cxGVxc3xPIb7qytbd8/s1600/45-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCkcBQK1WvLZ5RIpsFTPIDfszVTd6siFD4kXc2rX2hjq9LAV0ER8e1Cc0x6f3_JDZBsq02heCNrgBmBBayPW3FMfUbTmjXZX3MCWL9UliJCy0NerbV93K2bz57jQ2PDWuEy809GNYcwkFuoWnhZDg_2SBdXA600n2CFrBLy3mwAnXEMmd_gdpcU3J1W9c/s1600/45-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2tjFeRcvl8tFgCHGC-vwHakeEWQz_zIW3hyeRlVyVVhJaBLOcJ19exfBAFJB3lZSLtC5nCoqCfkkUVWmkFBAv_MJa-ICHdbh8A0-5zf1deOvmMoQcezOAHTom91NJJpjxJxLi2GAYWm3XqMt-wN8CEkrC2qldmyeFSnVO7XPFvkr33JeSRoTcWIXlMEE/s1600/46-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh46Kzw58WmrLx2GvlsMjLMN54wlnbMpo8dmqZeumpha4Wo55hnYXv8kWW2u_w2MXHZN-Af6ZZuS0FbajLBuxnjrLKha8O9Io1b6NdpdG8JT1mrX71vbFwxmYQt0SrcumU1Ug104Xr6ODHVLciKFDbPrh-DwtGS81Huw5HIe-FBhvT7wBNfF2FtDr5FkDk/s1600/46-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqa6LAxEWwCWDh8RGAq1LvupDXduR4NBJWQYZuZvSK8TJy6k9aiQP5rIIm9bM-VPRqWA6gF75kmQI09Z1QfgalJoZnGnzVKo-BAyvBgYplVHw_-arAjSeY6o0GXNl0diyrnFLKCl5wPa0YHqgOhvX6b9uhTBKct99-8x5SHgNZzk6Yb0hbqO7skQGYgns/s1600/47-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTMwCDGoPDoKMUjGFjkgMyr1tgRmCOFqtLoBuEU9jBSA1SkeCgbPagfKTUuFsUAd4UT_waX8p6RWb-iaz3vD_rlg3V6i-xJP2r8zMLcTxVyoIPpX_b4-NJq1jaP_7t-yrrluR4AMy4UzTpvMl3qFWmErta1H-pIbk6C0uhP9uHCuATSPi30V67YaMwGb4/s1600/47-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiktOxUYCbYmpgRRuLmC_ANTIgp8B2XaEMaNWCMZDBKrcDxSqKggNfYM1RXJp1pZNZ1rmRdMr93NW2sdPdukgONEyHZAj5nK6Njp_J-DlDRGnLzbPsqlfmpvmk9hZ5Kf54zuBcoVyMYzNlVSYCKQcBEh7SAEPZM9DRc4aTw77FwqBQ26nnT_nwWm-W23Zs/s1600/48-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi027D9DhBCOuoq4SFAmcXECTsjmSMh3a3yNnDg78Uvw3V1wzqjCpjh2nwTJpOgz1PT-bMPR_jaVEmMWWRpgOG86CEFoDN2kquZ_9yIA_EZSBvafTn6lWofsmeI8gFpRD62FyCG0k2wnCQL2S_1ngsmPcdtFa3IUT6D44A62xRoziBvXAjWJqvl01uI91g/s1600/48-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsu4DWrYmd2IXpa1p3EjMPQH4lWWyzYrwN6K6wEO5GcZ-1wWmJMLxpLarbJdsT7omTZ8a_xmYHTGa31X64s4Y1n2Ekp5baFgTZDO1ViEaqLGqLkL2CGNcD17SffKGhzjA0k6wcpS0JRzBBJuLJtbJX__ZV1ChjsNs3Gpsavw3uEPxWXT10oa2RYCTWYoY/s1600/49-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ8375Mnlx1BtoFSKeXdwgJto-vOS6BgY6YS8BMNEwN_Po76DhAFf7eMoEJtj-iI8ElRvHN8-npcdkoF_JoA1ZIuUsT7i18Kao3BnS8GjOApoTaC8EjANuycwPttlyBIZA88MPfl-IWo25HDSldR-NJ7i4NglCbJYml7al3XpHyDpK-mLc5kKktmxdyx0/s1600/49-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJL43A0djsIPl-VECLGUz3PwOqh7RjFW3Eg2_w7OWtc-EA3S5GuHy4LpW2Akmf2W-6xrfX88XoShKte4fMPYaVBCe6xcm39UJkzPVohVrqMNyOWo2R0TB-9fr8wz78wNtY5pqfyEeyCpDw8Odl5IMa-DkVNMOH8QUkQvHpeVvtmAnrikLBzIfV7WPbbIM/s1600/50-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgV4QBXfhJEm_iufrbN--cvCfu1n3H7YysDJEuF5csVTtjocyNqdATVRD-uh9RNZOcbIUrJPFSYAO6tjs_adcYy4ohtI6vucWwpGLCrfVVsg9yRrd1A56EocONWlfRsfok8vxmOO9YHIyfshMqu24vIwhpG8MuFPA5NvEbf3oqGd9cANZ7ILNMeCMAvA64/s1600/50-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjajCA-zD0w0RjOYITO7OQTLunqXtVtHmhV4Qx5YuYlDruGJmYs5P27Vx6-ePPZTO4StQ81bvE46oLLksyapZJTS5vn5FL_foezh1GQ7WefkTcVUbtCbiM6lwduIZa3W4CbYRBqlXewOONtX2Cxgwr0TgauYDcdLLihze_fpR986CniNaYNw0r4tJO5wmI/s1600/51-1.jpg",
    options: [],
    correctAnswer: 10,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-b5rIJcfr3_XwN9qalNQ40EHwivh9VFRKteosaetDGLv3AKEPrNaT2-c2FjHECr4Y7vZuqDL3ZJvAJ96iOsFtOr1RGS2Ir5xvUPWuZv8nUDpmfX18VWww6VfM_FLnIQcTTcNmcX_TcnIR_12-pDnV_5Vl1TyAfKNQDN5t-UxBXyZGQmeHOu3CgdKmKog/s1600/51-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzPvX4Fmmiry5aRhs0R4oodpEZZ5YGO7feJ9VgLiaFpZb5bBVFI4nFSa54qGKC1ootdBplxvgrdbE0aKdB68R0QoBjoUOLEAICOxNwGMu4RO0ezJV4-OCusoOC-WQWaH4AUqhLsZKBYlG1NcjyPk-iB8b1vARzuateq_8IRueH6WWt7MGnGJIX583AV10/s1600/52-1.jpg",
    options: [],
    correctAnswer: 180,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikFfO9T1oW9AMOyFE5jDSZsOuAXt_uqI3LzIg7dz17bLnqGQIle_shiIU1O8bS0tBVVxkWZOQwsiI_Y4VyiMJz7WWGIQJ7eFGVoBWN3lCiHF0XKbCDWGUcBnlSoddpGW8Ub5BROmzBc9naRPOgN2LQ0wb4GFaPFrli2Zte52h4_tVdoxpInpoctwMKexE/s1600/52-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEievlFYctnM-6t8xyIBwMntmUSz7WBVT_Riawiq2vH3yPk6tvA3u1Dgy5NUcJTaAApoHfJg0wbUlzoBL4ieFLKiFg8LLFac_uYVOsadyOiskaA0_nf_KWNpZf9mbEI-bczz3oOy7LnkqR4myaAdK1GIlO3AAoXfU4WUWPP7q46kzOAP4COsVaFo441d4Jg/s1600/53-1.jpg",
    options: [],
    correctAnswer: 492,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZWLI5OksdB4EUUZ2VvDp75aY7_BCF4HFjjDlu7uDf2JSLycPV67oCer8P56ZFqUFRm8qWIQo4geN5jz_t0b6-geg7U7sb49Bu1rzZu1Vm9xgTghx6kz9rzu_Tz0wCzHPHOmjI75mk4d5nlPLPad0MYg6CwHkXSdH9YUpRq8cI8LRMdzoR7UdXEBAxGa0/s1600/53-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVmzkWf64ikaNtqDYw61K9XNHqrBm6i11MSAduIszXoG-ceO07PL-jL258sLbIiFcBopFfMAmI8B5yuTD2HyiamM-ERyjg_K8GGujTIdDhh403zdtQYYD3dnPge3rdVztDPopzgBqUDl0BnbKos-dr3bIvHqxikfyUDcQs0XHqsuPgxyCyZ_pAp6PzpIE/s1600/54-1.jpg",
    options: [],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgri_ZW0bAJehjy4rD89crlApeOYYm4Q0zu0Fny_eSf3J3UP5GiIUV4Xicd6oCxTo1awyQRJ9EK4Ap7GoQ33jE0m2prmYtU_x_f2wKUlVOIg_odk7SCfFnHIGaH90JsN9XVjkvc6yeP3YrhGILVewll_lmgqUDhV6uWEMECK9xsJX98q3tC9pHpExUODA0/s1600/54-2.png",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTvXZXhfvfoUKJmoETTNneKbPhGiGNs5KtFLcAVZkR_sDmLfl-ZN72AKNst860lNe1KLX8Swk2x5XaqTAHB34jt0Oo7MN5d1_o6hGz06Mm01Nczvzeh0XCT1k6IUmySQqcC822o9T1R14N6Omw1462ATGmwMmCKXg9mqurGNUPJLNiQIpLMoYhdfmLbIU/s1600/55-1.jpg",
    options: [],
    correctAnswer: 917,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7uZYvRIr8PYzNUhQRKyUvrMw2q1EbPpZJhoURUJVE5QQYqLghsXBmIo64lWASR6u960U6Q4Sv4E8un_S9GmfZfGDlr9ANOUbTNGSXCHN0OJ4acqGImxlWZuVA_yEenM-9f-YQEM5PPhXM7MDABqzpVJ6wpEvRqLHZxYiZCUlN0zgc6nB7j9olVCcYocc/s1600/55-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYAMB6AK2_YwYgPS09A2cmuv4SI16Dx1D5p4kpSKR5-ZbYgpbpWnSjcf_5h0S7A6RhrMWvAtYx1IJ9mkh8dmvdjtA9Flh5-Zvk_sAzTN2_SY0SZaDbE1AqyynuEi58xBK8U3KskG0YfIAtMCpaxOzP3DpxQKP8mvzBs8Wi4lIDa290hA61S99atEy12E8/s1600/56-1.jpg",
    options: [],
    correctAnswer: 4,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZVaHa_9H1cA8RvUUKNh81I96nMvWxmFialQadbrt2p0MpycaHrtue4ydf1tMTaf5O74pxPMiTUQhk2RhH4PwcilMjnQYv7BseaURIlWfOX_eLkwzpNbTmkVbUzz0jgnYTxA9pEc1RXOiW6_p3uhN1M24obf-Xgl2_z8ffS-G1Ldk-mW-xNcN6GsLdjEo/s1600/56-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvaOpzw-Z-DhZIJWutjN-Or0ui9ieX7V5R_r5MJS_v8EQdBL8grX6x5goL555O3EVp_EHy0wpX4j5uVB7BvlxRtnvC-X1tozSy3lyX-paAn2mbRdFRyCKRu5utRk7YomhZNG4nUwuVliCwbUvPQBzSUE5S8Yk4nFseoT0LmlzlmbrNv7gqstN43Muz_u0/s1600/57-1.jpg",
    options: [],
    correctAnswer: 7,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaDLpJzFqJJrGKDE9jXgjAWyFXAJteUFO5_7jSb5lCQwy-ro-VwZFr-w7HvQYCQnqF368VNELeMm8wctqFFhABo-j-M3OdADM6HAgGjJK2h2laZ0McIBo8WZELJOm5nzltuS_PwSRzoQUn16aI01i3L7KCAbz23UT4PglYmzPXL3fzUsMILuA_nTNmxmM/s1600/57-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBJ8CGtdIqOcqxaPXo5gLbAaZce2kJJQF5uRaJIc0HAa7o_IHsbPT0Peso7canq3nXAB11kg3DLdHwhjvGMQIYojJd-iXCVIS44upvCkjRtNRahsHBQXuR4AVKnHO0wMiBdNUUwH1lwfA9bKKrAIpAmOVQt66H2SXzn3_d7lYquwKmxe4xlx2ulhgfjK8/s1600/58-1.jpg",
    options: [],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibb-RxyuqA05wKKce7fd9cJKfa5O9C47jsFxMslxynYjehJwPmud_n6HoM1Ff2niLP3BIxNJmEbY4uPYLp4wK4hSbLJJBBQLwb0_6yLdYa9pWlHDLFxQ0SahNxnD3uhk_U6zaHaskalmGAy9xrHK2dRZwTllELQ3oCF5tTlMmP04mttr4rG4fyvNFiLrQ/s1600/58-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR_GUcG8HmVBFbTfdyIih-IB2J5IE_jP1D1QIyX3aDXNGFfYjk0hgQ0cVwZ02Qbzukf0OLzMSiOyQK8cH2EnIf5V6m83Nfpx432w12LYCQ_k-W5EebKryYLjbptTFgQ2dZpeV-lV1UeZSa8IsIiX3kM-x7890nyjNrDV70dAuG-llS8AvxBTBnArr2zoQ/s1600/59-1.jpg",
    options: [],
    correctAnswer: 25,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoDvVvfOv9BYLs-ppB79nv-YWgSkDItiIQYD9FElj-vwdv95iThvizQO4Igqzu-WsnO3188aVRyYI4wuUg8un7Hyn5FHfe3x8blSM9scVFp2IAmQz9aThPoCzRUJGf27UfvoHFPOCI9S_QNvw4ngzwEvNimASf2-Wvy9lzNKai6Jngvei9qcLpJHB0nIs/s1600/59-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Chemistry",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXZa_ibCIROd6UdH5Qpp--XzzjDOOYB55vkQcnasP8zPmjG7yZuZ4ork8kiwNnBv42voX0ZNgvdwh5pQfcjSqnwdgBf53xdpaNAKHh-2bNtvsLBD15Wzs7Tu68w8u0vIascTutD1ums7aI_lsb5mNHlHmMRl0hE2KtoMckRnFn9Q3F3BiUY9xh4CUK2X4/s1600/60-1.jpg",
    options: [],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiARjSL74Sklz2THrhxqtqTLN2N6m4z1ieW1QbYOpzKmL4nDnrxc5nXIW3h7MwKW_sGr93TzHtfMWTizccP8lNKrUgLcHgYkFppxWAQSY_i1iNGjyv6bCqNVvmpNG0C482HDTVPjxm9tvJENaqzHIqyvQ5zhzE1jPTal1V6jx7i77cNJ0k6th-KO3okh5o/s1600/60-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiHXRS2I2L-ONOeWg5hfx7cJPu8cnbd-8Pyv7pIFnjbHV3rNPu9MwJxUTltn3qxuOQgOxH4g9AnRo4k5oSHQVer8JqwCloQJ9PLgr1I8mncbPEUc0HtvCil2Xltt-7u4_pess3C3g-jqLMrSZrQqwmRR0oKMx2TUTFEL6UsTdyKcInvbn44fsF2SidZNY/s1600/61-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixkNDdUULipr3TzuExyD5WvfSu_PnuLH9Rv6rNXBWGPseKQ8XB43DYNlYC5OuNvduw4NIc8VMZZHAQJP9tKYXUD_P8ZnrfzJ3pQkaALmgZfLnQUnS_fNTodRP_UWLMbhLkB-X3H4ONcAJChm4ijfEN-t3Z-rHVi984nhBgY8772chz8z1r31uhtpMHXrQ/s1600/61-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzWrFFC4EY5Ndfrl5NI1_pZcRIHsEbSBxsToYqsS6VNK2y7UxmIDGXXAGFnZbpXlNCmuQ7CPRAEYa1Y8Hf37pAiSFlq3ZH4IzouroJldSRRgWluAUzOCJ6AlDaEizphBkQbxcOB20TpJXANx9YcJeMdnzTPUd9b5ByFTprmuh314U2DA8kvIcATOUoQZ4/s1600/62-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXYT1a1jKYTqTjuoWpBaRkP9HpkoRHbzaBZoHExeWWSHUwe-usfIAAdxjj_mOtkwChguGc4wJ0VGLYqFmhaTV2w1t2lAAaSnFAzOrVT0A2AsyG1nZ5Z1-QbNk0CymLs0KDEmLOS9mGy9_KghtEyyk0OQLQXbM4Pwqpaiu6CRnPij3a74zo-9d0mggAbTc/s1600/62-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii0NvVccfcT2eNYyObWgNqXybw2mkewV40Fsf7YMAaHhJ9e-nfrTP19UQK55ML3gK-adeGYxgCOS3x_LuaCX3PGHNzAGgzRay_BaAbfYwE5TjdsWojAvdwaWqtLNvhf6d4dQnEx4OuJxigYa6elEIOhJS6RBeQfoOSZRyueZRmZ8y_sBl8YbRcJoiY1pU/s1600/63-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRuTBvr4Mht1bLhcZTN1nPS-tvPDtCk7QpAQa87POiJXD1Hvdc3KevYOA_JHEYfu6_xgLLGiX1e7JzYaPhKKKp7H_o4J5N_gk01cQT3oUZjE7QwzmHbmIH2iZZd_u6KjpW25uMuhn9lNTkCbmV6ZhgmLwflnaCnC4XhPWYqdSJF8rpe0QgJrkEsBSYLYE/s1600/63-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOQBmJruRPlli5zbzEJDvHoPGzEKMwTDmdO1pFspW_L3OJCUW8cDHPB9wBRmbCDUMtPDdL7vyF1yHtP5fJeA5Pzv_J5MJ1zb1Yktq-ZPmNRV-JL6CnuXdTQxsGGqtHtvmZfHDgoiWLJ8YsHM5uekOMqwgnpqHON29b4AZ8J7MJpkocRbKNZwxTcI2bhzc/s1600/64-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7mLVEMOXu0Ve3iEBSdY3KPFeebW4YB94A_R830LLVrkSUggr0bWtE_KiMLt-7M3OhkUpgTrvtJmPhf5uFDoR5QB0X-Ja3LQ8JLt2ZxYIwDDj8OuT1qLjzzO2ELvjcHjmj08DEIgnNmourmYw9W2_blaAswmvjyvSvvksA5_qr6rot2m2EHWsrUq27qhE/s1600/64-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixuOsB9al-FZlARPYR1MSSpkCu4_nlZDApNI5FAVDUyKxaHxgK8JzW2iWDTYoM9lJm-6LPvKCrTB1ICfcB5zYmD3NJIHraOirKaPnfgwcUBxfc2pqehonQQOBUXkA8ObOVb0goNXG9kzCm_8NKbCiZRlX_l09xIu-QMS5GO1Iq0tcVO8IainaQbPr0guE/s1600/65-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimj9Px2DGqc79bVh_SLQvIhs8BOHAKGMF0nW-2w5hKu2b-Avff-RACNDIgytJ84rkIrEUsW5YkorRQNnhGpmbV5AHnWFnUYMCfWkXkB08Jowk8wxXQI9MNQNz7z6n3x83zbr0oUl1giNmBHfuuMqPNThSFPZK7ee-z5Nui0oHWpBsq6E0VYE6at8ZDgHw/s1600/65-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKsuSWTa-8DDNL-8itLnzNTzZYfBuVvVO9EnIcNgR4otvx6SlS1r0V33ojUSJF8zSsQjd_84PMBFH7JByMcRD2vgE7P3MAYe8ncK-3mMPD6ZjsD2oP7dls0jTgBOJQi9pWLuNS3k83Ind-7-CXIYHOJisHxfoiTDvVY3MMpj0ceOBlUnSya8FRt7FEhEU/s1600/66-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4be18xxR9UojcK7CwZzo9bBH7O4ObCDWireY7H4oJQ4F7A-K-a5VipbbirNQoDRQdojCrX_zLqrUgtCwzCqbxtM345KCwkv_jKYE5RhMSFVQmgxb-vz_zFa-0NYqIa5cAU_BirLUxctqiHbDsA6x9GoHC0nbgUwCrVYQGa56XGcxhI6JFUYD2N8ni7tk/s1600/66-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjllXO5-azy9HajWcVpW25TiVn8zZR2T07UxbYelKD7wlFxu5GCtBcES2FPJQuCBjEIuKZa2b6hFOxwlZUxv0gqIdjeA2E3IpouzB7aYVPWlqtEcTDzi6X7n8M97EDprBze0OBssw7veqvZ49f4lbPTHnwJwzwQIpXocrvvy27D3icRKacj-MxazClDkvI/s1600/67-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-Um7ABW9VrBlQFIBCFXv_v887WzsYHsHc31VMMifPKvIxHwSUhK3yKP4M2c4F1fS-l0s5hWSAh3Puo1lbb7PBcBixtyUOT33-sKdlGoHri5POnGjf-s1FqNQKP7_2nEDb2HoQ78IpJ1cD9FKrbCR9ANpba83FcRBh7OYWJYXW5b-4dbuX6M8XztZToMU/s1600/67-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2LWyXboYtHLR_1FYvG0LPKL7VRsqOMljMteTJ1C3PCbLJZsGvDKLC85JBF-6uQRvbBsW-ssIL6Z-yUlcd8bIP88EpilWesTDRnhrRzzXn4X_ZkPR42Q7XVQ9eYBaaCiopDtBToTIvzqz9ln1ylpkwm49jHShkvrN-wCur-G9qFXpNpBAREyLjsQ41164/s1600/68-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX64fteTFR0OEHnKp8YKC6T-B0q60zw7AXZd-q-EXfvyEAiVi-lXZD57FCLisGxYol-FWWe-EVLNXdjoPaVSkBZQLkoanCzaWiw2KSXeP41zJ5ogaKYIRBtJkrgHqP-IEd1kQ4lkw93_ADToROv8N380t3y7RmsyLyj5w_W7Rw9vfNWlpDGMIjM6bmcIw/s1600/68-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK6DkJZCmzXxQoweIOJssGYOcP2a0Uv6pb3pT0aSrkLAGtQCawuNe3GdTFUCKYocd0Z5owOnKsDD00M-er-Io98jj5uAZD8rlL0geZywCrirOWguBM9Yp9HTXMVTs6dRE-kc301VZg6zAYDc5zkkTo8-qIiUlIP9VhiKx244qnqC1tLxrLhvbb22X4j4Q/s1600/69-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3p1Nrg2V32psn63172mziMFRc6zOCjDLLJ16lF8DKIrAwEun-W_lQx6ckfOeHBVmILFE7r2PtqQD0RLOtuacOtWv6PH2rdMcnVPiOcuryUOCGPnc8_G_emvzEFtEIZsC1VAn81Q9rnxdpwKbu2zcHTwQmyORwOvhUXfF0RE3IAFbRHyBCNY9TkwsV-nY/s1600/69-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRX1zPfV_hzIIJX1nm8K5S1EF0YOd0DMPcOhO8YrYczv5pwpPtE_rrtCKMGUFvzVd3nMur_kxunCTxJZRGaQLX6r3DzrKUhPTgBOgO98Ts3iA0ONSh7CksONmUxDLFPcHOLwRdmJKQk-GkySu12JQDxgZyTZblX6aSR_YrRNce7qYu2cpTXq8MyLfO8aY/s1600/70-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Easy",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4VSYMsXoaMaWjJPOCjXpFtiAJMbEol5DNiRNfDpba5eDSBm284gcyIPLqPFab5kGLjuWiIYN3SiidXFTYzL9PnEL_9hgQ5uyvVqLeKGwggZ-6HKevU4Zc_TdIhQmUxtVYVQltwLa75k3tyc978AgOM5cOGL5mNeFpF8e1LvtJ5HzN9U0JJzLxcbB4O0w/s1600/70-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiha5OIQQoZ9PXGt9wHTuJxUlf38g3h-cYxf3FlJfEnipY0LJZdpz5Xe0ykQHA-A4_fiFXeSo0WjuGEqDVT4wMPrnsXAb1-dS05cbWA0IW-PDzoAk24H1D0C5W__80I5SIlULUctN-zQ_1kf1X1GB2aKwzhu12CN1gfbWSE7Qc5zmGBqsMFVINoLS2ockc/s1600/71-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEH0CE8oj9ObqHoD4AQGH4vmN5C2-vTq1zZyCbqZE_5H1HzKNH0akuIWwJMMF8PrE1QT9qFN2WZ99CTip1suRB-sQ1pasbqjSDs6sziJ8galwbd06YSA6cGOWF9QZwNWibMavLphngZab6SWa60I8i3KfgoArkUobsfvXkn169jKNeSnNyWa3gXmsGUYo/s1600/71-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXbdcl0KeeKu4mmAQjr_8VyNRlDmPEx8vQbE6RtbhWjvHhXBJotZ03i9EfP_o3AduDQDNfDYuUQcjUKQTg98CpUhxgLWFLxPRRBvXZPGciY-nDHyROpCLb6tfZaxgUJW7fUrTx3TINOMWpzO84Vn6-2DcG9rFAQhqPj1Ju1rs_NBYYn-MQdvoE8PBnL40/s1600/72-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSZ6BYKLXp2e2TezMl_91NTrXWd17IydTiRJpv7kgKWPl8v9tfeasoC0SfYw4qVsGH3pBkVobpTBxsWhvXTw19Kvc0IF-5XMAfIOsMeot8CfCrIp3Rk2Ua86mmWoEf1ykaaoWPiXs-KTueFqBuMzScy8LgLzVFB6v-WJS2SkET7AqIa_sobc_Y6rTvS2k/s1600/72-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVCg5TZhLKxSdwwbRTSSWr-eSUxf4lqzO5q1coA6WVEvKoy1I9mm5pBA5ANThjnNfl4bcEx9ZFsESEzttDJRd2Jb49XTTdj0eYbivWJmbraowbp9KyggffBio6dxfXCYT3HNcWCO4LXVdZOjcqcFn6KYWh3VeGgKz_FpklgNobr9os22U1NhiI4R2jz8k/s1600/73-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivg2-qcJ6KoLraJUK_1mM2knR-cEGNISMk_Pm20f5xUrWPK8LClO4SPLlrZsSmeh3uA6iyi7gN-jDtttBaNXqpVw44WXrzk38juYOUtQlMxI8aJawmkFz2oeCQGMxwc5zJK389chNXoWzVMQ2cnhskevP5c_6bT6BeOuH51GBHDBhWv0ISYRb3XthEsVM/s1600/73-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHHqw4P_QNa9h8rQu2CxpCfrmMVAIZkHcwzDp2U5XVr6Vg808LydI72CD2eW5RNIhjVeReKWAewnowE66IF4nxSD309aD2jque7wkxkQD6l2ziexdGFUyClJ66fWjVcqSHjcxnv4PChs_3SZr2OGHYTtI792C7yV2QbsfTLkuEXXRp277k8anLKJ2XFrU/s1600/74-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCFikE-kVR_aDxE0m59Hd1eh_ANFZpQI9_vCas0n8A2fjk4lNeeyZAlffmQdI4IPDlKTAZC7MeOCdmmoTddWG4Ul18DizSxXBPVQiFKlP5ksUC1kg2c67yax0NAF4Z79ltsD9UNpj5cooImzaSIoSgJU84La2lQj89pch7mT3GSD2LthikwT9-YxM1nuE/s1600/74-2.png",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiaipCu2H-wz6Hs7pLOYd-xGqrMyJyvnkhG7EYtAWGZe-rHES0DA1TtveoX5XOTwdlPCLFw4OTCWrByeB4UtAEJTLf0dzwqIgUF6Nlnoo2xaDXzWwD6Zw25Q0ClM2cj0paQY8YkjE_F5L8ho7CWrw4dqkrCF-usIAzLaepZARX6IP0SwBfiQ5V1SsIOgA/s1600/75-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaJ5rTO8TRoL2RiCdzKUYdAu8dBXCFR_q3R8I10mhFEgSjsJt_k4EACIVQf6qiHl2UIToDYeWEF0ZJPGl7gllijgOIAxHSTENKJJLgEQPzj5pLa4MDEZbM13c80VUjZtzONmR2WcXPHLohDKu--hmAry3lqshvUdxGrgi5DnjbeEOm0kRAQccfpmlHkCw/s1600/75-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNyguWunyZFb3zc25eta-gjONDyxQAlZYkIBT6uGWg9CRbYRR9TI7mgvVyP3GSAISEHmTXymVTMraAhK2sQFGx4ScC0zjRsF9VFLjpGZqhMpf6pNFhDuBmwR2XVN738WXP-Q3cirM6Kj1t6eagCb-3y3cGe4J7nVSdKTv9ufulczktZkbv6S7FFtDXhCs/s1600/76-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyYIwtvSehWNhRUHLVxZtNnGtYLBOF6cXHqds-PwrNftyNvR4391AsY5RRVemoOIYhNgo34xFuUQrQPkWFLe9ZZStZMwPbxpdfcPxwivK9n7_lQIwdHYF7wYi1uo4nEcFi2r-Oj0HwQslQhcnys7DnioCzLS2SGoXIRBAiZMlYMM-6kwEChamwy4ydcZQ/s1600/76-2.png",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGbWCV_6M6WF7e3Y91uoElwFy_d9ADpb20uBAhkZRoA_ezjPDTjBqIVTvPc6S9EaEerU5u2ddzLjca02zqElL5Ze5DGwOfw8ire2Uu7IHGZjQigbHAJEs6kTvSc64A8_yQEZiS2GDqcU3yoxw5tNbzmRP60ELyKgvnRS0CBRjsajWq4WbyS98JorBS-9c/s1600/77-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 0,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRsTlUxDD5yjqKP4A3LMpQdu4Mv2LBomWOYsRJYMzevrAeREo072yNWNKG1TcChvjhg-PKLCuzwuALESotPJxnSOGbAWe7WQbayPX6_9qfXa7fZ5dvkH9o9sI7x1wy5ytDk1Yj6LMkMfV8ByuOZHowTos6lNaL3_M__zkdHLAJtvltJFhjI3gvJOOaKxg/s1600/77-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiw9aMPrzs647TGKeVa0kIqAcAZkGltdE52LQIuHxD2RrCZz-RivVeo7bPfiwNWnWKkutOlv-F_LG7r6wu-X6WP_mWzbymJbj4vxv5dXGBDapOS7isFEi1sX8BcLw3eQld83Yc1DjR1ZFoWZLxFWDSZNUI1d0Xhtehai-5GAK7B5ipNaxpPqxhuIuoAeZ8/s1600/78-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 1,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXx_fDKWS4M4XIusvQqZNWNOBA-GkUfwDJPNv3zxTKMptNdWrrXf5rx92hKjvbAUs4-LloQZTSv_LP_rG7iuAZHSOrD0xEHds5-0Ma9c7h_BIVgAY27bSGpZptd6n-Lj0cHAc4hAQ5VOWQbJpqySvtj5RLResdHp4VooxxE4ZRk7VZGMlFoEj_qEJimrw/s1600/78-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX7Jv2Iyr8regCfzLPRfuEs-TIqMvvAQXap6iR6d6fnxCHvQeUGhzVv1h8oq4-pchOGQtpKcZfnZoZqquWjh1nYBOFVj3HT4_fxZf6_NIk94noOuQygW5Zs33gOGYwpBVJ34MGGvKeOAYXO9a4nigozH0HpwYAVMWQtjr2POoSK3MCxUpA-j9RKvPDuSE/s1600/79-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxJxh7dMpxWrVFXVygTckWVPJ5h0aPqiQu0JxxqD5-cnp9vKIn1uI_rFK8bRETH0ortZ66CSqKWbyOK61JWXa90O-WiNTBJYbIgXAGpC1T7a7w8Gp4XdGxwnoiBeUlDdLO7WY74mox2ak8E1PJZnE_DFtleghomNpkGFh-YWdxKxuh-C-Pk97pixmpNZI/s1600/79-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "SCQ",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjneI-fqIRLA1WPnV7uwd5x7Nl_wWBTykB2ZniXz6cNzVv8eAe7l493p9RxVxZhMeSgJG8JAkCUe7AcPV-q52xCu5i1uh-b1h4r5P5mhuDGDA7uR2kpZ5mBhoR_Qu3D5r9eXjQPHmEmxCYi6EFIOo9Y_eRz1XpXNjB0DXTSkdkW02UdI_sDaUObmz1VvI/s1600/80-1.jpg",
    options: [
      {
        text: "1",
        image: "",
      },
      {
        text: "2",
        image: "",
      },
      {
        text: "3",
        image: "",
      },
      {
        text: "4",
        image: "",
      },
    ],
    correctAnswer: 3,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Medium",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKiBf231M3rBxpQw4UocKPm3ZCvWniHJ3RiXAZeSugTsHhaQTTZlVVE9qfgBQNYGdQ30ahZ0nX1712xWuqjPNw-z54BFgPIpraMmEvfgJA-DtT2HbvicZzp4slNRTT0lRB1tFm3SNg55oVEr15T5-bhvh3Obn01UwqTl94vmwdY24mwX0hlLk3HKELgss/s1600/80-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2QhC_pHmOZMBn5EVYIc_gIDNFaTxDgW_lTdRsWrmuegIFXIY17GEu1d7QnprskjYJg5o7QDFlFzpLzMhX38LpJcDITk3PqGOgSHD6khfbv6QIQsKCHoYZPvgf_qbiYaEyje-dS_Hdn05rBeJFCFMhrocnIACaKU2mahy0y9_nxbfmxUtL6vAiV-d9G2E/s1600/81-1.jpg",
    options: [],
    correctAnswer: 118,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9y7ylSNDsSsKIamVf52Cpb3EinpX3foAmEHVh7gbpZ_mUGtxc3GmDhx8Y0b8gxJoKFnRnL_mOI-wlMklIWhogYkjn9kNy1jOVswQ7LIfopW39j4whFCCcU4_W_FEltb_LiCVCEmgdst_WMXDo9BBEuBLxW8lDOxXmFoXRddyzvGAx9NrFXZg9azwBBD8/s1600/81-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Xj3mE6shjdbMuVStB5eQzrkbtj3SBbLNES2pGgriaiRHM4-xdZX7-okwfFoRKf3L9ijo27s2QumQ2TuHuFUgLsvIeOkyN-Jl8CnNG0ThmxcRqXWb-eUK6C8UE2XvuvT9zM8Ua5H7uh8VuwB0VNCOwLyDBKppafwxMypJ7qFfYThd2rtbN3esKMOVsog/s1600/82-1.jpg",
    options: [],
    correctAnswer: 1012,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZf0yZ8-0pf322ll-k7zXOXXwJlkItcMWtyifLZRkiE0rSRdasrGzWSAiZ6Uag7sMFq0uMxumyANcU0Cbj9c8kzcj372JC45yfy5U0CNQCBSyvhjSmoBn-M4ic2GfZ5gACtbupfZt0UQg80hTbynLv4OF_Wzq8rVm6gt7LO9StYjFZPJEfdb0tHx5DaJA/s1600/82-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaRXZDdTryZRG5G9SwaWJnC0e77phwVDEdI-nlgFVF2bHUjQ-_uYTp5M3UdFIEG5LqNZ_30KEMt7SQu7fT3vY6XYcyVps4n3JvxWoh--fzRsoEJP0JVItkQRx19OadNIFfururnXW9tU1FmRRiB9sO_imJQwGlBVrE0ui0o-tGXACiGHLu94rx_I2WLSE/s1600/83-1.jpg",
    options: [],
    correctAnswer: 22,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMzdsKKv3zcRzIURwRRNKvGPk9r39JisLpwlfVDUt3v7GWpILxYiGbrldQYcGNeAqTRAZjv3xlsAH9ayRse2E2voVuhRn7uIrHXkWhw02LPpHDZATwt6kGtZlN0UhLVWJu9ieW-o2zGTQeQPMy1eecOzy-Rzwq2KlM21uRlWuLsZDmr6F_XEQsTnuu8rc/s1600/83-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_8rBAUpImFYH10Bhy31aOWpI9cj0Li8dCIu06ToWeklhVZRmyCfv7IZYs7hu5pJlxmYTefG1ve-N9eGJDMkQ7EjdZ-0gQPf1s3gTmNPvoSNEFuu9dMneKAIjpjtkKjzK2dPFpkoy2quGOoqzM-DfhVZtt4NeHvN1-JXgjLkUKLhASz3myvuhtcW-7hyE/s1600/84-1.jpg",
    options: [],
    correctAnswer: 60,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1buHX3ols0ZRmtCHf8X93HdvBJQaQtG2Zp0CadYKhB5EmeiJ8jiCQNHQZPYcNqdfz57bBqR3Bwvmx-6g5NY3Pq6VtOu3gIDsi3opR3kDIdv1BpmbT1VXh8L8OaudegSJIr1p1G3s_MxvbV0U-It4zsb3l8KJTuU-jiuRAylBOxh7QZia6EW6Ap2uois4/s1600/84-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD8WDjJt2cRDoJaxP_GTYJU9dhejYcsqjep2MKaTILMFyrPT-2FKpHcbTBYixf1rexiI7my5vjSEt5LGT-wmPSE05K5X_V5h08vE1NOpUZJlEVSFxg_v65OTtgg0qB-nfOsx_b8O_idXocQpeGkyWTfsuMJS0Aia9pk9ooJWUwCdH9yhKIivetsql7Lb0/s1600/85-1.jpg",
    options: [],
    correctAnswer: 5,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQSqo8ZwUPZmdatLbAaExMPdPgyczKNDk0C1z1Xp_HXOvVnLf3_n3EjkeEa2H8vCDKVpuJgGLxQOkq4WbJqwYFuyj6ytR10po2P78Bv5OQk4itbsV_pdv58byczguH8Gnk2vRUFMSC6u7-9-BP7hCoH4iROT1S19VwbPS6cganH7NLHjmNjMKg6EgbsNw/s1600/85-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9wNp96oiUb9zy_9tI1VZ5lwgv0YMw-bl-5DSh5CCBanMS7Z4L4xkDhNyRfz-w0BTUQRxa2TXPj724nJG1aAfVKFLIbAsmf9XMsEl1CDU1OsdOkd8yHoTF44SmXn57ElY1xoljLUEw4b17ac-FH2b1sQj0TsArE0d7T6tBVwlGdTzJhGtYh22WPxmT-DE/s1600/86-1.jpg",
    options: [],
    correctAnswer: 546,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh94j0LToS38Ig-WPrC9tAC5jDXjgHAveYohpKyX6cgfFFO1dQdYbVFfVuWfTKtbER4PNsPD0RN2hbtCX_p9DU1cgaGGEuNL5XZoKQFGYKE2XRCClQn6JKKOFPfdNms8XqFfKxL6bRJJvKuT6ZFXc6gbOcSYnDIEUxzAPBoJhe_cjB5pXfJrpRLCF1mQXo/s1600/86-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBUmUWH654opG3w9nCr8eD9gSsnkRNin60QgZpGDolnKJvdqFb0gJqElHEqjgQIWqD6CmcCMesmwa5SnFqoZSbdCLr2MycqIiKMZEFh-6PzjkGcBoaWDWDUdV6mOnAZ83SE-WlgOXSKCbQqdbFSly2Saa9IzpJEftQsyHOi2cYiuyqHO2VbWu3fFWJ2ho/s1600/87-1.jpg",
    options: [],
    correctAnswer: 7,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidhENBlu487JQs8_5-zsBDrxG__GeCfsexclFR_UGwvWdnrUfB-nSlJzwR20lHgE3Fl9tKoZrNCm7jFS3llKEo-OoJ0T1kBVlcQqBuDszSk5b_d0PMKZjBNR02r7Z7YfOgE8pSHE7oEYP-ZqoaLgqpxaezugmHlIqZnywPYXpquYWjRB2Jc2bdN8wuyU4/s1600/87-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie9EyRtwlsB5DPouJ8kHA_RXBznDWGFU6fo9tb43zlz43RzZ5WkuuSV19r8tRY5gwJDuetTX1u-XbgMLTX8pxX1muuRJkZ2HFhkmY3lH8ZLsYmFsX8Fo-GCKTu7kA8v5EyCTjTGl-P8HkYUKA6c5bLudwEwAZ1MmLIXgTdpAyGnUWE8q3deOC2bFtCpdw/s1600/88-1.jpg",
    options: [],
    correctAnswer: 2,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6FLqnHtI4pt8yyAAJOpKBVCvFxd_fzN9eR9eqEtVJPfGhf3W3PClkl8NAi79aCCqKjwzmG8Iz7SJ37IlzLXRaCbYJAy5yenfOe3cBUFlnZWVN2OpVvO9TDBZj_zoFbOD0Kb3XUThVt0lpaqko6AIbuRiyAANBz0CEl2MUQzQvdlgmZcX5VHP-mkM-4CU/s1600/88-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbeI0W7ePkY8wR_l4EkkGt6BdfyHDb7v49LXmjAMWjNIX2soyGJE6M-LRujcB8TFYSw02j0OzlmGzF6v46hXoa4N9rysquqHA2iwUBiv7lIvtHx_Bt0a7RLWbiFiWCGkl4Pxj-YaMDXxXCGQj49FBtGZHi1Z_JzoP2-ierbA6FdUoZtbtM8OkIQnmWH5I/s1600/89-1.jpg",
    options: [],
    correctAnswer: 14,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhbtsEUtf7GTOp0ONxfBg4_bxYGXp7GiDqRjtgQNABfdYikyLuVfyWcXJlcEhx6Nda0tvQvuHOa3jtuasAoHXmWs1ko0ITh5Gk0BZS0OyHe0P6gJQQi8wtMte2JF-GXf__oEUwPfUbcO7w6iIg9cuM_W3JZHAoMMDDoZ3zhcPfgloeTiBqUMTw2b_Ra6Q/s1600/89-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
  {
    subject: "Maths",
    type: "Numerical",
    text: "",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeMOzaANSuYuN1DxgJpBYMzvDlckHHljbn148ZiDFIhANlE62Y6qzuHhjdLBcpSQ0TXGrTDQDY5uazzp48L0bdQqaZwW1YOL7uKx-XZU14BYUbxSDoPmPt6dVKlWj0baYJbdXRT4hgX_hyXfCGpPzL6NzXOMLWcCPFeQngUENlFwOvzxe6IGM7y3cXpI0/s1600/90-1.jpg",
    options: [],
    correctAnswer: 12,
    userSelectedOption: null,
    timeTaken: 0,
    difficulty: "Hard",
    solution: {
      text: "",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAUZ2Tn2sIexbOYjecsMTAE17Nnki428XxSb-E8AjulYD7xuk-FDFcLRomLxmKrvIthOwpMVBjDg7iL9LY5QRFfjNSvaJOZpmlKLHjgXKx_77UpNg-yBxnIaXEQElOnt-FbhD9-f0Q-I8GxfH0-w30NRwYDXNeWIXAvwREPvP1EcJexq25lsr75v9WNAE/s1600/90-2.jpg",
    },
    chapters: [""],
    topics: [""],
    isMarked: false,
    isReviewed: false,
    attempted: false,
    notAttempted: true,
    report: false,
  },
];

const data = [
  { marks: [286, 300], rank: [19, 1], percentile: [99.99826992, 100] },
  {
    marks: [280, 284],
    rank: [42, 23],
    percentile: [99.99617561, 99.99790569],
  },
  {
    marks: [268, 279],
    rank: [106, 64],
    percentile: [99.99034797, 99.99417236],
  },
  {
    marks: [250, 267],
    rank: [524, 108],
    percentile: [99.95228621, 99.99016586],
  },
  {
    marks: [231, 249],
    rank: [1385, 546],
    percentile: [99.87388626, 99.95028296],
  },
  {
    marks: [215, 230],
    rank: [2798, 1421],
    percentile: [99.74522293, 99.87060821],
  },
  {
    marks: [200, 214],
    rank: [4667, 2863],
    percentile: [99.57503767, 99.73930423],
  },
  {
    marks: [189, 199],
    rank: [6664, 4830],
    percentile: [99.39319714, 99.56019541],
  },
  {
    marks: [175, 188],
    rank: [10746, 7152],
    percentile: [99.02150308, 99.3487614],
  },
  {
    marks: [160, 174],
    rank: [16163, 11018],
    percentile: [98.52824811, 98.99673561],
  },
  {
    marks: [149, 159],
    rank: [21145, 16495],
    percentile: [98.07460288, 98.49801724],
  },
  {
    marks: [132, 148],
    rank: [32826, 22238],
    percentile: [97.0109678, 97.97507774],
  },
  {
    marks: [120, 131],
    rank: [43174, 33636],
    percentile: [96.0687115, 96.93721175],
  },
  {
    marks: [110, 119],
    rank: [54293, 44115],
    percentile: [95.05625037, 95.983027],
  },
  {
    marks: [102, 109],
    rank: [65758, 55269],
    percentile: [94.01228357, 94.96737888],
  },
  {
    marks: [95, 101],
    rank: [76260, 66999],
    percentile: [93.05600452, 93.89928202],
  },
  {
    marks: [89, 94],
    rank: [87219, 78111],
    percentile: [92.05811248, 92.88745828],
  },
  {
    marks: [79, 88],
    rank: [109329, 90144],
    percentile: [90.0448455, 91.79177119],
  },
  {
    marks: [62, 87],
    rank: [169542, 92303],
    percentile: [84.56203931, 91.59517945],
  },
  {
    marks: [41, 61],
    rank: [326517, 173239],
    percentile: [70.26839007, 84.22540213],
  },
  {
    marks: [1, 40],
    rank: [1025009, 334080],
    percentile: [6.66590786, 69.5797271],
  },
];

let currentQuestionIndex = 0;
let currentQuestionIndex2 = 0;
let questionStartTime = Date.now();
let timerDuration = 3 * 60 * 60; // 3 hours in seconds
let timerInterval;
let elapsedMinutes = 0;
let markedCount = 0;
let reviewedCount = 0;
let attemptedCount = 0;
let skippedCount = 0;
let questionsContainerStartTime = 0; // Variable to store the start time
let questionsContainerTimeSpent = 0; // Variable to store the total time spent

const maxNumericalAttempts = 5;
const numericalAttempts = {
  Physics: 0,
  Chemistry: 0,
  Maths: 0,
};

var userName;
const main = document.querySelector(".main");
const startBtn = document.querySelector(".start-test-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");

const questionDisplay = document.getElementById("question-display");
const prevQuestionButton = document.getElementById("prev-question");
const nextQuestionButton = document.getElementById("next-question");
const timerElement = document.getElementById("timer");
const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
const clearButton = document.getElementById("clear-button");
const markButton = document.getElementById("mark-button");
const reviewButton = document.getElementById("review-button");
const attemptedCountSpan = document.getElementById("attempted-count");
const notAttemptedCountSpan = document.getElementById("not-attempted-count");
const skippedCountSpan = document.getElementById("skipped-count");
const reviewedCountSpan = document.getElementById("reviewed-count");
const markedCountSpan = document.getElementById("marked-count");

const resultContainer = document.getElementById("result-container");
const overallAnalysis = document.getElementById("overall-analysis");
const subjectWiseAnalysis = document.getElementById("subject-wise-analysis");

// Home screen(main) and popup info
// Typing text animation
document.addEventListener("DOMContentLoaded", function () {
  const jeeExamInfoElement = document.querySelector(".sub-text");
  const jeeExamInfoText =
    "To have a practice with Previous year questions is effecient way to score high in Examination. So, Practice with our Mock Test based on Previous Year's Question papers 📄.";
  let jeeIndex = 0;
  function showJeeText() {
    jeeExamInfoElement.textContent += jeeExamInfoText[jeeIndex];
    jeeIndex++;
    if (jeeIndex < jeeExamInfoText.length) {
      setTimeout(showJeeText, 20);
    }
  }
  showJeeText();
});

// User Name validation
function validateInput() {
  var inputField = document.getElementById("userName");
  var inputValue = inputField.value;
  var filteredValue = inputValue.replace(/[^a-zA-Z]/g, "");
  // Update the input field with the filtered value
  inputField.value = filteredValue;
}

startBtn.onclick = () => {
  userName = document.getElementById("userName").value;
  if (userName.trim() !== "") {
    popupInfo.classList.add("active");
    main.classList.add("active");
    document.querySelector(
      ".popup-info h2"
    ).innerHTML = `Test Details : <i class="fas fa-user"></i> ${userName}`;
  } else {
    alert("Please enter your name to start the test.");
  }
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

function confirmStartTest() {
  var confirmation = confirm("Are you sure you want to start the test?");
  if (confirmation) {
    showExamContainer();
  }
}

function showExamContainer() {
  var testContainer = document.getElementById("test-container");
  testContainer.style.display = "block";
  document.getElementById("body").style.background = "#f4f7f9";
  startTimer(timerDuration, timerElement);
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  main.style.display = "none";
  fullscreen();

  // Set user name in header
  var userNameHeader = document.getElementById("userNameHeader");
  var userNameInput = document.getElementById("userName");
  userNameHeader.innerHTML =
    `<i class="fas fa-user"></i> ` + userNameInput.value;
}

// Fullscreen code starts
function fullscreen() {
  const elem = document.getElementById("test-container");

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
// Fullscreen code ends

function displayQuestion(questionIndex) {
  // Stop timer for previous question
  if (questions[currentQuestionIndex].timeTaken === undefined) {
    questions[currentQuestionIndex].timeTaken = 0;
  }
  questions[currentQuestionIndex].timeTaken +=
    (Date.now() - questionStartTime) / 1000;

  // Start timer for the current question
  currentQuestionIndex = questionIndex;
  questionStartTime = Date.now();

  const question = questions[questionIndex];
  let statusText = "";
  if (question.isMarked) {
    statusText = "Marked";
  } else if (question.isReviewed) {
    statusText = "Reviewed";
  }

  let html = `
  <div class="question-container">
      <div class="question-info">
          <div class="question-text">
              <div class="question-header">
                  <span class="Quest-Num">${questionIndex + 1}</span>
                  <span class="question-status">${statusText}</span>
              </div>
              <div class="question-body">${question.text}</div>
          </div>
          ${
            question.image
              ? `<div class="question-image"><img src="${question.image}" alt="Question Image"></div>`
              : ""
          }
      </div>
      <div class="options-container">
`;

  if (
    (question.type === "SCQ" || question.type === "MCQ") &&
    !question.isReviewed
  ) {
    const optionLetters = ["A", "B", "C", "D"];
    question.options.forEach((option, index) => {
      const isSelected = question.userSelectedOption === index;
      const selectedClass = isSelected ? "selected" : "";
      html += `
          <div class="option-box ${selectedClass}" onclick="selectOption(${questionIndex}, ${index}, '${
        question.type
      }')">
              <span class="option-letter">${optionLetters[index]}</span>
              <div class="option-content">
                  ${option.text ? `<span>${option.text}</span>` : ""}
                  ${
                    option.image
                      ? `<img src="${option.image}" alt="Option Image">`
                      : ""
                  }
              </div>
          </div>`;
    });
  } else if (question.type === "Numerical") {
    html += `<input type="number" id="numerical-answer" value="${
      question.userSelectedOption || ""
    }" onchange="recordNumericalAnswer(${questionIndex}, this.value)" ${
      question.isReviewed ? "disabled" : ""
    }>`;
  } else if (question.type === "SCQ" || question.type === "MCQ") {
    html +=
      '<div class="message">Question is reviewed, options are disabled. Click on <span style="color: #f00">Clear</span> button to Enable options. </div>';
  }

  html += "</div></div>";

  questionDisplay.innerHTML = html;
  updateSidebar();
  updateAnalysis();
  MathJax.typeset();
}

function selectOption(questionIndex, optionIndex, type) {
  const question = questions[questionIndex];
  if (type === "SCQ") {
    question.userSelectedOption = optionIndex;
    question.isCorrect = optionIndex === question.correctOption;
  } else if (type === "MCQ") {
    const selectedIndex = question.userSelectedOption
      ? question.userSelectedOption.indexOf(optionIndex)
      : -1;
    if (selectedIndex > -1) {
      question.userSelectedOption.splice(selectedIndex, 1);
    } else {
      if (!question.userSelectedOption) {
        question.userSelectedOption = [];
      }
      question.userSelectedOption.push(optionIndex);
    }
    // Check if the selected options match the correct options exactly
    question.isCorrect =
      question.correctOption.every((opt) =>
        question.userSelectedOption.includes(opt)
      ) && question.userSelectedOption.length === question.correctOption.length;
  }
  question.attempted = true;
  displayQuestion(questionIndex);
}

function recordAnswer(questionIndex, value) {
  const question = questions[questionIndex];
  question.userSelectedOption = parseFloat(value);
  question.isCorrect = question.userSelectedOption === question.correctOption;
  question.attempted = true;
  updateSidebar();
}

function recordNumericalAnswer(questionIndex, answer) {
  const question = questions[questionIndex];
  const subject = question.subject;

  if (question.type === "Numerical") {
    if (numericalAttempts[subject] >= maxNumericalAttempts) {
      alert(
        `You have reached the limit of ${maxNumericalAttempts} numerical questions for ${subject}.`
      );
      return;
    } else {
      if (question.userSelectedOption === null) {
        numericalAttempts[subject]++;
      }
    }
  }

  question.userSelectedOption = parseInt(answer);
  question.attempted = true;
  question.notAttempted = false;
  displayQuestion(questionIndex);
}

function clearSelections() {
  const question = questions[currentQuestionIndex];
  question.userSelectedOption = null;
  question.attempted = false;
  if (question.isMarked) {
    markedCount--;
    question.isMarked = false;
  }
  if (question.isReviewed) {
    reviewedCount--;
    question.isReviewed = false;
  }
  displayQuestion(currentQuestionIndex);
}

function markQuestion() {
  const question = questions[currentQuestionIndex];
  if (
    (question.type === "SCQ" || question.type === "MCQ") &&
    question.userSelectedOption !== null
  ) {
    question.isMarked = true;
    markedCount++;
    updateSidebar();
    displayQuestion(currentQuestionIndex);
  } else if (
    question.type === "Numerical" &&
    question.userSelectedOption !== null
  ) {
    question.isMarked = true;
    markedCount++;
    updateSidebar();
    displayQuestion(currentQuestionIndex);
  }
}

function reviewQuestion() {
  const question = questions[currentQuestionIndex];
  if (question.userSelectedOption === null) {
    question.isReviewed = true;
    reviewedCount++;
    updateSidebar();
    displayQuestion(currentQuestionIndex);
  }
}

let currentSubject = "Physics"; // Default subject

function updateSidebar() {
  const tabsContainer = document.getElementById("subject-tabs-container");
  const sidebarContent = document.getElementById("question-boxes-container");
  tabsContainer.innerHTML = "";
  sidebarContent.innerHTML = "";

  const subjects = [...new Set(questions.map((q) => q.subject))];

  subjects.forEach((subject) => {
    let subjectTabClass = "subject-tab";
    if (subject === currentSubject) {
      subjectTabClass += " active";
    }

    tabsContainer.innerHTML += `<div class="${subjectTabClass}" onclick="toggleSubject('${subject}')">${subject}</div>`;
  });

  const subjectQuestions = questions.filter(
    (q) => q.subject === currentSubject
  );
  let questionsHtml = "";

  subjectQuestions.forEach((question, localIndex) => {
    const globalIndex = questions.indexOf(question);
    let classNames = "question-box";
    if (globalIndex === currentQuestionIndex) {
      classNames += " active";
    }
    if (question.isMarked) {
      classNames += " marked";
    } else if (question.isReviewed) {
      classNames += " reviewed";
    } else if (question.attempted) {
      classNames += " answered";
    } else if (question.timeTaken !== 0) {
      classNames += " skipped";
    } else {
      classNames += " not-visited";
    }
    questionsHtml += `<div class="${classNames}" onclick="jumpToQuestion(${globalIndex})">${
      globalIndex + 1
    }</div>`;
  });

  sidebarContent.innerHTML = `<div class="question-container active">${questionsHtml}</div>`;
}

function toggleSubject(subject) {
  currentSubject = subject;
  const subjectQuestions = questions.filter((q) => q.subject === subject);
  if (subjectQuestions.length > 0) {
    const firstQuestionIndex = questions.indexOf(subjectQuestions[0]);
    jumpToQuestion(firstQuestionIndex);
  }
  updateSidebar();
}

function jumpToQuestion(index) {
  currentQuestionIndex = index;
  displayQuestion(index);
}

function updateAnalysis() {
  let attempted = 0;
  let notAttempted = 0;
  let skipped = 0;
  let notVisited = 0;
  let reviewed = 0;
  let marked = 0;

  questions.forEach((question) => {
    if (question.attempted) {
      attempted++;
    } else {
      notAttempted++;
      if (question.timeTaken !== 0) {
        skipped++;
      } else {
        notVisited++;
      }
    }
    if (question.isReviewed) {
      reviewed++;
    }
    if (question.isMarked) {
      marked++;
    }
  });
  attemptedCountSpan.textContent = attempted - marked;
  notAttemptedCountSpan.textContent = notVisited;
  skippedCountSpan.textContent = skipped - reviewed;
  reviewedCountSpan.textContent = reviewed;
  markedCountSpan.textContent = marked;
}

function switchSubjectTab(subjectIndex) {
  currentSubjectIndex = subjectIndex;
  currentQuestionIndex = 0;
  displayQuestion(subjectIndex, currentQuestionIndex);
}

prevQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});

nextQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
});

function displayNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
}

clearButton.addEventListener("click", clearSelections);
markButton.addEventListener("click", markQuestion);
reviewButton.addEventListener("click", reviewQuestion);

function toggleSidebar() {
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-300px";
  } else {
    sidebar.style.right = "0px";
  }
}

function startTimer(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  timerInterval = setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      // Time's up
      display.textContent = "00:00:00";
      // Automatically submit the test
      clearInterval(timerInterval);
      confirmSubmit();
    }
    elapsedMinutes = (duration - timer) / 60;
  }, 1000);
}

window.onload = function () {
  displayQuestion(currentQuestionIndex);
  updateSidebar();
  updateAnalysis();
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("questions-container");
  const testContainer = document.getElementById("test-container");
  const closeButton = document.getElementById("close-button");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  const filterBox = document.createElement("div");
  filterBox.classList.add("filter-box-doc");

  // Define filter options
  const filterOptions = [
    "All",
    "Attempted",
    "Not Attempted",
    "Reviewed",
    "Marked",
  ];

  // Create filter select box
  const filterSelect = document.createElement("select");
  filterSelect.id = "filterSelect";
  filterSelect.addEventListener("change", applyFilter);

  // Populate filter options
  filterOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    optionElement.value = option.toLowerCase().replace(" ", "-");
    filterSelect.appendChild(optionElement);
  });

  filterBox.appendChild(filterSelect);
  container.appendChild(filterBox);

  let questionNumber = 1;

  questions.forEach((questionObj, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    let questionTextHtml = questionObj.text || "";
    if (questionObj.image) {
      questionTextHtml += `<div class="question-image"><img src="${questionObj.image}" alt="Question Image"></div>`;
    }

    let optionsHtml = "";

    if (questionObj.type === "SCQ" || questionObj.type === "MCQ") {
      const optionLetters = ["A", "B", "C", "D"];
      optionsHtml = `
        <ul class="options">
          ${questionObj.options
            .map((option, optionIndex) => {
              let optionContent = option.text || "";
              if (option.image) {
                optionContent += `<img src="${option.image}" alt="Option Image">`;
              }
              const isSelected = questionObj.userSelectedOption === optionIndex;
              const selectedClass = isSelected ? "selected" : "";
              const disabled = questionObj.attempted ? "disabled" : "";
              return `<li class="option-box ${selectedClass} ${disabled}" onclick="selectOption(${index}, ${optionIndex}, '${questionObj.type}')">
                      <span class="option-letter">${optionLetters[optionIndex]}</span>
                      <div class="option-content">${optionContent}</div>
                    </li>`;
            })
            .join("")}
        </ul>
      `;
    } else if (questionObj.type === "Numerical") {
      optionsHtml = `
        <div class="numerical-answer">
          <label for="numerical-answer-${questionNumber}">Answer:</label>
          <input type="number" id="numerical-answer-${questionNumber}" value="${
        questionObj.userSelectedOption || ""
      }" onchange="recordNumericalAnswer(${index}, this.value)" ${
        questionObj.attempted ? "disabled" : ""
      } />
        </div>
      `;
    }

    questionDiv.innerHTML = `
      <h2>${questionNumber}. ${questionTextHtml} <span class="expand-icon" onclick="expandQuestion(${index})">▶</span></h2>
      ${optionsHtml}
    `;

    container.appendChild(questionDiv);
    questionNumber++;
  });

  container.addEventListener("scroll", () => {
    if (container.scrollTop > 100) {
      // Show button after scrolling down 100px
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  function scrollToTop() {
    container.scrollTop = 0;
  }

  function applyFilter() {
    const selectedOption = filterSelect.value;
    questions.forEach((question, index) => {
      const questionDiv = container.children[index + 1]; // +1 because first child is filterBox
      if (selectedOption === "all") {
        questionDiv.style.display = "block";
      } else {
        let displayQuestion = false;
        switch (selectedOption) {
          case "attempted":
            displayQuestion = question.attempted;
            break;
          case "not-attempted":
            displayQuestion = !question.attempted;
            break;
          case "reviewed":
            displayQuestion = question.isReviewed;
            break;
          case "marked":
            displayQuestion = question.isMarked;
            break;
        }
        questionDiv.style.display = displayQuestion ? "block" : "none";
      }
    });
  }
});

function expandQuestion(questionIndex) {
  document.getElementById("questions-container").style.display = "none";
  document.getElementById("test-container").style.display = "block";
  document.getElementById("close-button").style.display = "none";
  fullscreen();
  displayQuestion(questionIndex);
}
function toggleQuestions() {
  const container = document.getElementById("questions-container");
  const testContainer = document.getElementById("test-container");
  container.style.display = "block";
  testContainer.style.display = "none";
  document.getElementById("close-button").style.display = "block";
  fullscreen();
}

function closeDoc() {
  document.getElementById("questions-container").style.display = "none";
  document.getElementById("test-container").style.display = "block";
  document.getElementById("close-button").style.display = "none";
  fullscreen();
}

function confirmSubmit() {
  document.getElementById("confirmationModal").style.display = "none";
  document.getElementById("test-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("body").style.background = "white";
  clearInterval(timerInterval);
  showPerformanceAnalysis();
  submitButton();
}

document.getElementById("cancelSubmit").addEventListener("click", () => {
  document.getElementById("confirmationModal").style.display = "none";
  fullscreen();
});

function submitTest() {
  document.getElementById("confirmationModal").style.display = "block";
  toggleSidebar();
  updateAnalysis();
  fullscreen();
}

function showPerformanceAnalysis() {
  const overallAnalysis = document.getElementById("overallAnalysis");
  const subjectWiseAnalysis = document.getElementById("subjectWiseAnalysis");

  const totalQuestions = questions.length;
  const attemptedQuestions = questions.filter((q) => q.attempted).length;
  const notAttemptedQuestions = totalQuestions - attemptedQuestions;

  let correctQuestions = [];
  let incorrectQuestions = [];
  let notAttemptedQuestionsIndices = [];
  let markedQuestions = [];
  let reviewedQuestions = [];
  let skippedQuestions = [];

  let totalMarks = 0;
  let overallTimeSpent = 0;

  questions.forEach((question, index) => {
    overallTimeSpent += question.timeTaken;

    if (question.attempted) {
      let isCorrect = false;
      if (question.type === "SCQ") {
        isCorrect = question.userSelectedOption === question.correctAnswer;
      } else if (question.type === "MCQ") {
        isCorrect =
          question.correctAnswer.every((opt) =>
            question.userSelectedOption.includes(opt)
          ) &&
          question.correctAnswer.length === question.userSelectedOption.length;
      } else if (question.type === "Numerical") {
        isCorrect = question.userSelectedOption === question.correctAnswer;
      }

      if (isCorrect) {
        correctQuestions.push(index + 1);
        totalMarks += 4;
      } else {
        incorrectQuestions.push(index + 1);
        totalMarks -= question.type === "MCQ" ? 2 : 1;
      }
    } else {
      notAttemptedQuestionsIndices.push(index + 1);
      if (question.timeTaken !== 0) {
        skippedQuestions.push(index + 1);
      }
    }

    if (question.isMarked) markedQuestions.push(index + 1);
    if (question.isReviewed) reviewedQuestions.push(index + 1);
  });

  const { rank, percentile } = calculateRankAndPercentile(totalMarks);
  const percentage = (totalMarks / (questions.length * 4)) * 100;

  overallAnalysis.innerHTML = `
        <div class="analysis-container2">

            <!-- Rank, Percentile, Total Marks, Total Time Taken, Accuracy -->
          <div class="info-container">
            <div class="info-item rank">
              <div class="info-text">
                <i class="fas fa-trophy"></i>
                <span>Expected Rank: <span id="rank-value">${rank}</span></span>
              </div>
            </div>
            <div class="info-item percentile">
              <div class="info-text">
                <i class="fas fa-chart-line"></i>
                <span>Expected Percentile: <span id="percentile-value">${percentile}%</span></span>
              </div>
              <svg viewBox="0 0 36 36" class="circular-chart5">
                <path
                  class="circle-bg5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  id="circle5"
                  class="circle5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <div class="info-item total-marks">
              <div class="info-text">
                <i class="fas fa-star"></i>
                <span
                  >Total Marks: <span id="total-marks">${totalMarks}/300</span></span
                >
              </div>
              <svg viewBox="0 0 36 36" class="circular-chart5">
                <path
                  class="circle-bg5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  id="circle5"
                  class="circle5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <div class="info-item total-time">
              <div class="info-text">
                <i class="fas fa-clock"></i>
                <span
                  >Total Time Taken: <span id="total-time-spent2">${elapsedMinutes.toFixed(
                    2
                  )}</span> (in min)</span
                >
              </div>
              <svg viewBox="0 0 36 36" class="circular-chart5">
                <path
                  class="circle-bg5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  id="circle5"
                  class="circle5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <div class="info-item accuracy">
              <div class="info-text">
                <i class="fas fa-bullseye"></i>
                <span>Accuracy: <span id="accuracy-value">${Math.floor(
                  (correctQuestions.length /
                    (correctQuestions.length + incorrectQuestions.length)) *
                    100
                )}%</span></span>
              </div>
              <svg viewBox="0 0 36 36" class="circular-chart5">
                <path
                  class="circle-bg5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  id="circle5"
                  class="circle5"
                  d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </div>


<!-- Bar Graph -->
          <div id="overallAnalysisBarChart" class="chart-container"></div>


<h2 style="text-align: center; margin:5px;">Time Spent per Question</h2>
<div id="timeAnalysisChart" class="chart-container"></div>
<div id="pagination">
<button id="prevBtn" class="disabled"><i class="fas fa-arrow-left"></i></button>
<span id="pageNumbers"></span>
<button id="nextBtn"><i class="fas fa-arrow-right"></i></button>
</div>



<h2 style="text-align:center;margin : 5px">Filtering Questions By Condition</h2>
<div id="filter-container">
<div id="filter-button">Filter Options</div>
<div class="dropdown-content">
<label><input type="checkbox" value="correct" checked /> Correct</label>
<label><input type="checkbox" value="incorrect" /> Incorrect</label>
<label><input type="checkbox" value="notAttempted" /> Not Answered</label>
<label><input type="checkbox" value="marked" /> Marked</label>
<label><input type="checkbox" value="reviewed" /> Reviewed</label>
<label><input type="checkbox" value="timeBased" /> Time Based</label>
<label><input type="checkbox" value="skipped" /> Skipped</label>
<label><input type="checkbox" value="notVisited" /> Not Visited</label>
</div>
</div>
<div class="analysis-item2">
<div class="analysis-header2">
<span><i class="fas fa-hourglass-half" style="color: #514caf; margin-right: 10px"></i> Filter:</span>
<span style="color: #514caf">
  <button class="toggle-btn" onclick="toggleContent(this)">
    <i class="fas fa-chevron-down"></i>
  </button>
</span>
</div>
<div class="selected-filters" id="selected-filters"></div>
<div id="question-box-container" class="analysis-content2"></div>
</div>

<div class="graph">
<h3>Subjects Comparison</h3>
<div id="subjectWiseChart" class="chart-container"></div>
</div>
    
</div>
        `;

  document.getElementById("user-name").innerText = userName.toUpperCase();
  // Update progress bars
  const accuracy =
    (correctQuestions.length /
      (correctQuestions.length + incorrectQuestions.length)) *
    100;
  document.querySelector(
    ".percentile .circle5"
  ).style.strokeDasharray = `${percentile}, 100`;
  document.querySelector(".total-marks .circle5").style.strokeDasharray = `${
    (totalMarks * 100) / 300
  }, 100`;
  document.querySelector(
    ".total-time .circle5"
  ).style.strokeDasharray = `${Math.floor((elapsedMinutes / 180) * 100)}, 100`; // Assuming 240 mins as the maximum time
  document.querySelector(
    ".accuracy .circle5"
  ).style.strokeDasharray = `${Math.floor(accuracy)}, 100`;

  const filterContainer = document.getElementById("filter-container");
  const questionBoxContainer = document.getElementById(
    "question-box-container"
  );
  const selectedFiltersContainer = document.getElementById("selected-filters");

  filterContainer.addEventListener("change", updateQuestionBoxes);

  function updateQuestionBoxes() {
    const filters = Array.from(
      filterContainer.querySelectorAll("input:checked")
    ).map((checkbox) => checkbox.value);

    questionBoxContainer.innerHTML = "";
    selectedFiltersContainer.innerHTML = `Showing: ${filters.join(", ")}`;

    const allQuestions = questions.map((q, index) => ({
      index: index + 1,
      isCorrect:
        (q.type === "SCQ" && q.userSelectedOption === q.correctAnswer) ||
        (q.type === "MCQ" &&
          q.correctAnswer.every((opt) => q.userSelectedOption.includes(opt)) &&
          q.correctAnswer.length === q.userSelectedOption.length) ||
        (q.type === "Numerical" && q.userSelectedOption === q.correctAnswer),
      isIncorrect:
        q.attempted &&
        !(
          (q.type === "SCQ" && q.userSelectedOption === q.correctAnswer) ||
          (q.type === "MCQ" &&
            q.correctAnswer.every((opt) =>
              q.userSelectedOption.includes(opt)
            ) &&
            q.correctAnswer.length === q.userSelectedOption.length) ||
          (q.type === "Numerical" && q.userSelectedOption === q.correctAnswer)
        ),
      isNotAttempted: !q.attempted,
      isMarked: q.isMarked,
      isReviewed: q.isReviewed,
      isTimeBased: q.timeTaken > 0,
      isSkipped: !q.attempted && q.timeTaken !== 0,
      isVisited: !q.attempted && q.timeTaken === 0,
    }));

    const filteredQuestions = allQuestions.filter((q) =>
      filters.every((filter) => {
        if (filter === "correct") return q.isCorrect;
        if (filter === "incorrect") return q.isIncorrect;
        if (filter === "notAttempted") return q.isNotAttempted;
        if (filter === "marked") return q.isMarked;
        if (filter === "reviewed") return q.isReviewed;
        if (filter === "timeBased") return q.isTimeBased;
        if (filter === "skipped") return q.isSkipped;
        if (filter === "notVisited") return q.isVisited;
        return true;
      })
    );

    questionBoxContainer.innerHTML = filteredQuestions
      .map((q) => `<div class="circular-box2 filter-box">${q.index}</div>`)
      .join("");
    // Add click event listeners to question boxes
    const questionBoxes = document.querySelectorAll(".circular-box2");
    questionBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        const questionNumber = parseInt(box.textContent, 10);
        document.getElementById("result-container").style.display = "none";
        document.getElementById("question-container2").style.display = "block";
        currentQuestionIndex2 = questionNumber - 1;
        displayQuestion2(currentQuestionIndex2); // Adjust for zero-based index
      });
    });
  }

  updateQuestionBoxes();

  let currentIndex = 0;
  const itemsPerPage = 10;

  function renderChart() {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedQuestions = questions.slice(start, end);

    const timeData = paginatedQuestions.map((question) =>
      Math.floor(question.timeTaken || 0)
    );
    const categories = paginatedQuestions.map(
      (_, index) => `Q${start + index + 1}`
    );

    const optionsTimeAnalysis = {
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: true,
        },
      },
      series: [
        {
          name: "Time Spent",
          data: timeData, // Sample data
        },
      ],
      xaxis: {
        categories: categories,
        title: {
          text: "Question Numbers",
        },
      },
      yaxis: {
        title: {
          text: "Time (seconds)",
        },
        min: 0, // Ensure the y-axis starts at 0
      },
      stroke: {
        curve: "smooth", // Make the line smooth
        width: 2,
      },
      markers: {
        size: 5, // Show markers on data points
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
      },
      tooltip: {
        enabled: true,
        theme: "dark",
        x: {
          show: true,
        },
        y: {
          title: {
            formatter: (seriesName) => `${seriesName}:`,
          },
        },
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // alternating row colors
          opacity: 0.5,
        },
      },
      theme: {
        mode: "light", // Switch between 'dark' and 'light' themes
        palette: "palette1", // Predefined palette (1-10)
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
    };

    document.querySelector("#timeAnalysisChart").innerHTML = "";
    const timeChart = new ApexCharts(
      document.querySelector("#timeAnalysisChart"),
      optionsTimeAnalysis
    );
    timeChart.render();
  }

  function renderPagination() {
    const totalPages = Math.ceil(questions.length / itemsPerPage);
    const pageNumbersContainer = document.getElementById("pageNumbers");
    pageNumbersContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
      const start = i * itemsPerPage + 1;
      const end = Math.min((i + 1) * itemsPerPage, questions.length);
      const button = document.createElement("button");
      button.innerText = `${start}`;
      button.className = i === currentIndex ? "active" : "";
      button.addEventListener("click", () => {
        currentIndex = i;
        renderChart();
        renderPagination();
      });
      pageNumbersContainer.appendChild(button);
    }

    document.getElementById("prevBtn").className =
      currentIndex === 0 ? "disabled" : "";
    document.getElementById("nextBtn").className =
      (currentIndex + 1) * itemsPerPage >= questions.length ? "disabled" : "";
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    if ((currentIndex + 1) * itemsPerPage < questions.length) {
      currentIndex++;
      renderChart();
      renderPagination();
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderChart();
      renderPagination();
    }
  });

  // Initial render
  renderChart();
  renderPagination();

  const notVisitedCount = questions.length - skippedQuestions.length;

  // Overall Analysis Bar Chart
  var optionsOverallAnalysis = {
    chart: {
      type: "bar",
      height: 350,
    },
    series: [
      {
        name: "Marks",
        data: [
          correctQuestions.length,
          incorrectQuestions.length,
          notAttemptedQuestions,
          skippedQuestions.length,
          markedQuestions.length,
          reviewedQuestions.length,
          notVisitedCount,
        ], // Sample data
      },
    ],
    colors: [
      "#00cd00",
      "#f44336",
      "#5f5f5f",
      "#f5b74f",
      "#ff9800",
      "#2196f3",
      "#0ba6a6",
    ],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "60%",
      },
    },
    xaxis: {
      categories: [
        "Correct",
        "Incorrect",
        "Not Answered",
        "Skipped",
        "Marked",
        "Reviewed",
        "Not Visited",
      ],
      title: {
        text: "Category",
      },
    },
    yaxis: {
      title: {
        text: "Number of questions per Category",
      },
    },
  };

  var overallChart = new ApexCharts(
    document.querySelector("#overallAnalysisBarChart"),
    optionsOverallAnalysis
  );
  overallChart.render();

  // subject wise comparative graph starts
  const uniqueSubjects = [...new Set(questions.map((q) => q.subject))]; // Extract unique subjects

  const subjectMetrics = uniqueSubjects.map((subject) => {
    const subjectQuestions = questions.filter((q) => q.subject === subject);
    const subjectAttemptedQuestions = subjectQuestions.filter(
      (q) => q.attempted
    ).length;
    const subjectNotAttemptedQuestions = subjectQuestions.filter(
      (q) => !q.attempted
    ).length;
    let subjectCorrectQuestions = 0;
    let subjectIncorrectQuestions = 0;
    let subjectMarkedQuestions = 0;
    let subjectReviewedQuestions = 0;
    let subjectMarks = 0;
    let subjectTimeSpent = 0;

    subjectQuestions.forEach((question) => {
      subjectTimeSpent += question.timeTaken || 0;
      if (question.attempted) {
        let isCorrect = false;
        if (question.type === "SCQ") {
          isCorrect = question.userSelectedOption === question.correctAnswer;
        } else if (question.type === "MCQ") {
          isCorrect =
            question.correctAnswer.every((opt) =>
              question.userSelectedOption.includes(opt)
            ) &&
            question.correctAnswer.length ===
              question.userSelectedOption.length;
        } else if (question.type === "Numerical") {
          isCorrect = question.userSelectedOption === question.correctAnswer;
        }

        if (isCorrect) {
          subjectCorrectQuestions++;
          subjectMarks += 4;
        } else {
          subjectIncorrectQuestions++;
          subjectMarks -= question.type === "MCQ" ? 2 : 1;
        }
      }
      if (question.isMarked) subjectMarkedQuestions++;
      if (question.isReviewed) subjectReviewedQuestions++;
    });

    return {
      subject,
      subjectAttemptedQuestions,
      subjectNotAttemptedQuestions,
      subjectCorrectQuestions,
      subjectIncorrectQuestions,
      subjectMarkedQuestions,
      subjectReviewedQuestions,
      subjectTimeSpent,
    };
  });

  const options = {
    chart: {
      type: "bar",
      height: 450,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
        grouped: true,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    series: [
      {
        name: "Attempted Questions",
        data: subjectMetrics.map((data) => data.subjectAttemptedQuestions),
      },
      {
        name: "Not Attempted Questions",
        data: subjectMetrics.map((data) => data.subjectNotAttemptedQuestions),
      },
      {
        name: "Correct Questions",
        data: subjectMetrics.map((data) => data.subjectCorrectQuestions),
      },
      {
        name: "Incorrect Questions",
        data: subjectMetrics.map((data) => data.subjectIncorrectQuestions),
      },
      {
        name: "Marked Questions",
        data: subjectMetrics.map((data) => data.subjectMarkedQuestions),
      },
      {
        name: "Reviewed Questions",
        data: subjectMetrics.map((data) => data.subjectReviewedQuestions),
      },
    ],
    xaxis: {
      categories: subjectMetrics.map((data) => data.subject),
      title: {
        text: "Subjects",
      },
    },
    yaxis: {
      title: {
        text: "Count / Time (seconds)",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const subjectWiseChart = new ApexCharts(
    document.querySelector("#subjectWiseChart"),
    options
  );
  subjectWiseChart.render();

  let subjectWiseHtml = "";
  const subjects = [...new Set(questions.map((q) => q.subject))]; // Extract unique subjects

  subjects.forEach((subject) => {
    const subjectQuestions = questions.filter((q) => q.subject === subject);
    const subjectAttemptedQuestions = subjectQuestions.filter(
      (q) => q.attempted
    ).length;
    const subjectNotAttemptedQuestions = subjectQuestions.filter(
      (q) => !q.attempted
    ).length;
    let subjectCorrectQuestions = [];
    let subjectIncorrectQuestions = [];
    let subjectMarkedQuestions = [];
    let subjectReviewedQuestions = [];

    let subjectMarks = 0;
    let subjectTimeSpent = 0;

    subjectQuestions.forEach((question, index) => {
      const globalIndex = questions.indexOf(question);
      subjectTimeSpent += question.timeTaken || 0;
      if (question.attempted) {
        let isCorrect = false;
        if (question.type === "SCQ") {
          isCorrect = question.userSelectedOption === question.correctAnswer;
        } else if (question.type === "MCQ") {
          isCorrect =
            question.correctAnswer.every((opt) =>
              question.userSelectedOption.includes(opt)
            ) &&
            question.correctAnswer.length ===
              question.userSelectedOption.length;
        } else if (question.type === "Numerical") {
          isCorrect = question.userSelectedOption === question.correctAnswer;
        }

        if (isCorrect) {
          subjectCorrectQuestions.push(globalIndex + 1); // Start indices from 1
          subjectMarks += 4;
        } else {
          subjectIncorrectQuestions.push(globalIndex + 1); // Start indices from 1
          subjectMarks -= question.type === "MCQ" ? 2 : 1;
        }
      }
      if (question.isMarked) subjectMarkedQuestions.push(globalIndex + 1); // Start indices from 1
      if (question.isReviewed) subjectReviewedQuestions.push(globalIndex + 1); // Start indices from 1
    });

    subjectWiseHtml += `
            <div class="subject-container">
            <div class="subject-header">
              <h3>${subject}</h3>
            </div>

            <!-- Details: Marks, Total Time, Accuracy -->
            <div class="subject-details">
              <div class="info-container">
              <!-- Marks -->
              <div class="info-item total-marks">
                <div class="info-text">
                <i class="fas fa-star"></i>
                <span
                  >Total Marks: <span id="total-marks-value">${
                    subjectCorrectQuestions.length * 4 +
                    subjectIncorrectQuestions.length * -1
                  }/100</span></span
                >
              </div>
                <svg viewBox="0 0 36 36" class="circular-chart5">
                  <path
                    class="circle-bg5"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    id="circle5Physics"
                    class="circle5 green"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    style="stroke-dasharray: ${
                      (subjectCorrectQuestions.length * 4 +
                        subjectIncorrectQuestions.length * -1) /
                      100
                    }, 100;"
                  />
                </svg>
              </div>

              <!-- Total Time -->
              <div class="info-item total-time">
                <div class="info-text">
                <i class="fas fa-clock"></i>
                <span
                  >Total Time Taken: <span id="total-time-value">${(
                    subjectTimeSpent / 60
                  ).toFixed(2)}</span> (in min)</span
                >
              </div>
                <svg viewBox="0 0 36 36" class="circular-chart5">
                  <path
                    class="circle-bg5"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    id="circle5Physics"
                    class="circle5 red"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    style="stroke-dasharray: ${Math.floor(
                      (subjectTimeSpent / 60) * 60 * 100
                    )}, 100;"
                  />
                </svg>
              </div>

              <!-- Accuracy -->
              <div class="info-item accuracy">
                <div class="info-text">
                <i class="fas fa-bullseye"></i>
                <span>Accuracy: <span id="accuracy-value">${Math.floor(
                  (subjectCorrectQuestions.length /
                    (subjectCorrectQuestions.length +
                      subjectIncorrectQuestions.length)) *
                    100
                )}%</span></span>
              </div>
                <svg viewBox="0 0 36 36" class="circular-chart5">
                  <path
                    class="circle-bg5"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    id="circle5Physics"
                    class="circle5 orange"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    style="stroke-dasharray: ${
                      (subjectCorrectQuestions.length /
                        (subjectCorrectQuestions.length +
                          subjectIncorrectQuestions.length)) *
                      100
                    }, 100;"
                  />
                </svg>
              </div>
              </div>
            </div>
                <div class="analysis-item2" style="border-left: 3px solid #00cd00" >
                    <div class="analysis-header2">
                        <span><i class="fas fa-check-circle" style="color: #00cd00; margin-right:10px"></i>Correct Questions:</span>
                        <span style="color:#4caf50">${
                          subjectCorrectQuestions.length
                        }(${
      subjectCorrectQuestions.length * 4
    })<button class="toggle-btn" onclick="toggleContent(this)">
        <i class="fas fa-chevron-down"></i>
      </button></span>
                    </div>
                    <progress
                 max="${
                   subjectAttemptedQuestions + subjectNotAttemptedQuestions
                 }"
                 style="border: none; height: 5px; width: 100%;"
                 value="${subjectCorrectQuestions.length}"
                 ></progress>
                    <div class="analysis-content2">
                        ${subjectCorrectQuestions
                          .map(
                            (q) =>
                              `<div class="circular-box2 correct2">${q}</div>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="analysis-item2" style="border-left: 3px solid #f44336">
                    <div class="analysis-header2">
                        <span><i class="fas fa-times-circle" style="color: #f44336; margin-right:10px"></i>Incorrect Questions:</span>
                        <span style="color:#f44336">${
                          subjectIncorrectQuestions.length
                        } (${
      subjectIncorrectQuestions.length * -1
    })<button class="toggle-btn" onclick="toggleContent(this)">
        <i class="fas fa-chevron-down"></i>
      </button></span>
                    </div>
                    <progress
                 max="${
                   subjectAttemptedQuestions + subjectNotAttemptedQuestions
                 }"
                 style="border: none; height: 5px; width: 100%;"
                 value="${subjectIncorrectQuestions.length}"
                 ></progress>
                    <div class="analysis-content2">
                        ${subjectIncorrectQuestions
                          .map(
                            (q) =>
                              `<div class="circular-box2 incorrect2">${q}</div>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="analysis-item2" style="border-left: 3px solid #ff9800">
                    <div class="analysis-header2">
                        <span><i class="fas fa-save" style="color: #ff9800; margin-right:10px"></i>Marked Questions:</span>
                        <span style="color:#ff9800">${
                          subjectMarkedQuestions.length
                        }        <button class="toggle-btn" onclick="toggleContent(this)">
        <i class="fas fa-chevron-down"></i>
      </button></span>
                    </div>
                    <progress
                 max="${
                   subjectAttemptedQuestions + subjectNotAttemptedQuestions
                 }"
                 style="border: none; height: 5px; width: 100%;"
                 value="${subjectMarkedQuestions.length}"
                 ></progress>
                    <div class="analysis-content2">
                        ${subjectMarkedQuestions
                          .map(
                            (q) =>
                              `<div class="circular-box2 marked2">${q}</div>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="analysis-item2" style="border-left: 3px solid #2196f3">
                    <div class="analysis-header2">
                        <span><i class="fas fa-flag" style="color: #2196f3; margin-right:10px"></i>Reviewed Questions:</span>
                        <span style="color:#2196f3">${
                          subjectReviewedQuestions.length
                        }      <button class="toggle-btn" onclick="toggleContent(this)">
        <i class="fas fa-chevron-down"></i>
      </button></span>
                    </div>
                    <progress
                 max="${
                   subjectAttemptedQuestions + subjectNotAttemptedQuestions
                 }"
                 style="border: none; height: 5px; width: 100%;"
                 value="${subjectReviewedQuestions.length}"
                 ></progress>
                    <div class="analysis-content2">
                        ${subjectReviewedQuestions
                          .map(
                            (q) =>
                              `<div class="circular-box2 reviewed2">${q}</div>`
                          )
                          .join("")}
                    </div>
                </div>
</div>
            `;

    subjectWiseAnalysis.innerHTML = subjectWiseHtml;

    // Add click event listeners to question boxes
    const questionBoxes = document.querySelectorAll(".circular-box2");
    questionBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        const questionNumber = parseInt(box.textContent, 10);
        document.getElementById("result-container").style.display = "none";
        document.getElementById("question-container2").style.display = "block";
        currentQuestionIndex2 = questionNumber - 1;
        displayQuestion2(currentQuestionIndex2); // Adjust for zero-based index
      });
    });
  });
}

// SIDEBAR TOGGLE

const sidebarD = document.getElementById("sidebarD");

function dashboardSidebar() {
  if (sidebarD.style.left === "0px") {
    sidebarD.style.left = "-300px";
    sidebarD.classList.remove("sidebar-responsive");
  } else {
    sidebarD.style.left = "0px";
    sidebarD.classList.add("sidebar-responsive");
  }
}

//   Feedback form Code Starts
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const questionNumber = document.getElementById("questionNumber").value;
    const issueType = document.getElementById("issueType").value;
    const questionFeedback = document.getElementById("questionFeedback").value;
    const solutionFeedback = document.getElementById("solutionFeedback").value;
    const examConductionFeedback = document.getElementById(
      "examConductionFeedback"
    ).value;
    const otherFeedback = document.getElementById("otherFeedback").value;

    const url = new URL(
      "https://script.google.com/macros/s/AKfycbzW4SkS3YCk75p23ofWSiDjcnjzafx2azknpEbTvCWwr1CMWnW586YzmChM3sjq1YPejQ/exec"
    );
    url.searchParams.append("email", email);
    url.searchParams.append("questionNumber", questionNumber);
    url.searchParams.append("issueType", issueType);
    url.searchParams.append("questionFeedback", questionFeedback);
    url.searchParams.append("solutionFeedback", solutionFeedback);
    url.searchParams.append("examConductionFeedback", examConductionFeedback);
    url.searchParams.append("otherFeedback", otherFeedback);

    const messageDiv = document.getElementById("message");
    messageDiv.innerText = "Submitting response...";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          messageDiv.innerText = "Feedback submitted successfully.";
          document.getElementById("feedbackForm").reset();
        } else {
          messageDiv.innerText = "Error submitting feedback.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        messageDiv.innerText = "Error submitting feedback.";
      });
  });

// Feedback form code ends

document.getElementById("overviewBtn").addEventListener("click", function () {
  document.getElementById("overallAnalysis").style.display = "block";
  document.getElementById("subjectWiseAnalysis").style.display = "none";
  document.getElementById("feedback").style.display = "none";
});
document.getElementById("subjectsBtn").addEventListener("click", function () {
  document.getElementById("overallAnalysis").style.display = "none";
  document.getElementById("subjectWiseAnalysis").style.display = "block";
  document.getElementById("feedback").style.display = "none";
});
document.getElementById("feedbackBtn").addEventListener("click", function () {
  document.getElementById("overallAnalysis").style.display = "none";
  document.getElementById("subjectWiseAnalysis").style.display = "none";
  document.getElementById("feedback").style.display = "block";
});
async function submitButton() {
  const userName = document.getElementById("user-name").textContent.trim();
  const testDateTime = new Date().toLocaleString();
  const totalMarks = parseFloat(
    document.getElementById("total-marks").textContent.trim()
  );
  const totalTimeTaken = parseFloat(
    document.getElementById("total-time-spent2").textContent.trim()
  );
  const { rank, percentile } = calculateRankAndPercentile(totalMarks);
  const testName = "JEE Mains(24 Jan 2023- Morning)";

  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    const questionData = {
      testName: testName,
      userName: userName,
      testDateTime: testDateTime,
      questionNumber: index + 1,
      correctAnswer: JSON.stringify(question.correctAnswer),
      userSelectedOption: JSON.stringify(question.userSelectedOption),
      timeTaken: question.timeTaken ? question.timeTaken.toFixed(2) : 0,
      isMarked: question.isMarked ? "True" : "False",
      isReviewed: question.isReviewed ? "True" : "False",
      attempted: question.attempted ? "True" : "False",
      notAttempted: question.attempted ? "False" : "True",
      totalMarks: totalMarks,
      percentile: percentile,
      rank: rank,
      totalTimeTaken: totalTimeTaken,
    };

    const formData = new URLSearchParams();
    for (const [key, value] of Object.entries(questionData)) {
      formData.append(key, value);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzS78tkWZtpGAohkYo72RdKXEqFeVigUV4pa1WvUecCIZWoXbFUIgUQTwQOF6bCaLHc/exec",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        console.log(`Data for question ${index + 1} submitted successfully!`);
      } else {
        console.log(`Data submission for question ${index + 1} failed.`);
      }
    } catch (error) {
      console.error(`Error for question ${index + 1}:`, error);
    }
  }
}

function calculateMarks(question) {
  let marks = 0;
  if (question.attempted) {
    if (question.type === "SCQ" || question.type === "Numerical") {
      if (question.userSelectedOption === question.correctAnswer) {
        marks = 4;
      } else {
        marks = -1;
      }
    } else if (question.type === "MCQ") {
      let correctCount = 0;
      question.userSelectedOption.forEach((optionIndex) => {
        if (question.correctAnswer.includes(optionIndex)) {
          correctCount++;
        } else {
          correctCount--;
        }
      });
      if (correctCount === question.correctAnswer.length) {
        marks = 4;
      } else {
        marks = -2;
      }
    }
  }
  return marks;
}

function toggleContent(button) {
  const analysisItem = button.closest(".analysis-item2");
  const content = analysisItem.querySelector(".analysis-content2");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "flex";
    button.classList.add("active");
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
  } else {
    content.style.display = "none";
    button.classList.remove("active");
    button.innerHTML = '<i class="fas fa-chevron-down"></i>';
  }
}

function calculateRankAndPercentile(totalMarks) {
  for (const range of data) {
    if (totalMarks >= range.marks[0] && totalMarks <= range.marks[1]) {
      const marksRange = range.marks[1] - range.marks[0];
      const relativePosition = (totalMarks - range.marks[0]) / marksRange;
      const rank =
        range.rank[0] +
        Math.round(relativePosition * (range.rank[1] - range.rank[0]));
      const percentile =
        range.percentile[0] +
        relativePosition * (range.percentile[1] - range.percentile[0]);
      return { rank, percentile: percentile.toFixed(5) };
    }
  }
  return { rank: "Not Found", percentile: "Not Found" };
}

function displayQuestionsBySubject(subject) {
  const filteredQuestions = questions.filter((q) => q.subject === subject);

  const questionListHtml = filteredQuestions
    .map(
      (q, index) =>
        `
            <div class="question-item" data-question-index="${index}">
              <h4>Question ${index + 1}</h4>
              <p>${q.question}</p>
            </div>
          `
    )
    .join("");

  const displayQuestionContainer = document.getElementById("displayQuestion2");
  displayQuestionContainer.innerHTML = questionListHtml;

  // Scroll to the displayQuestion2 section
  displayQuestionContainer.scrollIntoView({ behavior: "smooth" });
}

function displayQuestionByIndex(index) {
  const question = questions[index - 1]; // Adjust index to be zero-based

  const questionHtml = `
          <div class="question-item">
            <h4>Question ${index}</h4>
            <p>${question.question}</p>
          </div>
        `;

  const displayQuestionContainer = document.getElementById("displayQuestion2");
  displayQuestionContainer.innerHTML = questionHtml;

  // Scroll to the displayQuestion2 section
  displayQuestionContainer.scrollIntoView({ behavior: "smooth" });
}

// Function to open the sidebar
function openSidebar() {
  document.getElementById("sidebar2").classList.add("open");
}

// Function to close the sidebar
function closeSidebar() {
  document.getElementById("sidebar2").classList.remove("open");
}

function jumpToQuestion2(index) {
  displayQuestion2(index);
  currentQuestionIndex2 = index;
  closeSidebar();
}

function switchToQuestionView() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("question-container2").style.display = "block";
  displayQuestion2(currentQuestionIndex2);
  showPerformanceAnalysis();
}

// Function to show the performance analysis and hide the question view
function switchToPerformanceAnalysis() {
  document.getElementById("result-container").style.display = "block";
  document.getElementById("question-container2").style.display = "none";
  displayQuestion2(currentQuestionIndex2);
  showPerformanceAnalysis();
}

// Function to display a question
async function displayQuestion2(index) {
  const questionContainer2 = document.getElementById("question-content2");
  const question = questions[index];

  // Calculate marks based on the type of question and the user's attempt
  let marks = 0;
  if (question.attempted) {
    if (question.type === "SCQ" || question.type === "Numerical") {
      if (question.userSelectedOption === question.correctAnswer) {
        marks = 4;
      } else {
        marks = -1;
      }
    } else if (question.type === "MCQ") {
      let correctCount = 0;
      question.userSelectedOption.forEach((optionIndex) => {
        if (question.correctAnswer.includes(optionIndex)) {
          correctCount++;
        } else {
          correctCount--;
        }
      });
      if (correctCount === question.correctAnswer.length) {
        marks = 4;
      } else {
        marks = -2;
      }
    }
  }

  let statusText = "";
  if (question.isMarked) {
    statusText = "Marked";
  } else if (question.isReviewed) {
    statusText = "Reviewed";
  }

  let questionHtml = `
    <div class="main-container3">
      <div class="header3">
        <div class="chapter-topic3">
          <h3>Chapter: ${question.chapters} | Topic: ${question.topics}</h3>
        </div>
        <div class="open-sidebar-btn2" onclick="openSidebar()">
          <i class="fas fa-bars"></i>
        </div>
      </div>

      <div class="sub-header3">
        <div class="time-spent3">
          <p>Time Spent: ${
            question.timeTaken ? question.timeTaken.toFixed(2) : 0
          } seconds</p>
        </div>
        <div class="marks3">
          <p>Marks: ${marks}</p>
        </div>
        <div class="status3">
          <p>Status: ${statusText}</p>
        </div>
      </div>

      <div class="content-container3">
        <div class="question-info3">
          <div class="question-text3">
            <div class="question-number3">
                      <span class="Quest-Num">${index + 1}</span>
                      <button class="report-btn" ${
                        question.report ? "disabled" : ""
                      } onclick="openReportModal(${index})"><i class="fas fa-exclamation-triangle"></i></button>
                  </div>
                  ${question.text}</div>
          ${
            question.image
              ? `<div class="question-image3"><img src="${question.image}" alt="Question Image"></div>`
              : ""
          }
        </div>
        <div class="options-info3">
  `;

  if (question.type === "SCQ" || question.type === "MCQ") {
    questionHtml += '<div class="options2">';
    const optionLetters = ["A", "B", "C", "D"];
    question.options.forEach((option, optionIndex) => {
      let optionClass = "option2";
      if (question.attempted) {
        if (question.type === "SCQ") {
          if (optionIndex === question.userSelectedOption) {
            optionClass +=
              optionIndex === question.correctAnswer
                ? " correctSol"
                : " incorrectSol";
          }
          if (
            optionIndex === question.correctAnswer &&
            optionIndex !== question.userSelectedOption
          ) {
            optionClass += " correctSol";
          }
        } else if (question.type === "MCQ") {
          if (question.userSelectedOption.includes(optionIndex)) {
            optionClass += question.correctAnswer.includes(optionIndex)
              ? " correctSol"
              : " incorrectSol";
          }
          if (
            question.correctAnswer.includes(optionIndex) &&
            !question.userSelectedOption.includes(optionIndex)
          ) {
            optionClass += " correctSol";
          }
        }
      } else {
        if (optionIndex === question.correctAnswer) {
          optionClass += " correctSol";
        }
      }
      questionHtml += `<div class="${optionClass}"><span class="option-letter3">${
        optionLetters[optionIndex]
      }</span><div class="option-content3">${option.text}${
        option.image ? `<img src="${option.image}" alt="Option Image">` : ""
      }</div></div>`;
    });
    questionHtml += "</div>";
  } else if (question.type === "Numerical") {
    if (question.attempted) {
      const userAnswerClass =
        question.userSelectedOption === question.correctAnswer
          ? "correct2"
          : "incorrect2";
      questionHtml += `<div class="numerical-answer23">Your Answer: ${question.userSelectedOption} | Correct Answer: ${question.correctAnswer}</div>`;
    } else {
      questionHtml += `<div class="numerical-answer23">Correct Answer: ${question.correctAnswer} <span>(Not Attempted)</span></div>`;
    }
  }

  questionHtml += `
        </div>
      </div>

      <div class="solution-container3">
        <div class="solution3">
          <div class="solution-text3"><h3>Solution:</h3><p>${
            question.solution.text
          }</p></div>
          ${
            question.solution.image
              ? `<div class="solution-image3"><img src="${question.solution.image}" alt="Solution Image"></div>`
              : ""
          }

        </div>
      </div>

    </div>


<!-- Report Modal -->
<div id="reportModal" class="modal">
<div class="modal-content">
  <span class="close" onclick="closeReportModal()">&times;</span>
  <h2>Report Issue</h2>
  <label for="reportReason" class="label">Select the issue:</label>
  <select id="reportReason" class="report-dropdown" onchange="handleReportReasonChange()">
      <option value="question">Mistake in Question</option>
      <option value="solution">Mistake in Solution</option>
      <option value="both">Mistake in Both</option>
      <option value="other">Other</option>
  </select>
  <textarea id="otherReason" class="report-textarea" placeholder="Please describe the issue" style="display:none;"></textarea>
  <div class="modal-footer">
      <button id="submitBtn" class="button" onclick="submitReport(${index})">Submit</button>
      <button class="button" onclick="closeReportModal()">Close</button>
  </div>
</div>

</div>


  `;

  questionContainer2.innerHTML = questionHtml;
  document.getElementById("question-index2").innerText = `Question ${
    index + 1
  } of ${questions.length}`;
  MathJax.typeset();
  updateSidebar2();
}

function openReportModal(questionIndex) {
  document.getElementById("reportModal").style.display = "block";
  document.getElementById("reportReason").value = "question";
  document.getElementById("otherReason").style.display = "none";
  document.getElementById("otherReason").value = "";
  window.currentQuestionIndex = questionIndex;
}

function closeReportModal() {
  document.getElementById("reportModal").style.display = "none";
}

function handleReportReasonChange() {
  const reportReason = document.getElementById("reportReason").value;
  if (reportReason === "other") {
    document.getElementById("otherReason").style.display = "block";
  } else {
    document.getElementById("otherReason").style.display = "none";
  }
}

async function submitReport(questionIndex) {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.innerText = "Submitting...";
  submitBtn.disabled = true;

  const reportReason = document.getElementById("reportReason").value;
  const otherReason = document.getElementById("otherReason").value;
  const reason = reportReason === "other" ? otherReason : reportReason;
  const userName = document.getElementById("user-name").textContent.trim();
  const reportData = {
    questionIndex: questionIndex + 1,
    reason: reason,
    userName: userName, // Replace with actual user name
    testName: "JEE Mains(24 Jan 2023- Morning)", // Replace with actual test name
    dateTime: new Date().toLocaleString(),
    questionText: questions[questionIndex].text,
  };

  const formBody = Object.keys(reportData)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(reportData[key])
    )
    .join("&");

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyYL4H_IPr5qUwyHYusvwrEGPeetmke4WFyeQ4t09oMl-oC43zXJ7rtpCyKXfjDFpCp/exec",
    {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (response.ok) {
    questions[questionIndex].report = true;
    submitBtn.innerText = "Submitted";
    setTimeout(closeReportModal, 1000);
  } else {
    alert("Failed to submit report.");
    submitBtn.innerText = "Submit";
    submitBtn.disabled = false;
  }
  displayQuestion2(questionIndex);
}
// Function to update the sidebar with question indices
function updateSidebar2() {
  const correctQuestions = document.getElementById("correct-questions2");
  const incorrectQuestions = document.getElementById("incorrect-questions2");
  const notAttemptedQuestions = document.getElementById(
    "not-attempted-questions2"
  );
  const markedQuestions = document.getElementById("marked-questions2");
  const reviewedQuestions = document.getElementById("reviewed-questions2");

  correctQuestions.innerHTML = "";
  incorrectQuestions.innerHTML = "";
  notAttemptedQuestions.innerHTML = "";
  markedQuestions.innerHTML = "";
  reviewedQuestions.innerHTML = "";

  questions.forEach((question, index) => {
    let questionBox = `<div class="question-box2" onclick="jumpToQuestion2(${index})">${
      index + 1
    }</div>`;

    if (question.correctAnswer === question.userSelectedOption) {
      correctQuestions.innerHTML += questionBox;
    } else if (
      question.attempted &&
      question.correctAnswer !== question.userSelectedOption
    ) {
      incorrectQuestions.innerHTML += questionBox;
    } else if (!question.attempted) {
      notAttemptedQuestions.innerHTML += questionBox;
    }

    if (question.isMarked) {
      markedQuestions.innerHTML += questionBox;
    }

    if (question.isReviewed) {
      reviewedQuestions.innerHTML += questionBox;
    }
  });
}

document.getElementById("prev-question2").addEventListener("click", () => {
  if (currentQuestionIndex2 > 0) {
    currentQuestionIndex2--;
    displayQuestion2(currentQuestionIndex2);
  }
});

document.getElementById("next-question2").addEventListener("click", () => {
  if (currentQuestionIndex2 < questions.length - 1) {
    currentQuestionIndex2++;
    displayQuestion2(currentQuestionIndex2);
  }
});

// Function to disable page refresh
function disableRefresh() {
  window.keydown = function () {
    return "Do you really want to leave this page?";
  };
  window.onbeforeunload = function () {
    return "Do you really want to leave this page?";
  };
}

window.addEventListener("beforeunload", function (e) {
  var confirmationMessage =
    "Are you sure you want to leave? Your changes may not be saved.";
  e.preventDefault(); // Standard for most browsers
  e.returnValue = confirmationMessage; // For legacy browsers
  return confirmationMessage; // For most modern browsers
});

// Optionally, to handle specific key combinations for refresh
window.addEventListener("keydown", function (e) {
  if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
    e.preventDefault();
    alert(
      "Refreshing the page will cause unsaved changes to be lost. Do you want to continue?"
    );
  }
});

function preventRefresh(event) {
  if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
    event.preventDefault();
    event.returnValue = "";
    return false;
  }
}

// Function to protect site content from being copied and disable right-click
function protectContent() {
  document.addEventListener("copy", (e) => {
    e.preventDefault();
  });

  document.addEventListener("cut", (e) => {
    e.preventDefault();
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  document.addEventListener("keydown", (e) => {
    if (
      e.ctrlKey &&
      (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83)
    ) {
      e.preventDefault();
    }
  });
}

// Function to prevent inspecting using keyboard shortcuts
function preventInspect() {
  document.addEventListener("keydown", (e) => {
    if (
      e.keyCode === 123 ||
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
      (e.ctrlKey && e.shiftKey && e.keyCode === 74)
    ) {
      e.preventDefault();
    }
  });
}

disableRefresh();
protectContent();
preventInspect();
