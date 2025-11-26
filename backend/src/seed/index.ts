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

  // const exams = await examsModel.create([{
  //     _id: "exam_001",
  //     name: "Quiz Generale 1",
  //     schedule_date: "2025-01-15",
  //     max_time: 1800,
  //     questions: questions,
  //   }]);

  process.exit(0);
})().catch((error) => console.error(error));
