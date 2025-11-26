import { dbClient } from "../lib/db.js";
import userModel from "../models/users.js";
import subscriptionModel from "../models/subscriptions.js";
import examsModel from "../models/exams.js";
import { questions } from "../mocks/questions.js";


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
      _id: "sub_001",
      exam_id: "exam_001",
      student_id: "student_001",
      status: "to-do",
      grade: 0,
      questions: [
        { question_id: "q_001", responses: [{ answer_id: "a_001_1" }] },
        { question_id: "q_002", responses: [{ answer_id: "a_002_1" }] },
        { question_id: "q_003", responses: [{ answer_id: "a_003_1" }] },
        { question_id: "q_004", responses: [{ answer_id: "a_004_1" }] },
        { question_id: "q_005", responses: [{ answer_id: "a_005_1" }] },
        { question_id: "q_006", responses: [{ answer_id: "a_006_1" }] },
        { question_id: "q_007", responses: [{ answer_id: "a_007_1" }] },
        { question_id: "q_008", responses: [{ answer_id: "a_008_1" }] },
        { question_id: "q_009", responses: [{ answer_id: "a_009_1" }] },
        { question_id: "q_010", responses: [{ answer_id: "a_010_1" }] },
      ],
    },
  ]);
  const exams = await examsModel.create([{
      _id: "exam_001",
      name: "Quiz Generale 1",
      schedule_date: "2025-01-15",
      max_time: 1800,
      questions: questions,
    }]);


  process.exit(0);
})().catch((error) => console.error(error));
