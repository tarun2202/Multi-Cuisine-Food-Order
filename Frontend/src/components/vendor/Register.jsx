import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { Last } from "react-bootstrap/esm/PageItem";
import React,{ useEffect,useState} from "react";
import VNavbar from "./VNavbar";
import Footer from "../home/Footer";
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [lemail,setRemail] = useState('');
  const [lpassword,setRpassword] = useState('');
  const [lname,setRname] = useState('');
  const [lmobileno,setRmobileno] = useState('');
  const navigate = useNavigate();

  const[street,setStreet] = useState("");
  const[city,setCity] = useState("");
  const[state,setState] = useState("");
  const[country,setCountry] = useState("");
  const[pincode,setPincode] = useState("");
  // var cards = document.querySelectorAll('.card');

  // [...cards].forEach((card)=>{
  //   card.addEventListener( 'click', function() {
  //     card.classList.toggle('is-flipped');
  //   });
  // });


  const register = () =>{
    if(lemail==="" || lpassword==="" || lname==="" || lmobileno==="" ||
        street==="" || city==="" || state==="" || country==="" || pincode==="" ){
      toast.error("please enter all required fields",{autoClose:2000});
      return;
    }
    else{
      axios.post("http://localhost:8080/vendor/signup",
      {
        "vendorName": lname,
        "vendorEmail": lemail,
        "vendorPassword": lpassword,
        "vendorMobileNo": lmobileno,
        "street": street,
        "city": city,
        "state": state,
        "country": country,
        "pincode": pincode
      })
      .then(res=> {
        debugger;
        if(res.data.message==="Registration Successfull")
        {
          navigate("/vendorlogin");
        }
        else{
          toast.error("Something went Wrong",{autoClose:2000})
        }
      })
      .catch(error =>{
        debugger;
         console.log(error);
         toast.error("Something went Wrong",{autoClose:2000})
      }
      )
    }
 
  }

  const  goToVendorRegister=()=> {
    navigate("/vendorRegister");
  }

    return(
      <>
      <div className="register-main-container">    
      <VNavbar/>
      
          {/* <div className="col-3"></div> */}
          {/* <div className="form-container"> */}
          {/* <center> */}
             <div className="user-reg-form">
               <h2 style={{fontWeight:"bolder",color:"white"}}>Vendor Register</h2>
               <label>Name</label>
               <input type="text" className="form-control" placeholder="vikas kumar" value ={lname} onChange={(e)=>{setRname(e.target.value)}}></input>
               <label>Email</label>
               <input type="text" className="form-control" placeholder="abc@gmail.com" value ={lemail} onChange={(e)=>{setRemail(e.target.value)}}></input>
               <label>Password</label>
               <input type="password" className="form-control" placeholder="********" value={lpassword} onChange={(e)=>{setRpassword(e.target.value)}}></input>
               <label>Mobile No.</label>
               <input type="text" className="form-control" placeholder="1234567894" value={lmobileno} onChange={(e)=>{setRmobileno(e.target.value)}}></input>
               <div className="flex">
                <div>
              <label>Street</label>
              <input type="text" className="form-control" placeholder="street" value={street} onChange={(e)=>{setStreet(e.target.value)}}></input>
              </div>
              <div>
              <label>City</label>
              <input type="text" className="form-control" placeholder="Mumbai" value={city} onChange={(e)=>{setCity(e.target.value)}}></input>
              </div>
              </div>
              <div className="flex">
              <div>
              <label>State</label>
              <input type="text" className="form-control" placeholder="Maharashtra" value={state} onChange={(e)=>{setState(e.target.value)}}></input>
              </div>
              <div>
              <label>Country</label>
              <input type="text" className="form-control" placeholder="India" value={country} onChange={(e)=>{setCountry(e.target.value)}}></input>
              </div>
              </div>
              <label>Pincode</label>
              <input type="text" className="form-control" placeholder="451236" value={pincode} onChange={(e)=>{setPincode(e.target.value)}}></input>
              <div className="inner-container">
                <div className="button-container">
               <button className="btn btn-success" onClick={register}>Register</button>
               {/* <button className="btn btn-primary" onClick={goToVendorRegister}>Register As Vendor</button> */}
               </div>
               <div className="vrlogin-inner-container">
               <p style={{color:"white"}}>Already have an account?</p>
               <Link to="/login" classname="login" >Login</Link>
               </div>
               </div>
             </div>
             {/* <div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back">back</div>
  </div>
  </div> */}
             {/* </center> */}
            {/* </div> */}
          {/* <div className="col-3"></div> */}
          <Footer/>
      </div>
      
      </>
    ); 
  }
  
  export default Register; 