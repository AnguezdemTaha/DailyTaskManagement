import { Router } from 'express';
//import models from './../models';

import { BadRequestError } from '../utils/errors';
const router = Router();


//get all users

router.get('/', async (req, res) => {
  let sess = req.session;
  //const users;
  if(sess.username) {
    const users = await req.context.models.User.find();
  return res.send(users);
  }
  else {
    const users=null;
    return res.send(users);
  }
  //return res.send(users);
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
    mail: req.body.mail,
    password: req.body.password,
  
  }).catch((error) => next(new BadRequestError(error)));
  
 
  return res.send(user);
});


//login

router.post('/login', async (req, res, next) => {
//middleware for determination request sender ????  : i think enregestrate the user like session or ...

  console.log("two");
    //me: models.users[1],
  const  user = await req.context.models.User.findOne({username: req.body.username, password: req.body.password}); // call hte foncution
  //session test
  const sess=req.session;
  sess.password="test"; // equivalent to $_SESSION['email'] in PHP.
  sess.username="test";

  sess.me2=req.body;

  return res.send(user);
  //next();

});

router.post('/Logout', async (req, res, next) => {
  //middleware for determination request sender ????  : i think enregestrate the user like session or ...
  
    console.log("two");
      //me: models.users[1],
    const  user = await req.context.models.User.findOne({username: req.body.username, password: req.body.password}); // call hte foncution
    //session test
    const sess=req.session;
    sess.password=null; // equivalent to $_SESSION['email'] in PHP.
    sess.username=null;
  
    sess.me2=req.body;
  
    return res.send(user);
    //next();
  
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