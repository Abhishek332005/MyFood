import mongoose from "mongoose";

const db_url = // add here your mongodb database link

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
