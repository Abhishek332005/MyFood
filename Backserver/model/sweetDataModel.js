import mongoose from 'mongoose';

const sweetSchema = new mongoose.Schema({
     name: String,
  description: String,
  price: String, // NOTE: keep it string because ₹ is included
  category: String,
  img: String
});

const SweetItem = mongoose.models.SweetItem || mongoose.model("SweetItem", sweetSchema);

export default SweetItem;

//http://localhost:2008/api/import-sweetitem