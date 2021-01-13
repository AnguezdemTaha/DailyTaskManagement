import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 
//all domains + to do : for a specific user + default domaines ....
router.get('/', async (req, res) => {
  const categories = await req.context.models.Categorie.find();
  return res.send(categories);
});
 
//on domain for sitting (update of this domain)
router.get('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.categorieId,
  );
  return res.send(categorie);
});

//list of domains of user : we neet session here
router.get('/user/c', async (req, res) => { //i dont know when lien cant be changed to /user/ only ??? car il ya deja un lien /:var donc il consedere ce user comm evar
  let sess = req.session;
  //const users;
  //console.log(sess.userId);
  if(sess.userId) {
    const categories = await req.context.models.Categorie.find({
      //discription:"test",
      user: sess.userId
    }
    );
    return res.send(categories);
  }
  else{
    return res.send(null);
  }
});
 
//update domain
router.put('/:id', async (req, res, next) => {
  
    req.context.models.Categorie.updateOne({_id: req.params.id}, {
      discription: req.body.discription,
      //user: req.context.me.id,
      categorieText: req.body.categorieText,

      }).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
});

//create domain
router.post('/', async (req, res, next) => {
  let sess = req.session;
  //const users;
  if(sess.userId) {
    const categorie = await req.context.models.Categorie.create({
      discription: req.body.discription,
      categorieText: req.body.categorieText,
      //user: req.body.id,
      user: sess.userId,
    
    }).catch((error) => next(new BadRequestError(error)));
    return res.send(categorie);
  }
  else{
    return res.send(null);
  }
  
 
  //return res.send(categorie);
});
 
//delete domain
router.delete('/:categorieId', async (req, res) => {
  const categorie = await req.context.models.Categorie.findById(
    req.params.categorieId,
  );
 
  if (categorie) {
    await categorie.remove();
  }
 
  return res.send(categorie);
});
 
export default router;