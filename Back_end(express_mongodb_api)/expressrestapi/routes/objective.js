import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 

//all tasks for a specific user + (user and domain) : to do
//all tasks
router.get('/', async (req, res) => {
<<<<<<< HEAD
  const objectives = await req.context.models.Objective.find();
  //session test
  //const sess=req.session;
  //if(sess.email) {
    return res.send(objectives);
=======
  const categories = await req.context.models.Categorie.find();
  //session test
  //const sess=req.session;
  //if(sess.email) {
    return res.send(categories);
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
  //}
});
 
//on task
<<<<<<< HEAD
router.get('/:objectiveId', async (req, res) => {
  const objective = await req.context.models.Objective.findById(
    req.params.objectiveId,
  );
  return res.send(objective);
=======
router.get('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.categorieId,
  );
  return res.send(categorie);
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
});
 

//list of taches of user
router.get('/user/:userId', async (req, res) => {
<<<<<<< HEAD
  const objectives = await req.context.models.objective.find({
    user: req.params.userId
  }
  );
  return res.send(objectives);
=======
  const categories = await req.context.models.Categorie.find({
    user: req.params.userId
  }
  );
  return res.send(categories);
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
});

//list of taches of domain( ofc a docim is specific to a user)
router.get('/categorie/:categorieId', async (req, res) => {
<<<<<<< HEAD
  const objectives = await req.context.models.Objective.find({
    categorie: req.params.categorieId
  }
  );
  return res.send(objectives);
});

//update create objective
router.post('/', async (req, res, next) => {
  const objective = await req.context.models.objective.create({
=======
  const categories = await req.context.models.Categorie.find({
    categorie: req.params.categorieId
  }
  );
  return res.send(categories);
});

//update create task
router.post('/', async (req, res, next) => {
  const categorie = await req.context.models.Categorie.create({
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
    discription: req.body.discription,
    user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
<<<<<<< HEAD
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
=======
  return res.send(categorie);
});
 
//delete task
router.delete('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.categorieId,
  );
 
  if (categorie) {
    await categorie.remove();
  }
 
  return res.send(categorie);
});
//fct : end task
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
 
export default router;