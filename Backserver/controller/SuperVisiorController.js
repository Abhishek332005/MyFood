import {request,response} from 'express'
import SuperVisiorLogin from '../model/SuperVisiorLog.js'



export const SuperVisiorlogin=async(request,response)=>{
    const abhidoc=request.body


    const{email,pass}=abhidoc
    try{
         const abhishekobject=await SuperVisiorLogin.findOne({email:email}) // red vala backend ka aur yellow vala frontend

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
