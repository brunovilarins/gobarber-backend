import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Bruno Vilarins',
      email: 'brunovilarins@gmail.com',
      password_hash: '123456',
      provider: false,
    });
    return res.json(user);
  } catch (e) {
    return res.json({ message: e });
  }
});

export default routes;
