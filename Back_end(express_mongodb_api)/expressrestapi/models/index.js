import mongoose from 'mongoose';
 
import User from './user';
import Task from './task';
import Evaluation from './evaluation';
import Domain from './domain';

 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
 
const models = { User, Task, Domain, Evaluation};
 
export { connectDb };
 
export default models;