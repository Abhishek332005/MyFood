import express from "express"
import {userregestration,userlogin,userloginuserDasFetch  } from '../controller/userController.js'

const userRoute=express.Router()

userRoute.post("/addRegistertion",userregestration)


userRoute.post("/userLoginn",userlogin)



userRoute.get("/UserDasDataRoute",userloginuserDasFetch )

export default userRoute ;