import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Last } from "react-bootstrap/esm/PageItem";
import { useEffect,useState} from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

function Login() {

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

    return(
      <>
      <div className="login-container">    
      <Navbar/>
      
          {/* <div className="col-3"></div> */}
          {/* <div className="form-container"> */}
          {/* <center> */}
             <div className="form">
               <h2 style={{fontWeight:"bolder",color:"white"}}>Vendor Login</h2>
               <label>email</label>
               <input type="text" className="form-control" placeholder="abc@gmail.com"></input>
               <label>password</label>
               <input type="password" className="form-control" placeholder="********"></input>
               
               <div className="inner-container">
                <div className="button-container">
               <button className="btn btn-success">Login</button>
               <button className="btn btn-primary" onClick={goToUserLogin}>User Login</button>
               </div>
               <div className="register-container">
               <p>Don't have an account?</p>
               <Link to="/Register" classname="register" > Register Here</Link>
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