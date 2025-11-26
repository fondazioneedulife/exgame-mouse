import { Router } from 'express';
import bcrypt from 'bcrypt';
import { UsersDAO, IUser } from '../dao/exams.dao';


const router = Router();
const usersDao = new UsersDAO();

/**
 * POST /api/user
 * - per il laboratorio il body può essere statico (qui accettiamo req.body se presente)
 * - tipizzato con IUser
 */
router.post('/api/user', async (req, res) => {
  try {
    // usa req.body se presente, altrimenti body statico come richiesto
    const body = (req.body && Object.keys(req.body).length) ? req.body : {
      name: 'Mario Rossi',
      email: 'mario.rossi@example.com',
      password: 'changeme',
    };

    if (!body.name || !body.email || !body.password) {
      return res.status(400).json({ message: 'name, email and password are required' });
    }

    // verifica esistenza
    const existing = await usersDao.findByEmail(body.email);
    if (existing) return res.status(409).json({ message: 'Email already in use' });

    // hash della password (10 salt rounds)
    const hashed = await bcrypt.hash(body.password, 10);

    const created = await usersDao.create({
      name: body.name,
      email: body.email,
      password: hashed,
      role: body.role || 'user',
    } as IUser);

    // non restituire la password
    const safe = ((created as any).toObject) ? (created as any).toObject() : created;
    if (safe && safe.password) delete safe.password;

    return res.status(201).json(safe);
  } catch (err) {
    console.error('POST /api/user error', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;