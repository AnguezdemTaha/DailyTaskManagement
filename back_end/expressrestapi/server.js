import routes from './routes';
import 'dotenv/config';
import models, { connectDb } from './models';
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//middleware for determination request sender ????  : i think enregestrate the user like session or ...
app.use(async (req, res, next) => {
  req.context = {
    models,
    //me: models.users[1],
    me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

//not matched routes
app.get('*', function (req, res, next) {
  const error = new Error(
    `${req.ip} tried to access ${req.originalUrl}`,
  );
 
  error.statusCode = 301;
 
  next(error);
});
//handling errors midlwere
app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;
 
  if (error.statusCode === 301) {
    return res.status(301).redirect('/not-found');
  }
  return res.status(error.statusCode).json({ error: error.toString() });
});


//re-initialize your database on every Express server start,
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
//re-initialize your database on every Express server start,
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
  }

  createUsersWithMessages();
//
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
});
const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });
 
  const user2 = new models.User({
    username: 'ddavids',
  });
 
  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });
 
  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });
 
  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });
 
  await message1.save();
  await message2.save();
  await message3.save();
 
  await user1.save();
  await user2.save();
};