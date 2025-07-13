
import mongoose from "mongoose";

// ✅ Safe model define to avoid OverwriteModelError
const breakfastSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  img: String
});

const BreakfastItem = mongoose.models.BreakfastItem || mongoose.model("BreakfastItem", breakfastSchema);

export default BreakfastItem;
//http://localhost:2008/api/import-breakfast