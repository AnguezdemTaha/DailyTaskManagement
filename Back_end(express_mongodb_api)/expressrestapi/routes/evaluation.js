import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
  
//on evaluation 
router.get('/:evaluationId', async (req, res) => {
  const evaluation = await req.context.models.Evaluation.findById(
    req.params.evaluationId,
  );
  return res.send(evaluation);
});
 
//update create evaluation if the time < ....  : a faire
router.post('/', async (req, res, next) => {
  const evaluation = await req.context.models.Evaluation.create({
    //add condition : if time <endtime ....
    discription: req.body.discription,
    user: req.context.me.id,
    //task: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(evaluation);
});
 
//delete evaluation
router.delete('/:evaluationId', async (req, res) => {
  const evaluation = await req.context.models.Evaluation.findById(
    req.params.evaluationId,
  );
 
  if (evaluation) {
    await evaluation.remove();
  }
 
  return res.send(evaluation);
});
 
export default router;