import express from "express"
import {SuperVisiorlogin } from '../controller/SuperVisiorController.js'

const SuperVisiorRoute=express.Router()



SuperVisiorRoute.post("/SuperVisiorLoginn",SuperVisiorlogin)





export default SuperVisiorRoute;