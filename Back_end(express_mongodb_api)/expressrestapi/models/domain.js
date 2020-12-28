import mongoose from 'mongoose';
 
const domainSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate domain with user(one to many)(just if exited: domaine not by default)

  },
  { timestamps: true },
);
 
const Domain = mongoose.model('Domain', domainSchema);
 
export default Domain;

