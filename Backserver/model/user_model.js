import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({


username:{type:String},
lastname:{type:String},
email:{type:String , required:true},
pass:{type:String,required:true},
city:{type:String},
pincode:{type:String},
nearby:{type:String},
address:{type:String}


})

const user = mongoose.model("userreg" , userSchema)

export default user;