import mongoose from "mongoose";

const db_url = `mongodb+srv://Manishcluster:manishsharma54@manishcluster.ie7ge.mongodb.net/Abhi`

const dbConnect=async()=>{

    try{
             const connection = await mongoose.connect(db_url)

             console.log("mera backend chal gya")
    }
    catch(err){
        console.log(err.message)
    }
}
export default dbConnect;