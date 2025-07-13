import mongoose from 'mongoose';

const lunchSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String, // NOTE: keep it string because ₹ is included
  category: String,
  img: String
});

const LunchItem = mongoose.models.LunchItem || mongoose.model("LunchItem", lunchSchema);

export default LunchItem;

//http://localhost:2008/api/import-lunchitem