

import express from 'express';
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';

import dbConnect from './database/dbConnection.js';
import userRoute from './router/user_route.js';
import SuperVisiorRoute from './router/SuperVisior_route.js';

import FoodItem from './model/foodItemModel.js';
import BreakfastItem from './model/breakFastModel.js';
import LunchItem from './model/lunchDataModel.js'; 
import DinnerItem from './model/dinnerDataModel.js';
import SweetItem from './model/sweetDataModel.js';


import orderRoute from './router/itemRoutes.js';
// import itemRoutes from "./router/itemRoutes.js";


const serverApp = express();
const port_Number = 2008;

dbConnect();

serverApp.use(cors());
serverApp.use(express.static("public"));
serverApp.use(express.json());

serverApp.use("/userRoute", userRoute);
serverApp.use("/userLogin", userRoute);
serverApp.use("/UserDasData", userRoute);
serverApp.use("/SupLogin", SuperVisiorRoute);

//
// ✅ 1. Route to get all food items
//
serverApp.get("/api/food", async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

//
// ✅ 2. Import foodData.json into fooditems collection-------------------------------------------
//
serverApp.get("/api/import", async (req, res) => {
  try {
    const raw = fs.readFileSync("foodData.json");
    const data = JSON.parse(raw);

    await FoodItem.deleteMany(); // Optional: clean before inserting
    await FoodItem.insertMany(data);

    res.send("🌟 Food data imported into fooditems!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// ✅ 3. Import breakFast.json into breakfastitems collection---------------------------------------
//
serverApp.get("/api/import-breakfast", async (req, res) => {
  try {
    const raw = fs.readFileSync("breakFast.json");
    const data = JSON.parse(raw);

    await BreakfastItem.deleteMany(); // clean old
    await BreakfastItem.insertMany(data); // insert new

    res.send("🍳 Breakfast data imported into breakfastitems!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// ✅ 4. Get all breakfast items from breakfastitems collection
//
serverApp.get("/api/breakfast", async (req, res) => {
  try {
    const breakfastItems = await BreakfastItem.find();
    res.json(breakfastItems);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});



//
// ✅ 3. Import lunchData.json into lunchitems collection---------------------------------------
//
serverApp.get("/api/import-lunchitem", async (req, res) => {
  try {
    const raw = fs.readFileSync("lunchData.json");
    const data = JSON.parse(raw);

    await LunchItem .deleteMany(); // clean old
    await LunchItem .insertMany(data); // insert new

    res.send("🍳LunchItem data imported into lunchItemData!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//
// ✅ 4. Get all lunch items from lunchitems collection
//
serverApp.get("/api/lunchitem", async (req, res) => {
  try {
    const lunchitem = await LunchItem .find();
    res.json(lunchitem);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});


// import dinnerData.json into dinneritems collection---------------------------------------
serverApp.get("/api/import-dinneritem", async (req,res)=>{
  try{
      const raw = fs.readFileSync("dinnerData.json");
      const data = JSON.parse(raw);

      await DinnerItem .deleteMany(); //clean old
      await DinnerItem .insertMany(data);

      res.send("Dinner Item data imported into dinnerItemData!");
  }catch(err){
    res.status(500).json({server:err.message})
  }
})
//Get all lunch items from dinneritems collection
serverApp.get("/api/dinneritem", async (req,res)=>{
  try{
    const dinneritem =await DinnerItem .find();
    res.json(dinneritem);

  }catch(err){
    res.status(500).json({error:"Server error"});
  }
});


// sweet--------------------------------------------------------------------

serverApp.get("/api/import-sweetitem", async(req,res)=>{
  try{
    const raw = fs.readFileSync("sweetData.json");
    const data = JSON.parse(raw);

    await SweetItem .deleteMany();
    await SweetItem .insertMany(data);

    res.send("Sweet Item data imported into sweetItem")

  }catch(err){
    res.status(500).json({server:err.message})
  }
})

serverApp.get("/api/sweetitem", async (req,res) =>{
  try{
    const sweetitem = await SweetItem .find();
    res.json(sweetitem);

  }catch(err){
    res.status(500).json({error:"Server error"});
  }
})

//-----------------------------------------------------------------------------

serverApp.use("/api", orderRoute);

// app.use("/api", itemRoutes);
//
// ✅ Start the server
//
serverApp.listen(port_Number, () => {
  console.log(`✅ Server is running at http://localhost:${port_Number}`);
});
