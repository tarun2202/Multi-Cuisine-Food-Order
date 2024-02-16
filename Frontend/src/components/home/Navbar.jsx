import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import { toast } from "react-toastify";
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

return(
<div className="nav-container-fluid">
<div className="brad">
<Link to="/" className="site-title" id="foodie" style={{fontSize : '30px',fontFamily :'cursive', color:'aquamarine'}}>foodie</Link>
</div>
<div className="links"> 
    <ul>
        <li><Link to ="/home" >Home</Link>
        </li>
        <li><Link to ="/about" >About us</Link>
        </li>
        <li><Link to ="/contact" >Contact</Link>
        </li>
    </ul>
</div>       
<div className="actions">
    <i class="fa-solid fa-cart-shopping" onClick={goToCart}></i>
    <i class="fa-regular fa-heart" onClick={goToFavourites}></i>
</div>
</div>
);
}

export default Navbar;