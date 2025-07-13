import {request,response} from 'express'
import user from '../model/user_model.js'


export const userregestration=async(request,response)=>{
    const userdoc = request.body

    const{username,lastname,email,pass,city,pincode,nearby,address}=userdoc

    try{

        const myData=new  user({username,lastname,email,pass,city,pincode,nearby,address})

        await myData.save()

        
        response.status(200).json({"message":"Registration completed"})
        

    }catch(err){
        console.log(err)
    }
    
}






export const userlogin=async(request,response)=>{
    const abhidoc=request.body


    const{email,pass}=abhidoc
    try{
         const abhishekobject=await user.findOne({email:email}) // red vala backend ka aur yellow vala frontend

                            if(abhishekobject!=null)
                                {
                                                            if(abhishekobject.pass === pass){
                                                                    return response.json({"message":"Hello!"+ abhishekobject.textbox,"Status":"Success","token":abhishekobject.email})
                                                                
                                                            }
                                                            else{
                                                                return response.json({"message":"Your password in invalid!"})
                                                            }
                                
                            }
                            else{
                            return response.json({"message":"Your email is invalid!"})
                            }
        }
    catch(err){
          console.log(err)
    }
}



//------------------fetch karne ke liye mera data

export const userloginuserDasFetch =async(request,response)=>{
    const fetchUserDetail=request.query 
    //jab bhi ham params variable vale method ki help se jab email vagere bhejte hai tab ham request.query use kate hai varna jab ham direct  data bhejte hai bina params vale tarike se axios ke davara to usko ham request.body me karte hai / , yek aur tarika hai agar ham frontend se params variable ke bina store kiye direct bhejte hai uske ander ki chige {url,{email:token}} ye vale tarike se to backend me yha req.body vala tarika bhi chal jayega dono method sahi hai 


    const{email}=fetchUserDetail //mene jo params me valu bhjei thi usko mene yha open kar diya uske ander mera email tha jisme mene mytoken variable ke ander jo key ke bhi ander jo email store the vo yha tak a gya email  me bhar ke 
    try{
         const userFetchDetailObject=await user.findOne({email:email}) // red color jo dikh rha email vo vala backend ka aur yellow vala frontend aur yha me email me mere jo key vali value store the email usko me jo mera pahlse se registration ka data tha usse match karaunga aur fir response ke tur par jo bhi mera email se juda huva jitne bhi baki data rhega yani name , address , sab kuch vo email se realated jab bhi register kar rha tha vo sara data me frontend ko bhejunga jiise jo frontend me meri jatuarta ho paticular data me use kar saku

                           response.status(200).json({userFetchDetailObject}) // ab me response.status.json ki halp se jo mera userFetchDetailObject variable mene email ki madda se jo data alg kiya hai vo sara data me bhejunga response.status.json ki help se 
        }
    catch(err){
          console.log(err)
    }
}
