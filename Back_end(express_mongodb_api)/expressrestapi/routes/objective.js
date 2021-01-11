import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 

//all tasks for a specific user + (user and domain) : to do
//all tasks
router.get('/', async (req, res) => {
  const categories = await req.context.models.Categorie.find();
  //session test
  //const sess=req.session;
  //if(sess.email) {
    return res.send(categories);
  //}
});
 
//on task
router.get('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.categorieId,
  );
  return res.send(categorie);
});
 

//list of taches of user
router.get('/user/:userId', async (req, res) => {
  const categories = await req.context.models.Categorie.find({
    user: req.params.userId
  }
  );
  return res.send(categories);
});

//list of taches of domain( ofc a docim is specific to a user)
router.get('/categorie/:categorieId', async (req, res) => {
  const categories = await req.context.models.Categorie.find({
    categorie: req.params.categorieId
  }
  );
  return res.send(categories);
});

//update create task
router.post('/', async (req, res, next) => {
  const categorie = await req.context.models.Categorie.create({
    discription: req.body.discription,
    user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
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
 
export default router;