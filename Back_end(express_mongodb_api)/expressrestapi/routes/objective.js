import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 

//all tasks for a specific user + (user and domain) : to do
//all tasks
router.get('/', async (req, res) => {
  const objectives = await req.context.models.Objective.find();
  //session test
  //const sess=req.session;
  //if(sess.email) {
    return res.send(objectives);
  //}
});
 
//on task
router.get('/:objectiveId', async (req, res) => {
  const objective = await req.context.models.Objective.findById(
    req.params.objectiveId,
  );
  return res.send(objective);
});
 

//list of taches of user
router.get('/user/:userId', async (req, res) => {
  const objectives = await req.context.models.objective.find({
    user: req.params.userId
  }
  );
  return res.send(objectives);
});

//list of taches of domain( ofc a docim is specific to a user)
router.get('/categorie/:categorieId', async (req, res) => {
  const objectives = await req.context.models.Objective.find({
    categorie: req.params.categorieId
  }
  );
  return res.send(objectives);
});

//update create objective
router.post('/', async (req, res, next) => {
  const objective = await req.context.models.objective.create({
    discription: req.body.discription,
    user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(objective);
});
 
//delete objective
router.delete('/:objectiveId', async (req, res) => {
  const objective = await req.context.models.objective.findById(
    req.params.objectiveId,
  );
 
  if (objective) {
    await objective.remove();
  }
 
  return res.send(objective);
});
//fct : end objective
 
export default router;