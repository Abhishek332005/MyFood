import UserHeader from "./Userheader";
import axios from 'axios'
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";





function UserDash() {
    //-------------------------------------usenavigate key ha tabhi yha rhega nhi to userlogin vale page par chla jayega
    
    const navigate = useNavigate() //naviagete mera variable hai jisme me usenaviagte library ke function ki power me navigate variable mem le rha hu 

    const myToken=localStorage.getItem("key") // local storage me email savwe hai login karte time vo me my token variable memsave karva rha hu 


useEffect(()=>{
    if(!myToken || myToken == null){
        navigate("/UserLogin")
    }
    else{
    fetchUserDetail() //------ backend se data ko bhejta hai niche vale function me
    }

},[]) // useeffect nera jkaan kar rha hai backwend se bina ruko deta mngavane me aur dta bina atke a sake kitna bhi bada data ho fetch user detail ke function me aur jo mera uper mera if vala condition hai usme me token ki help se user ki login mannage karunga ki vo page par rghrga ki nhi login karne kae baad 

const url =  "http://localhost:2008/UserDasData/UserDasDataRoute" //ye url variable me link bna rha hu jiise me data backend par 

const [userDe,setUserDe]=useState({}) // useDe mera variable hai aur setUseDe mera useDe ka function hai jo help karta hai mera userDe me change karne mew  uske alva setuserDe ka koi kaam nhi hai bas uska kaam ye hai ki koi data aye jaye uisko me userDe me save kara saku ya change kara saku kuch bhi aur jo useState ka {} hai vo mera empty hai jo ki data unlimated data handle kar sakta hais aur useeffect usme help karega 
//------------------------------------------------------------------------------

const fetchUserDetail = async ()=>{  // fetchuser detail mera variable hai aur function hai jisme me backend se data mangavaunga aur keval frontend se email bhejunga variable me savwe karke jo ki mera params variable me save hai aur async bina ruke jitne bhi data a rhe hai ate rhe aur koi bhi sequance matter nhi karta that means deadlock .
    // console.log("Sending email to backend:", myToken);

try{

    const params = {email:myToken} // parms mera varibaler hai aur me local storage se mene mera enmil my tokern ke ander dala haiaur usko mene        fir mene email variable ke ander daal diaya aur uske baad mene  params ke ander daal ke bhej diya backend par axios ki help se  aur mere pass yek aur condtion thi me isko direct bhi bhej sakta tha bina paerams varivale me dale jo mera acha tarika hoga 
    
    const serverResponse=await axios.get(url,{params})
    // console.log(serverResponse) // yha tak mera data phuch chuka hai backend se userFetchDetailObject isme bhar kar ab isko ham useState me set karnege userDe variable me 
    //serverresponse ke ander me data backend se ayega lekin usko ui me dikhane ke liye me server response variavle se usko userDe usestae ke variable me store karaunga vo bhi uske userDe ke function setUserDe ki help se jisse vo mera ui me print karavca saku

//--------------------------------------------------------------------------------------------------------------------------------------------------
setUserDe(serverResponse.data.userFetchDetailObject) // jo mera .data hai uske ander userFetchDetailObject hai jisko yha mene open kiya hai 
// console.log("userFetchDetailObject",serverResponse)
// console.log("userDe",userDe)

}
catch(err){
    console.log(err.message)  // .message hai vo mera koi error ata hai console par ya koi bhi data ata hai uske andeer bhut sare component hote hai .message usi me se hai jo help karta hai error ke message ko print karane me 
}

}





    return ( 

        <>
        <UserHeader/>
{/*         
        <div style={{height:"100vh",width:"100%",paddingTop:"200px",paddingLeft:"200px"}}>

        
        
        <div style={{fontSize:"82px"}}>{userDe.username}</div>
</div>
         */}




{/* <div className="container-fluid min-vh-100 bg-light d-flex flex-column align-items-center pt-5">

  <h1 className="text-primary fw-bold mb-4">🍽️ Welcome to Food App</h1>


  <div className="alert alert-info text-center shadow-sm fw-semibold" style={{ fontSize: "2rem", maxWidth: "600px", width: "100%" }}>
    👋 Hello, <span className="text-primary">{userDe.username || "Guest"}</span>
  </div>
</div> */}
{/* 
<div
  className="container-fluid min-vh-0 bg-light"
  style={{ paddingTop: "100px" }}
>
 
  <h4 className="text-primary fw-bold ms-3 mb-3">
    🍽️ Welcome to Food App
  </h4>


  <div
    className="alert alert-info shadow-sm fw-semibold ms-4"
    style={{
      fontSize: "2rem",
      maxWidth: "280px",
      width: "100%",
      textAlign: "left",
    }}
  >
    👋 Hi.. <span className="text-primary">{userDe.username || "Guest"}</span>
  </div>
</div> */}

<div className="container-fluid min-vh-0 bg-light" style={{ paddingTop: "100px" }}>
  {/* Header */}
  <h4 className="text-primary fw-bold ms-3 mb-3">
    🍽️ Welcome to Food App
  </h4>

  {/* Username Display Box */}
  <div
    className="alert alert-info shadow-sm fw-semibold ms-4"
    style={{
      fontSize: "2rem",
      maxWidth: "280px",
      width: "100%",
      textAlign: "left",
    }}
  >
    👋 Hi.. <span className="text-primary">{userDe.username || "Guest"}</span>
  </div>

  {/* Main Content */}
  <div
    className="d-flex flex-wrap justify-content-end mt-5 gap-4"
    style={{ paddingRight: "40px" }}
  >
    {/* Left Panel shifted right and widened */}
    <div
      style={{
        backgroundColor: "#4b1c1c",
        color: "white",
        borderRadius: "20px",
        padding: "20px",
        maxWidth: "440px",   // increased from 360px
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/img/buger.jpg"
          alt="Ingredients"
          style={{
            width: "100%",
            height: "280px",    // increased height
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>
      <h6 className="fw-bold text-white mb-3">AM</h6>
      <div className="d-flex justify-content-between text-white">
        <div>
          <strong>Fat</strong>
          <p>40.0 g</p>
        </div>
        <div>
          <strong>Protein</strong>
          <p>5.0 g</p>
        </div>
        <div>
          <strong>Energy</strong>
          <p>1600 kJ</p>
        </div>
      </div>
    </div>

    {/* Right Panel */}
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "20px",
        maxWidth: "420px",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/img/pasta.jpg"
          alt="Curry"
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>
      <h5 className="fw-bold mb-3">Curry</h5>

      {/* Sauces */}
      <div className="d-flex justify-content-between gap-3">
        <div className="bg-light p-2 rounded text-center" style={{ flex: 1 }}>
          <p className="m-0">Tartar Sauce</p>
          <strong>Rs. 59</strong>
          <p>2 pc</p>
        </div>
        <div className="bg-light p-2 rounded text-center" style={{ flex: 1 }}>
          <p className="m-0">Salsa Sauce</p>
          <strong>Rs. 99</strong>
          <p>3 pc</p>
        </div>
        <div className="bg-light p-2 rounded text-center" style={{ flex: 1 }}>
          <p className="m-0">Pesto Sauce</p>
          <strong>Rs. 99</strong>
          <p>1 pc</p>
        </div>
      </div>
    </div>
  </div>
</div>







        </>
     );
}

export default UserDash;