import mongoose from 'mongoose'

const SuperVisiorSchema = new mongoose.Schema({



email:{type:String , required:true},
pass:{type:String,required:true},



})

const SuperVisiorLogin = mongoose.model("SuperVisiorreg" , SuperVisiorSchema)

export default SuperVisiorLogin;