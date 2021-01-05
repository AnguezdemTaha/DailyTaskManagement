import mongoose from 'mongoose';
 
const objectiveSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    start_date: {
      type: Date,
      //required: true,
    },
    end_date: {
      type: Date,
      //required: true,
    },
    type: {
      type: String,
      //required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate task with user(one to many)
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie' },//associate task with domain(one to many)
    evaluation: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation' },
  },
  { timestamps: true },
);
 
const Objective = mongoose.model('objective', objectiveSchema);
 
export default Objective;

