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
<<<<<<< HEAD
  const categories = await req.context.models.categorie.find({
=======
  const categories = await req.context.models.Categorie.find({
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
    user: req.params.userId
  }
  );
  return res.send(categories);
});
 
//updata domain
router.post('/', async (req, res, next) => {
<<<<<<< HEAD
  const categorie = await req.context.models.categorie.create({
=======
  const categorie = await req.context.models.Categorie.create({
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d
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