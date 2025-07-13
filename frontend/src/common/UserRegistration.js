
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Userregistration.css';

function UserRegistration() {
  const navigate = useNavigate();
  const url = "http://localhost:2008/userRoute/addRegistertion";

  
  const [reg,setReg]=useState({
    username: "",
    lastname: "",
    email: "",
    pass: "", 
    city: "",
    pincode: "",
    nearby: "",
    address: ""
  });

  const fetchData=async(e)=>{
    const { name, value } = e.target;
    setReg({ ...reg, [name]:value });
    console.log(reg)
  };

  const submitData=async(e)=>{
    e.preventDefault();

    try {
      const serverResponse = await axios.post(url, reg);
      console.log(serverResponse);
      alert("Regestration Completed");
      navigate("/userSignup");
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <>
    <div className="container">
      <div className="apply_box">
        <h1>Registration</h1>
        <form onSubmit={submitData}>
          <div className="form_container">
            <div className="form_control">
              <label htmlFor="first_name">First Name</label>
              <input
                placeholder="Enter First Name..."
                type="text"
                name="username"
                value={reg.username}
                onChange={fetchData}
              />
            </div>

            <div className="form_control">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name..."
                name="lastname"
                value={reg.lastname}
                onChange={fetchData}
              />
            </div>

            <div className="form_control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={reg.email}
                onChange={fetchData}
                placeholder="Enter Email..."
              />
            </div>

            <div className="form_control">
              <label htmlFor="contact">Password</label>
              <input
                type="text"
                name="pass"
                value={reg.pass}
                onChange={fetchData}
                placeholder="Contact Number..."
              />
            </div>

            <div className="form_control">
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter City Name..."
                name="city"
                value={reg.city}
                onChange={fetchData}
              />
            </div>

            <div className="form_control">
              <label htmlFor="pincode">Pin Code</label>
              <input
                type="number"
                placeholder="Enter Pincode..."
                name="pincode"
                value={reg.pincode}
                onChange={fetchData}
              />
            </div>

            <div className="form_control">
              <label htmlFor="nearby">Near By</label>
              <input
                type="text"
                placeholder="Nearby area..."
                name="nearby"
                value={reg.nearby}
                onChange={fetchData}
              />
            </div>

            <div className="form_control">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                placeholder="Enter full address..."
                name="address"
                value={reg.address}
                onChange={fetchData}
              />
            </div>
          </div>

          <div className="button_container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>

    </>
  );
}

export default UserRegistration;
