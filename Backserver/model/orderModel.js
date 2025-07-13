// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   userEmail: { type: String, required: true },
//   items: [
//     {
//       name: String,
//       img: String,
//       description: String,
//       quantity: Number,
//       size: String,
//       totalPrice: Number,
//     },
//   ],
//   orderedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const OrderModel = mongoose.model("Order", orderSchema);
// export default OrderModel;
import mongoose from "mongoose";  // ✅ Mongoose import kar rahe hain MongoDB ke sath kaam karne ke liye

// ✅ Ek naya schema define kar rahe hain jisme order ki details hongi
const orderSchema = new mongoose.Schema({
  
  // 🔹 User ka email store hoga jo order kar raha hai
  userEmail: { type: String, required: true },

  // 🔹 Items ek array hai jisme multiple food items store honge jo user ne cart me daale
  items: [
    {
      name: String,          // item ka naam
      img: String,           // item ki image URL
      description: String,   // item ka description
      quantity: Number,      // kitni quantity order ki gayi hai
      size: String,          // size (half/full)
      totalPrice: Number,    // us item ka total price (price * quantity)
    },
  ],

  // 🔹 Order kab kiya gaya uska date-time
  orderedAt: {
    type: Date,
    default: Date.now,  // Default value current date/time set hoti hai
  },
});

// ✅ Schema ke base par ek model bana rahe hain jo 'orders' collection me data store karega
const OrderModel = mongoose.model("Order", orderSchema);

// ✅ Model ko export kar rahe hain taaki backend ke routes me use ho sake
export default OrderModel;
