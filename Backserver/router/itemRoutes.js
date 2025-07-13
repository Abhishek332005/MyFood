import express from 'express';
import OrderModel from '../model/orderModel.js';
import authMiddleware from '../middleware/authMiddleware.js';
// import Dinner from '../../frontend/src/After/Dinner.js';

const router = express.Router();



router.get("/breakfast", async (req, res) => {
  try {
    const data = await FoodModel.find({ category: "Breakfast" }); // category name DB me jaise bhi ho
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/lunchitem",async(req,res)=>{
  try{
     const data = await DinnerModel.find({category: "Lunch"});
     res.json(data);
  }catch(err){
    res.status(500).json({error:"Server error"})
  }
})

router.get("/dinneritem",async(req,res)=>{
  try{
     const data = await DinnerModel.find({category: "Dinner"});
     res.json(data);
  }catch(err){
    res.status(500).json({error:"Server error"})
  }
})

router.get("/sweetitem",async(req,res)=>{
  try{
     const data = await DinnerModel.find({category: "Sweet"});
     res.json(data);
  }catch(err){
    res.status(500).json({error:"Server error"})
  }
})

// POST: place order
router.post("/place-order", authMiddleware, async (req, res) => {
  try {
    const { items } = req.body;

    const order = new OrderModel({
      userEmail: req.user.email,
      items,
    });

    await order.save();
    res.status(200).json({ message: "Order placed" });
  } catch (err) {
    res.status(500).json({ error: "Order failed" });
  }
});

export default router;


// import express from 'express';
// import OrderModel from '../model/orderModel.js';
// import authMiddleware from '../middleware/authMiddleware.js';
// import FoodModel from '../model/foodModel.js'; // ✅ FastFood ke data ke liye model import karna zaroori hai

// const router = express.Router();


// // ✅ FastFood ke data lane ke liye GET route
// // Jab frontend FastFood.jsx me API call karega `/api/fastfood` to ye response dega
// router.get("/fastfood", async (req, res) => {
//   try {
//     // 🔍 Category ke base par Fast Food items nikal rahe hain
//     const data = await FoodModel.find({ category: "Fast Food" });

//     // ✅ Frontend ko FastFood items bhej rahe hain
//     res.json(data);
//   } catch (err) {
//     // ❌ Agar koi error aaye to error response bhej rahe hain
//     res.status(500).json({ error: "Server error" });
//   }
// });


// // ✅ Order place karne ka POST route
// router.post("/place-order", authMiddleware, async (req, res) => {
//   try {
//     const { items } = req.body; // 🛒 Frontend se cart ke items aa rahe hain

//     // ✅ Ek naya order create kar rahe hain
//     const order = new OrderModel({
//       userEmail: req.user.email, // 🧑 User ka email jo token se mila
//       items,                     // 🛍️ Cart ke items store kar rahe hain
//     });

//     await order.save(); // 💾 Database me order save kar diya
//     res.status(200).json({ message: "Order placed" }); // ✅ Success response
//   } catch (err) {
//     res.status(500).json({ error: "Order failed" }); // ❌ Error response
//   }
// });

// export default router; // ✅ Router ko export kar rahe hain taaki server.js me use ho sake
