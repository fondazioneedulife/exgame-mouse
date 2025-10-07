type SubscriptionType = {
  _id:string;
  exam:string;
  completed:boolean;
  date:string;
  grade?: number;
};


export const mySubscriptions: SubscriptionType[] = [
  {
    _id: "sub_001",
    exam: "Matematica - 1A",
    completed: false,
    date: "20/06/2024",
  },
  {
    _id: "sub_002",
    exam: "Italiano - 2B",
    completed: true,
    date: "15/05/2024",
    grade: 9,
  },
  {
    _id: "sub_003",
    exam: "Scienze - 3C",
    completed: false,
    date: "10/07/2024",
  },
  {
    _id: "sub_004",
    exam: "Storia - 1D",
    completed: true,
    date: "05/06/2024",
  },
  {
    _id: "sub_005",
    exam: "Geografia - 2E",
    completed: false,
    date: "25/06/2024",
  },
  {
    _id: "sub_006",
    exam: "Inglese - 3F",
    completed: true,
    date: "30/05/2024",
  },
  {
    _id: "sub_007",
    exam: "Fisica - 1G",
    completed: false,
    date: "15/07/2024",
  },
  {
    _id: "sub_008",
    exam: "Chimica - 2H",
    completed: true,
    date: "12/06/2024",
  },
  {
    _id: "sub_009",
    exam: "Biologia - 3I",
    completed: false,
    date: "20/07/2024",
  },
  {
    _id: "sub_010",
    exam: "Arte - 1J",
    completed: true,
    date: "18/05/2024",
  },
];
