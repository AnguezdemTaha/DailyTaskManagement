import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 

//all tasks for a specific user + (user and domain) : to do
//all tasks
router.get('/', async (req, res) => {
  const tasks = await req.context.models.Task.find();
  //session test
  //const sess=req.session;
  //if(sess.email) {
    return res.send(tasks);
  //}
});
 
//on task
router.get('/:taskId', async (req, res) => {
  const task = await req.context.models.Task.findById(
    req.params.taskId,
  );
  return res.send(task);
});
 

//list of taches of user
router.get('/user/:userId', async (req, res) => {
  const tasks = await req.context.models.Task.find({
    user: req.params.userId
  }
  );
  return res.send(tasks);
});

//list of taches of domain( ofc a docim is specific to a user)
router.get('/domain/:domainId', async (req, res) => {
  const tasks = await req.context.models.Task.find({
    domain: req.params.domainId
  }
  );
  return res.send(tasks);
});

//update create task
router.post('/', async (req, res, next) => {
  const task = await req.context.models.Task.create({
    discription: req.body.discription,
    user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(task);
});
 
//delete task
router.delete('/:taskId', async (req, res) => {
  const task = await req.context.models.Task.findById(
    req.params.taskId,
  );
 
  if (task) {
    await task.remove();
  }
 
  return res.send(task);
});
//fct : end task
 
export default router;