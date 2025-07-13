// // ✅ breakFastModel.js

// import mongoose from "mongoose";

// // ✅ Safe define: agar model bana hai to usi ko use karo
// const breakfastSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   category: String,
//   img: String
// });

// const BreakfastItem = mongoose.models.BreakfastItem || mongoose.model("BreakfastItem", breakfastSchema);

// export default BreakfastItem;
// model/foodItemModel.js
import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  img: String
});

const FoodItem = mongoose.models.FoodItem || mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;


//http://localhost:2008/api/import
