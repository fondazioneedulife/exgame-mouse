// mocks/user.ts
// Mock user usabile negli altri mock
import { IUser } from '../dao/exams.dao'; // path relativo alla tua struttura

const userMock: IUser & { _id?: string } = {
  name: 'Mario Rossi',
  email: 'mario.rossi@example.com',
  // password hashed placeholder (se popoli DB di sviluppo, sostituisci con hash reale)
  password: '$2b$10$aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  role: 'user',
  // opzionale _id per riferimenti nei mock:
  _id: '64a1f0b2c3d4e5f678901234'
};

export default userMock;
export const userMockWithId = { ...userMock, _id: userMock._id };