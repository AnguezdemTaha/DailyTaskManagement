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
 
//on task  for updating if 
router.get('/:objectiveId', async (req, res) => {
  const objective = await req.context.models.Objective.findById(
    req.params.objectiveId,
  );
  return res.send(objective);
});
 

//list of taches of user : not important for now
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

//create objective
router.post('/', async (req, res, next) => {
  const objective = await req.context.models.Objective.create({
    discription: req.body.discription,
    objectiveText: req.body.objectiveText,
    categorie:req.body.categorie,
    //user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(objective);
});

//update objective
router.put('/:id', async (req, res, next) => {
  
  req.context.models.Objective.updateOne({_id: req.params.id}, {
    discription: req.body.discription,
    //user: req.context.me.id,
    objectiveText: req.body.objectiveText,
    
    //start_date: req.body.objectiveText,
    //end_date: req.body.objectiveText,
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