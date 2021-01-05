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
 
<<<<<<< HEAD:Back_end(express_mongodb_api)/expressrestapi/models/objective.js
const Objective = mongoose.model('objective', objectiveSchema);
=======
const Objective = mongoose.model('Objective', objectiveSchema);
>>>>>>> ee162f44ae568cd32c829666c109f098c1ca5a5d:Back_end(express_mongodb_api)/expressrestapi/models/task.js
 
export default Objective;

