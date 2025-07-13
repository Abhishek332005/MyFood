import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './UserLogin.css'

function UserLogin() {



    const navigate=useNavigate()
        const [UserSignup,setUserSignup]=useState({
            email:"",
            pass:""
           
        })

        const url = "http://localhost:2008/userLogin/userLoginn"

        const fetchData=async(e)=>{
            const{name,value}=e.target
            setUserSignup({...UserSignup,[name]:value})
            console.log(UserSignup)
        }

        const submitData=async(e)=>{
        e.preventDefault()

            try{
            const serverResponse= await axios.post(url,UserSignup)
            console.log(serverResponse) // only for showing  error in console.
            alert(serverResponse.data.username)

        //--------------------------------------------------------------------------------------------------------------------------------------------
        if(serverResponse.data.Status === "Success")
            {
                localStorage.setItem("key",serverResponse.data.token)
                navigate("/userdash")

        }

        //---------------------------------------------------------------------------------------------------------------------------------------------
        }

            catch(err){
                console.log(err)
            }
        }



    return ( 
        <>

        <form onSubmit={submitData}>
  <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
      
      <div className="fs-2 text-center text-primary mb-4 border-bottom pb-2">
        🍽️ Food Login
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          value={UserSignup.email}
          onChange={fetchData}
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="pass"
          value={UserSignup.password}
          onChange={fetchData}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </div>
  </div>
</form>





        </>
     );
}

export default UserLogin