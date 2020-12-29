import { Router } from 'express';
//import models from './../models';
const router = Router();


//get all users

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});
 

//get one user

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  //session test
  const sess=req.session;
  sess.email="test"; // equivalent to $_SESSION['email'] in PHP.
  sess.username="test";
  
  return res.send(user);
});

//update user
router.post('/', async (req, res, next) => {
  const user = await req.context.models.User.create({
    username: req.body.username,
    //user: req.context.me.id,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(user);
});


//login

router.post('/login', async (req, res, next) => {
//middleware for determination request sender ????  : i think enregestrate the user like session or ...

  console.log("two");
  req.context = {
    models,
    //me: models.users[1],
    me: await models.User.findByLogin(req.body.username,req.body.password), // call hte foncution
  };
  next();

});


//delete user
router.delete('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
 
  if (user) {
    await user.remove();
  }
 
  return res.send(user);
});


//list of domains of user
router.get('/:userId', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});



export default router;