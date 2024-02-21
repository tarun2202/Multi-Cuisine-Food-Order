import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { toast } from "react-toastify";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
var isLoggedIn = sessionStorage.getItem("isLoggedIn");
const navigate = useNavigate();


const goToCart =()=>{
    debugger
    if(isLoggedIn==="true"){
      navigate("/cart");
    }
    else{
    toast.error("Please Login First");
    }
}

const goToFavourites =()=>{
    debugger
    if(isLoggedIn=="true"){
    navigate("/favourites");
    }
    else{
    toast.error("Please Login First");
    }
  }

  const goToProfile=()=>{
    if(isLoggedIn=="true")
    navigate("/profile");

    else
    toast.error("Please Login First");
  }

return(
<div className="nav-container-fluid">
<div className="brand-name">
<Link to="/" className="site-title" id="foodie">foodie</Link>
</div>
<div className="actions-links">
<div className="actions">
    <i class="fa-solid fa-cart-shopping" onClick={goToCart}></i>
    <i class="fa-solid fa-heart" onClick={goToFavourites}></i>
    <i class="fa-solid fa-user" onClick={goToProfile}></i>   
</div>
<div className="links"> 
    <ul>
        {/* <li><Link to ="/home" >Home</Link>
        </li> */}
        <li><Link to ="/about" >About us</Link>
        </li>
        <li><Link to ="/contact" >Contact</Link>
        </li>
    </ul>
</div> 
</div>      
</div>
);
}

export default Navbar;