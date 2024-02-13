import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { Last } from "react-bootstrap/esm/PageItem";
import React,{ useEffect,useState} from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [lemail,setLemail] = useState('');
  const [lpassword,setLpassword] = useState('');
  const navigate = useNavigate();

  // var cards = document.querySelectorAll('.card');

  // [...cards].forEach((card)=>{
  //   card.addEventListener( 'click', function() {
  //     card.classList.toggle('is-flipped');
  //   });
  // });


  const login = () =>{
    debugger;
    if(lemail==="" || lpassword===""){
      toast.error("please enter email and password",{autoClose:2000});
      return;
    }
  axios.post("http://localhost:8080/customers/login",
  {
    "email":lemail, "password" : lpassword
  })
  .then(res=> {
    debugger;
    if(res.data.customerId===-1)
    {
      toast.error(res.data.message,{autoClose:2000});
    }
    else if(res.data.customerId===0){
      toast.error(res.data.message,{autoClose:2000});
    }
    else{
      sessionStorage.setItem("customerId",res.data.customerId);
      sessionStorage.setItem("isLoggedIn",true);
      navigate("/home");
    }
  }
  )
  .catch(error =>{
    debugger;
     console.log(error);
  }
  )
  }

  const  goToVendorLogin=()=> {
    navigate("/vendorlogin");
  }

    return(
      <>
      <div className="login-container">    
      <Navbar/>
      
          {/* <div className="col-3"></div> */}
          {/* <div className="form-container"> */}
          {/* <center> */}
             <div className="form">
               <h2 style={{fontWeight:"bolder",color:"white"}}>Register</h2>
               <label>email</label>
               <input type="text" className="form-control" placeholder="abc@gmail.com" value ={lemail} onChange={(e)=>{setLemail(e.target.value)}}></input>
               <label>password</label>
               <input type="password" className="form-control" placeholder="********" value={lpassword} onChange={(e)=>{setLpassword(e.target.value)}}></input>
               
               <div className="inner-container">
                <div className="button-container">
               <button className="btn btn-success" onClick={login}>Login</button>
               <button className="btn btn-primary" onClick={goToVendorLogin}>Login As Vendor</button>
               </div>
               <div className="register-container">
               <p>Don't have an account?</p>
               <Link to="/userRegister" classname="register" > Register Here</Link>
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