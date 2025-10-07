type MySubscription = {
  _id: string;
  exam: string;
  class: string;
  completed: boolean;
  date: string;
  grade?: number;
};

export const mySubscriptions: MySubscription[] = [
  {
    _id: "sub_001",
    exam: "Matematica",
    class: "1A",
    completed: false,
    date: "20/06/2024",
  },
  {
    _id: "sub_002",
    exam: "Italiano",
    class: "2B",
    completed: true,
    date: "15/05/2024",
    grade: 8,
  },
  {
    _id: "sub_003",
    exam: "Scienze",
    class: "3C",
    completed: false,
    date: "10/07/2024",
  },
  {
    _id: "sub_004",
    exam: "Storia",
    class: "1D",
    completed: true,
    date: "05/06/2024",
    grade: 9
  },
  {
    _id: "sub_005",
    exam: "Geografia",
    class: "2E",
    completed: false,
    date: "25/06/2024",
  },
  {
    _id: "sub_006",
    exam: "Inglese",
    class: "3F",
    completed: true,
    date: "30/05/2024",
    grade: 1
  },
  {
    _id: "sub_007",
    exam: "Fisica",
    class: "1G",
    completed: false,
    date: "15/07/2024",
  },
  {
    _id: "sub_008",
    exam: "Chimica",
    class: "2H",
    completed: true,
    date: "12/06/2024",
    grade: 6
  },
  {
    _id: "sub_009",
    exam: "Biologia",
    class: "3I",
    completed: false,
    date: "20/07/2024",
  },
  {
    _id: "sub_010",
    exam: "Arte",
    class: "1J",
    completed: true,
    date: "18/05/2024",
    grade: 5
  },
];
