import { Router } from 'express';
//import models from './../models';
const router = Router();
 
router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});
 
router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});
 
export default router;