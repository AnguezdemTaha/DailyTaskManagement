import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
import { BadRequestError } from '../utils/errors';
const router = Router();
 
//all domains + to do : for a specific user + default domaines ....
router.get('/', async (req, res) => {
  const domains = await req.context.models.Domain.find();
  return res.send(domains);
});
 
//on domain
router.get('/:domainId', async (req, res) => {
  const domain = await req.context.models.Domain.findById(
    req.params.domainId,
  );
  return res.send(domain);
});
 
//updata domain
router.post('/', async (req, res, next) => {
  const domain = await req.context.models.Domain.create({
    discription: req.body.discription,
    user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(domain);
});
 
//delete domain
router.delete('/:domainId', async (req, res) => {
  const domain = await req.context.models.Domain.findById(
    req.params.messageId,
  );
 
  if (domain) {
    await domain.remove();
  }
 
  return res.send(domain);
});
 
export default router;