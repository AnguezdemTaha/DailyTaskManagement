import { Router } from 'express';
//import models from './../models';

import { BadRequestError } from '../utils/errors';
const router = Router();



//for tests

router.get('/test/t', async (req, res) => {
  let sess = req.session;

    //const users = await req.context.models.User.find();
  return res.send("test");
});

//get all users

router.get('/', async (req, res) => {
  let sess = req.session;
  //const users;
  //if(sess.username) {
    const users = await req.context.models.User.find();
  /*return res.send(users);
  }
  else {
    const users=null;
    return res.send(users);
  }*/
  return res.send(users);
});
 

//get one user : for sittings view informationof user ?how we can do it with session

router.get('/user/u', async (req, res) => {
  let sess = req.session;

  const user = await req.context.models.User.findById(
    sess.userId,
  );
  //session test
  
  //sess.email="test"; // equivalent to $_SESSION['email'] in PHP.
  //sess.username="test";
  
  return res.send(user);
});


//get one user : session for now

router.get('/user/getcurrentuser', async (req, res) => {
  let sess = req.session;
  const user = await req.context.models.User.findById(
    sess.userId
  );
  //session test
  
  
  
  return res.send(user);
});


//create user
router.post('/', async (req, res, next) => {
  
  const user = await req.context.models.User.create({
    username: req.body.username,
    //user: req.context.me.id,
    mail: req.body.mail,
    password: req.body.password,
  
  }).catch((error) => next(new BadRequestError(error)));
  

  return res.send(user);
 
});

//update user by him self so he need session not the id
router.put('/', async (req, res, next) => {
  /*const usert = new User({
    username: req.body.username,
    //user: req.context.me.id,
    mail: req.body.mail,
    password: req.body.password,
  
  });*/

  /*req.context.models.User.findByIdAndUpdate({_id: req.params.id}, {
    username: req.body.username,
    //user: req.context.me.id,
    mail: req.body.mail,
    password: req.body.password,
  
    });*/
    let sess = req.session;

    req.context.models.User.updateOne({_id: sess.userId}, {
      username: req.body.username,
      //user: req.context.me.id,
      mail: req.body.mail,
      password: req.body.password,
    
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

  /*const user = await req.context.models.User.create({
    username: req.body.username,
    //user: req.context.me.id,
    mail: req.body.mail,
    password: req.body.password,
  
  }).catch((error) => next(new BadRequestError(error)));*/
  
 
  //return res.send(user);
});


//login

router.post('/login', async (req, res, next) => {
//middleware for determination request sender ????  : i think enregestrate the user like session or ...

  
    //me: models.users[1],
  const  user = await req.context.models.User.findOne({username: req.body.username, password: req.body.password}); // call hte foncution
  //session test
  const sess=req.session;
  //sess.password="test"; // equivalent to $_SESSION['email'] in PHP.
  //sess.username="test"; //user.username ? ?can we put an object in session ?
  
  if(user != null){
    sess.userId=user._id;
    sess.password=user.password; // equivalent to $_SESSION['email'] in PHP.
    sess.username=user.username;
    sess.email=user.mail;

    console.log(sess.userId);
  }

  //sess.me2=req.body;

  console.log(user);
  return res.send(user);
  //next();

});

router.post('/Logout', async (req, res, next) => {
  //middleware for determination request sender ????  : i think enregestrate the user like session or ...
  
    console.log("two");
      //me: models.users[1],
    //const  user = await req.context.models.User.findOne({username: req.body.username, password: req.body.password}); // call hte foncution
    //session test
    const sess=req.session;
    sess.userId=null
    sess.password=null; // equivalent to $_SESSION['email'] in PHP.
    sess.username=null;
    sess.email=null;
  
    //sess.me2=req.body;
  
    //return res.send(user);
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