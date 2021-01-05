import mongoose from 'mongoose';
 
import User from './user';
import Objective from './objective';
import Evaluation from './evaluation';
import Categorie from './categorie';

 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
 
const models = { User, Objective, Categorie, Evaluation};
 
export { connectDb };
 
export default models;