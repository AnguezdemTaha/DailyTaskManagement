import { Router } from 'express';
 
const router = Router();
 
router.get('/', async (req, res) => {
  //return res.send(req.context.models.users[req.context.me.id]);
  
    const user = await req.context.models.User.findById(
      req.context.me.id,
    );
    return res.send(user);
  
});
 
export default router;