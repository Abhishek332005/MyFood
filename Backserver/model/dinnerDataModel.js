import mongoose from 'mongoose'

const dinnerSchema = new mongoose.Schema({
   
          name: String,
  description: String,
  price: Number,
  category: String,
  img: String
    
});

const DinnerItem = mongoose.models.DinnerItem || mongoose.model("DinnerItem", dinnerSchema)
export default DinnerItem ;

//http://localhost:2008/api/import-dinneritem