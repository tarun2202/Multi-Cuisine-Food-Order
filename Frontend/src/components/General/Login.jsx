import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Last } from "react-bootstrap/esm/PageItem";
import React,{ useEffect,useState} from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

function Login() {


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
  axios.post("http://localhost:8080/customer/signin",
  {
    "email":lemail, "password" : lpassword
  })
  .then(res=> {
    debugger;
    if(res.data.id!==0)
    {
      sessionStorage.setItem("customerId",res.data.id);
      sessionStorage.setItem("token",res.data.jwt);
      sessionStorage.setItem("isLoggedIn",true);
      navigate("/home");
    }
    else if(res.data.id===0){
      toast.error("You Signed Out Last Time, Please Login",{autoClose:2000})
    }
    // else if(res.data.mesg==="Bad credentials"){
    //   toast.error(res.data.mesg,{autoClose:2000});
    // }
  }
  )
  .catch(error =>{
    debugger;
    if(error.response.data.message==="Bad credentials"){
      toast.error("Bad Credentials,Please check",{autoClose:2000})
    }
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
             <div className="login-form">
              <div className="login_title">
               <h2>Login</h2>
               </div>
               <login-label>Email</login-label>
               <input type="text" className="form-control" placeholder="abc@gmail.com" value ={lemail} onChange={(e)=>{setLemail(e.target.value)}}></input>
               <br></br>
               <login-label>Password</login-label>
               <input type="password" className="form-control" placeholder="********" value={lpassword} onChange={(e)=>{setLpassword(e.target.value)}}></input>
               
               <div className="cinner-container">
                <div className="cbutton-container">
               <button className="login-button" onClick={login}>Login</button>
               <button className="vlogin-button" onClick={goToVendorLogin}>Login As Vendor</button>
               </div>
               <div className="cregister-container">
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
  
  export default Login; 