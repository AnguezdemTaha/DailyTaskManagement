import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 
//all domains + to do : for a specific user + default domaines ....
router.get('/', async (req, res) => {
  const categories = await req.context.models.Categorie.find();
  return res.send(categories);
});
 
//on domain
router.get('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.categorieId,
  );
  return res.send(categorie);
});

//list of domains of user
router.get('/:userId', async (req, res) => {
  const categories = await req.context.models.Categorie.find({
    user: req.params.userId
  }
  );
  return res.send(categories);
});
 
//updata domain
router.post('/', async (req, res, next) => {
  const categorie = await req.context.models.Categorie.create({
    discription: req.body.discription,
    user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(categorie);
});
 
//delete domain
router.delete('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.messageId,
  );
 
  if (categorie) {
    await categorie.remove();
  }
 
  return res.send(categorie);
});
 
export default router;