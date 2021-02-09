import routes from './routes';
import 'dotenv/config';
import models, { connectDb } from './models';

const session = require('express-session');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//session test
//app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
//var sess;
//session test
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
var sess;
//middleware for determination request sender ????  : i think enregestrate the user like session or ...
app.use(async (req, res, next) => {
  req.context = {
    models,
    //me: models.users[1],..
    me: await models.User.findByLogin('zakaria@gmail.com','zakaria'),
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/objectifs', routes.objective);
app.use('/categories', routes.categorie);
app.use('/evaluations', routes.evaluation);

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
      models.Objective.deleteMany({}),
      models.Categorie.deleteMany({}),
      models.Evaluation.deleteMany({}),
    ]);
  }

  createUsersWithMessages();
//
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
});


const createUsersWithMessages = async () => {
//users
  const user1 = new models.User({
    username: 'zakaria',
    mail : 'zakaria@gmail.com',
    password : 'zakaria',
  });
 
  const user2 = new models.User({
    username: 'taha',
    mail : 'taha@gmail.com',
    password : 'taha',
  });

//categories
  const categirie1 = new models.Categorie({
    discription: 'une categorie de sport ...',
    categorieText: 'sports',
    user: user1.id,
  });
  const categirie2 = new models.Categorie({
    discription: 'une categorie detudes ...',
    categorieText: 'studies',
    user: user2.id,
  });
  const categirie3 = new models.Categorie({
    discription: 'une categorie de la famille ...',
    categorieText: 'family',
    user: user1.id,
  });

//evaluatoins
const ev1 = new models.Evaluation({
  discription: 'objective réalise avec succé mais avec moin de concentration',
  note: 4,
});
const ev2 = new models.Evaluation({
  discription: 'perfect realisation',
  note: 5,
});

//objectifs
const task1 = new models.Objective({
  discription: '10km course dans 1h',
  objectiveText: '1h sport',
  //user: user1.id,
//  end_date:Date.now(),
end_date:Date.parse('28 Jan 2021 00:00 GMT'),

  categorie: categirie1.id,
  evaluation: ev1.id,
});

const task2 = new models.Objective({
  discription: '2h de marche soit seul soit avec les amis ...',
  objectiveText: '2h marche',
  //user: user1.id,
  end_date:Date.parse('29 Jan 2021 00:00 GMT'),
  categorie: categirie3.id,
  evaluation: ev2.id,
});

const task3 = new models.Objective({
  discription: 'objective de test',
  objectiveText: 'test',
  //user: user2.id,
  end_date:Date.parse('30 Jan 2021 00:00 GMT'),
  categorie: categirie2.id,
  //evaluation: null,
});

const task4 = new models.Objective({
  discription: 'objective de test',
  objectiveText: 'test2',
  //user: user2.id,
  end_date:Date.parse('8 Feb 2021 6:50 GMT'),
  categorie: categirie1.id,
  //evaluation: null,
});
  //to do :
  /*const domain = new models.Task({
    discription: 'Published a complete ...',
    user: user2.id,
  });

  const task3 = new models.Task({
    discription: 'Published a complete ...',
    user: user2.id,
  });

  const task3 = new models.Task({
    discription: 'Published a complete ...',
    user: user2.id,
  });

  const task3 = new models.Task({
    discription: 'Published a complete ...',
    user: user2.id,
  });*/
 
  await user1.save();
  await user2.save();

  await categirie1.save();
  await categirie2.save();
  await categirie3.save();

  await ev1.save();
  await ev2.save();

  await task1.save();
  await task2.save();
  await task3.save();
  //await task4.save();
 
  
};