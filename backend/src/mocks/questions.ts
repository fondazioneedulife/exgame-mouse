import type { ExamType } from "./types";

export const questions: ExamType[] = [
  {
    _id: "exam_001",
    name: "Quiz Generale",
    schedule_date: "2024-01-15",
    max_time: 1800,
    questions: [
      {
        _id: "q_001",
        text: "Qual è la capitale della Francia",
        type: "single-choice",
        answers: [
          {
            _id: "a_001_1",
            answer: "Parigi",
            is_correct: true,
          },
          {
            _id: "a_001_2",
            answer: "Lione",
            is_correct: false,
          },
          {
            _id: "a_001_3",
            answer: "Marsigilia",
            is_correct: false,
          },
          {
            _id: "a_001_4",
            answer: "Nizza",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_002",
        text: "Chi ha scritto 'La Divina Commedia'",
        type: "single-choice",
        answers: [
          {
            _id: "a_002_1",
            answer: "Dante Alighieri",
            is_correct: true,
          },
          {
            _id: "a_002_2",
            answer: "Petrarca",
            is_correct: false,
          },
          {
            _id: "a_002_3",
            answer: "Boccaccio",
            is_correct: false,
          },
          {
            _id: "a_002_4",
            answer: "Manzoni",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_003",
        text: "Qual è il pianeta più vicino al Sole",
        type: "single-choice",
        answers: [
          {
            _id: "a_003_1",
            answer: "Mercurio",
            is_correct: true,
          },
          {
            _id: "a_003_2",
            answer: "Venere",
            is_correct: false,
          },
          {
            _id: "a_003_3",
            answer: "Terra",
            is_correct: false,
          },
          {
            _id: "a_003_4",
            answer: "Marte",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_004",
        text: "In che anno è iniziata la Seconda Guerra Mondiale",
        type: "single-choice",
        answers: [
          {
            _id: "a_004_1",
            answer: "1939",
            is_correct: true,
          },
          {
            _id: "a_004_2",
            answer: "1914",
            is_correct: false,
          },
          {
            _id: "a_004_3",
            answer: "1945",
            is_correct: false,
          },
          {
            _id: "a_004_4",
            answer: "1929",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_005",
        text: "Qual è la formula chimica dell'acqua",
        type: "single-choice",
        answers: [
          {
            _id: "a_005_1",
            answer: "H2O",
            is_correct: true,
          },
          {
            _id: "a_005_2",
            answer: "CO2",
            is_correct: false,
          },
          {
            _id: "a_005_3",
            answer: "O2",
            is_correct: false,
          },
          {
            _id: "a_005_4",
            answer: "NaCl",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_006",
        text: "Chi dipinse la Gioconda",
        type: "single-choice",
        answers: [
          {
            _id: "a_006_1",
            answer: "Leonardo da Vinci",
            is_correct: true,
          },
          {
            _id: "a_006_2",
            answer: "Michelangelo",
            is_correct: false,
          },
          {
            _id: "a_006_3",
            answer: "Raffaello",
            is_correct: false,
          },
          {
            _id: "a_006_4",
            answer: "Caravaggio",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_007",
        text: "Qual è la montagna più alta del mondo",
        type: "single-choice",
        answers: [
          {
            _id: "a_007_1",
            answer: "Everest",
            is_correct: true,
          },
          {
            _id: "a_007_2",
            answer: "K2",
            is_correct: false,
          },
          {
            _id: "a_007_3",
            answer: "Kangchenjunga",
            is_correct: false,
          },
          {
            _id: "a_007_4",
            answer: "Makalu",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_008",
        text: "Quanti sono i pianeti del Sistema Solare",
        type: "single-choice",
        answers: [
          {
            _id: "a_008_1",
            answer: "8",
            is_correct: true,
          },
          {
            _id: "a_008_2",
            answer: "7",
            is_correct: false,
          },
          {
            _id: "a_008_3",
            answer: "9",
            is_correct: false,
          },
          {
            _id: "a_008_4",
            answer: "10",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_009",
        text: "Qual è la lingua più parlata al mondo",
        type: "single-choice",
        answers: [
          {
            _id: "a_009_1",
            answer: "Cinese mandarino",
            is_correct: true,
          },
          {
            _id: "a_009_2",
            answer: "Inglese",
            is_correct: false,
          },
          {
            _id: "a_009_3",
            answer: "Spagnolo",
            is_correct: false,
          },
          {
            _id: "a_009_4",
            answer: "Hindi",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_010",
        text: "Chi ha inventato il telefono",
        type: "single-choice",
        answers: [
          {
            _id: "a_010_1",
            answer: "Alexander Graham Bell",
            is_correct: true,
          },
          {
            _id: "a_010_2",
            answer: "Edison",
            is_correct: false,
          },
          {
            _id: "a_010_3",
            answer: "Marconi",
            is_correct: false,
          },
          {
            _id: "a_010_4",
            answer: "Tesla",
            is_correct: false,
          },
        ],
      },
    ],
    find: undefined,
  },
  {
    _id: "exam_002",
    name: "Quiz Generale Avanzato",
    schedule_date: "2024-01-20",
    max_time: 2400, // 40 minutes
    questions: [
      {
        _id: "q_011",
        text: "Qual è il fiume più lungo del mondo",
        type: "single-choice",
        answers: [
          {
            _id: "a_011_1",
            answer: "Nilo",
            is_correct: true,
          },
          {
            _id: "a_011_2",
            answer: "Amazonas",
            is_correct: false,
          },
          {
            _id: "a_011_3",
            answer: "Yangtze",
            is_correct: false,
          },
          {
            _id: "a_011_4",
            answer: "Mississippi",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_012",
        text: "In quale anno è stata scoperta l'America da Cristoforo Colombo",
        type: "single-choice",
        answers: [
          {
            _id: "a_012_1",
            answer: "1492",
            is_correct: true,
          },
          {
            _id: "a_012_2",
            answer: "1453",
            is_correct: false,
          },
          {
            _id: "a_012_3",
            answer: "1519",
            is_correct: false,
          },
          {
            _id: "a_012_4",
            answer: "1607",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_013",
        text: "Qual è l'elemento chimico con numero atomico 1",
        type: "single-choice",
        answers: [
          {
            _id: "a_013_1",
            answer: "Idrogeno",
            is_correct: true,
          },
          {
            _id: "a_013_2",
            answer: "Elio",
            is_correct: false,
          },
          {
            _id: "a_013_3",
            answer: "Litio",
            is_correct: false,
          },
          {
            _id: "a_013_4",
            answer: "Carbonio",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_014",
        text: "Chi è l'autore di '1984'",
        type: "single-choice",
        answers: [
          {
            _id: "a_014_1",
            answer: "George Orwell",
            is_correct: true,
          },
          {
            _id: "a_014_2",
            answer: "Aldous Huxley",
            is_correct: false,
          },
          {
            _id: "a_014_3",
            answer: "Ray Bradbury",
            is_correct: false,
          },
          {
            _id: "a_014_4",
            answer: "Philip K. Dick",
            is_correct: false,
          },
        ],
      },
      {
        _id: "q_015",
        text: "Qual è la capitale del Giappone",
        type: "single-choice",
        answers: [
          {
            _id: "a_015_1",
            answer: "Tokyo",
            is_correct: true,
          },
          {
            _id: "a_015_2",
            answer: "Osaka",
            is_correct: false,
          },
          {
            _id: "a_015_3",
            answer: "Kyoto",
            is_correct: false,
          },
          {
            _id: "a_015_4",
            answer: "Hiroshima",
            is_correct: false,
          },
        ],
      },
    ],
    find: undefined,
  },
];