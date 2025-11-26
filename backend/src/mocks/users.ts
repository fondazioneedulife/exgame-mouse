import { Iuser } from "../models/users";

export const users: Iuser[] = [
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
];
