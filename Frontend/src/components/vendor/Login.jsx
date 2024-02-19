import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Last } from "react-bootstrap/esm/PageItem";
import { useEffect,useState} from "react";
import VNavbar from "./VNavbar";
import Footer from "../home/Footer";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {

  const [lemail,setLemail] = useState('');
  const [lpassword,setLpassword] = useState('');
  const navigate = useNavigate();
  var vendorId = sessionStorage.getItem("vendorId");
  

  // var cards = document.querySelectorAll('.card');

  // [...cards].forEach((card)=>{
  //   card.addEventListener( 'click', function() {
  //     card.classList.toggle('is-flipped');
  //   });
  // });

  const  goToUserLogin=()=> {
    navigate("/login");
  }

  const login = () =>{
    
    if(lemail==="" || lpassword===""){
      toast.error("please enter email and password",{autoClose:2000});
      return;
    }
  axios.post("http://localhost:8080/vendor/signin",
  {
    "email":lemail, "password" : lpassword
  })
  .then(res=> {
    debugger;
    if(res.data.id!==0)
    {
      sessionStorage.setItem("vendorId",res.data.id);
      sessionStorage.setItem("token",res.data.jwt);
      sessionStorage.setItem("isVendorLoggedIn",true);
      navigate("/vendorMenu");
    }
    else if(res.data.id===0){
      toast.error("Your account is pending for Avtivation",{autoClose:2000})
    }
    else if(res.data.mesg==="Bad credentials"){
      toast.error(res.data.mesg,{autoClose:2000});
    }
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


    return(
      <>
      <div className="vendor-login-container">    
      <VNavbar/>
      
          {/* <div className="col-3"></div> */}
          {/* <div className="form-container"> */}
          {/* <center> */}
             <div className="vlogin-form">
               <h2 style={{fontWeight:"bolder",color:"black"}}>Vendor Login</h2>
               <vlogin-label>Email</vlogin-label>
               <input type="text" className="form-control" placeholder="abc@gmail.com"  value ={lemail} onChange={(e)=>{setLemail(e.target.value)}}></input>
              <br></br>
              <vlogin-label>Password</vlogin-label>
               <input type="password" className="form-control" placeholder="********" value={lpassword} onChange={(e)=>{setLpassword(e.target.value)}}></input>
               
               <div className="vinner-container">
                <div className="vbutton-container">
               <button className="button-vlogin"onClick={login}>Login</button>
               <button className="button-ulogin" onClick={goToUserLogin}>User Login</button>
               </div>
               <div className="vregister-container">
               <p>Don't have an account?</p>
               <Link to="/Vendorregister" classname="register" > Register Here</Link>
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