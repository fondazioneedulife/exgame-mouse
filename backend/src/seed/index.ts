import { dbClient } from "../lib/db.js";
import examsModel from "../models/exams.js";
import subscriptionModel from "../models/subscriptions.js";
import userModel from "../models/users.js";

(async () => {
  await dbClient();

  await userModel.deleteMany({});
  await subscriptionModel.deleteMany({});
  await examsModel.deleteMany({});

  const users = await userModel.create([
    {
      id: "student_001",
      first_name: "Mario",
      last_name: "Rossi",
      email: "mario.rossi@example.com",
      password: "mariottini123",
      image: "https://example.com/images/mario_rossi.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user",
      data: {},
    },
  ]);

  const subscriptions = await subscriptionModel.create([
    {
      _id: "sub1",
      student_id: "student1",
      exam_id: "exam1",
      questions: [
        {
          question_id: "q1",
          responses: [{ answer_id: "a1" }, { answer_id: "a3" }],
        },
        {
          question_id: "q2",
          responses: [{ answer_id: "a2" }],
        },
      ],
    },
    {
      _id: "sub2",
      student_id: "student2",
      exam_id: "exam2",
      questions: [
        {
          question_id: "q3",
          responses: [{ answer_id: "a4" }],
        },
        {
          question_id: "q4",
          responses: [{ answer_id: "a5" }, { answer_id: "a6" }],
        },
      ],
    },
    {
      _id: "sub3",
      student_id: "student3",
      exam_id: "exam1",
      questions: [
        {
          question_id: "q1",
          responses: [{ answer_id: "a2" }],
        },
        {
          question_id: "q5",
          responses: [{ answer_id: "a7" }],
        },
      ],
    },
  ]);

    const exams = await examsModel.create([
      {
        id: "exam_001",
        name: "Quiz Generale 1",
        created_at: new Date(),
        updated_at: new Date(),
        created_by: "admin_001",
        schedule_date: new Date("2025-01-15T10:00:00"),
        max_time: 1800, // secondi, es. 30 minuti
        questions: [
          {
            question_id: "q_001",
            text: "Qual è la capitale d'Italia?",
            type: "single-choice",
            answers: [
              { answer_id: "a_001_1", text: "Roma", is_correct: true },
              { answer_id: "a_001_2", text: "Milano", is_correct: false },
              { answer_id: "a_001_3", text: "Napoli", is_correct: false },
            ],
          },
          {
            question_id: "q_002",
            text: "Quali sono i colori della bandiera italiana?",
            type: "multiple-choice",
            answers: [
              { answer_id: "a_002_1", text: "Verde", is_correct: true },
              { answer_id: "a_002_2", text: "Blu", is_correct: false },
              { answer_id: "a_002_3", text: "Bianco", is_correct: true },
              { answer_id: "a_002_4", text: "Rosso", is_correct: true },
            ],
          },
          {
            question_id: "q_003",
            text: "In che anno è caduto l'Impero Romano d'Occidente?",
            type: "single-choice",
            answers: [
              { answer_id: "a_003_1", text: "476 d.C.", is_correct: true },
              { answer_id: "a_003_2", text: "410 d.C.", is_correct: false },
              { answer_id: "a_003_3", text: "1453 d.C.", is_correct: false },
            ],
          },
        ],
      },
    ]);

  process.exit(0);
})().catch((error) => console.error(error));
