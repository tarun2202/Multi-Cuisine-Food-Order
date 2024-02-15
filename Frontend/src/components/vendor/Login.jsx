import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Last } from "react-bootstrap/esm/PageItem";
import { useEffect,useState} from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { toast } from "react-toastify";
import axios from "axios";

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

  const  goToUserLogin=()=> {
    navigate("/login");
  }

  const login=()=>{
    debugger;
    if(lemail==="" || lpassword===""){
      toast.error("please enter email and password",{autoClose:2000});
      return;
    }
  axios.post("http://localhost:8080/vendors/login",
  {
    "email":lemail, "password" : lpassword
  })
  .then(res=> {
    debugger;
    if(res.data.vendorId===-1)
    {
      toast.error(res.data.message,{autoClose:2000});
    }
    else if(res.data.vendorId===0){
      toast.error(res.data.message,{autoClose:2000});
    }
    else{
      sessionStorage.setItem("vendorId",res.data.vendorId);
      sessionStorage.setItem("isLoggedIn",true);
      toast.success("Vendor Login Successfull!",{autoClose:2000});
      // navigate("/home");
    }
  }
  )
  .catch(error =>{
    debugger;
     console.log(error);
  })
  }

    return(
      <>
      <div className="vendor-login-container">    
      <Navbar/>
      
          {/* <div className="col-3"></div> */}
          {/* <div className="form-container"> */}
          {/* <center> */}
             <div className="form">
               <h2 style={{fontWeight:"bolder",color:"white"}}>Vendor Login</h2>
               <label>email</label>
               <input type="text" className="form-control" placeholder="abc@gmail.com"  value ={lemail} onChange={(e)=>{setLemail(e.target.value)}}></input>
               <label>password</label>
               <input type="password" className="form-control" placeholder="********" value={lpassword} onChange={(e)=>{setLpassword(e.target.value)}}></input>
               
               <div className="inner-container">
                <div className="button-container">
               <button className="btn btn-success"onClick={login}>Login</button>
               <button className="btn btn-primary" onClick={goToUserLogin}>User Login</button>
               </div>
               <div className="register-container">
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