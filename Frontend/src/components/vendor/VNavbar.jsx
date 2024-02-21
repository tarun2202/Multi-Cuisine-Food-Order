import { Link, useNavigate } from "react-router-dom";
import "./VNavbar.css"
import { toast } from "react-toastify";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function VNavbar(){
var isLoggedIn = sessionStorage.getItem("isLoggedIn");
const navigate = useNavigate();
var vendorId = sessionStorage.getItem("vendorId");


const goToAddDish =()=>{
    debugger
    if(vendorId===null)
    toast.error("Please Login First");
    else
    navigate("/addDish");
}

const goToOrders =()=>{
    debugger
    if(vendorId===null)
    toast.error("Please Login First");
    else
      navigate("/orders");
  }

  const goToMenu=()=>{
  if(vendorId===null)
    toast.error("Please Login First");
  else
    navigate("/vendorMenu");
  }
return(
<div className="nav-container-fluid">
<div className="brand-name">
<Link to="/" className="site-title" id="foodie">FoodHub</Link>
</div>
<div className="vactions-links">
<div className="vactions">
  <button className="orders" onClick={goToOrders}>Orders</button>
  <button className="add-dish" onClick={goToAddDish}>Add Dish</button>
  <button className="menu" onClick={goToMenu}>Menu</button>
    {/* <i class="fa-solid fa-cart-shopping" onClick={goToCart}></i>
    <i class="fa-solid fa-heart" onClick={goToFavourites}></i>
    <i class="fa-solid fa-user" onClick={goToProfile}></i>    */}
</div>
<div className="vlinks"> 
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

export default VNavbar;