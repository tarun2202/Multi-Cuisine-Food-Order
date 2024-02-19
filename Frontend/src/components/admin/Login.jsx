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
  axios.post("http://localhost:8080/admin/signin",
  {
    "email":lemail, "password" : lpassword
  })
  .then(res=> {
    debugger;
    if(res.data.mesg==="signIn")
    {
      sessionStorage.setItem("token",res.data.jwt);
      sessionStorage.setItem("adminLoggedIn",true);
      navigate("/AdminDashboard");
    }
    else if(res.data.message==="Bad credentials"){
      toast.error(res.data.message,{autoClose:2000});
    }
  }
  )
  .catch(error =>{
    debugger;
    if(error.response.data.message==="Bad credentials"){
      toast.error("Bad Credentials,Please check",{autoClose:2000})
    }
     console.log(error);
  })
  }

  // const  goToVendorLogin=()=> {
  //   navigate("/vendorlogin");
  // }

    return(
      <>
      <div className="admin-login-container">   
          {/* <div className="col-3"></div> */}
          {/* <div className="form-container"> */}
          {/* <center> */}
             <div className="admin-form">
               <h2>Admin Login</h2>
               <admin-label>Email</admin-label>
               <input type="text" className="form-control" placeholder="abc@gmail.com" value ={lemail} onChange={(e)=>{setLemail(e.target.value)}}></input>
               <br></br>
               <admin-label>Password</admin-label>
               <input type="password" className="form-control" placeholder="********" value={lpassword} onChange={(e)=>{setLpassword(e.target.value)}}></input>
               
               <div className="inner-container">
                <div className="button-container">
               <button className="admin-btn" onClick={login}>Login</button>
               {/* <button className="btn btn-primary" onClick={goToVendorLogin}>Login As Vendor</button> */}
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