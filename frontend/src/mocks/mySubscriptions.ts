type SubscritionType = {
  _id: string;
  exam: string;
  completed: boolean;
  date: string;
  mark?: string;
  class?: string;
};

export const mySubscriptions : SubscritionType[] = [
  {
    _id: "sub_001",
    exam: "Matematica",
    class: "1A",
    mark: "10",
    completed: false,
    date: "20/06/2024",
  },
  {
    _id: "sub_002",
    exam: "Italiano",
    class: "2B",
    mark: "8",
    completed: true,
    date: "15/05/2024",
  },
  {
    _id: "sub_003",
    exam: "Scienze ",
    class: "3C",
    mark: "6",
    completed: false,
    date: "10/07/2024",
  },
  {
    _id: "sub_004",
    exam: "Storia ",
    class: "1D",
    mark: "7",
    completed: true,
    date: "05/06/2024",
  },
  {
    _id: "sub_005",
    exam: "Geografia",
      class: "2E",
    mark: "9",
    completed: false,
    date: "25/06/2024",
  },
  {
    _id: "sub_006",
    exam: "Inglese",
    class: "3F",
    mark: "8",
    completed: true,
    date: "30/05/2024",
  },
  {
    _id: "sub_007",
    exam: "Fisica",
    class: "1G",
    mark: "6",
    completed: false,
    date: "15/07/2024",
  },
  {
    _id: "sub_008",
    exam: "Chimica",
    class: "2H",
    mark: "7",
    completed: true,
    date: "12/06/2024",
  },
  {
    _id: "sub_009",
    exam: "Biologia",
    class: "3I",
    mark: "9",
    completed: false,
    date: "20/07/2024",
  },
  {
    _id: "sub_010",
    exam: "Arte",
    class: "1J",
    mark: "10",
    completed: true,
    date: "18/05/2024",
  },
];
