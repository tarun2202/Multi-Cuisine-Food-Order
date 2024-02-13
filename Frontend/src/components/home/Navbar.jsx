import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
return(
<div className="nav-container-fluid">
<Link to="/" className="site-title" id="foodie" style={{fontSize : '30px',fontFamily :'cursive', color:'aquamarine'}}>foodie</Link>
    <ul>
        <li><Link to ="/home" >Home</Link>
        </li>
        <li><Link to ="/about" >About us</Link>
        </li>
        <li><Link to ="/contact" >Contact</Link>
        </li>
    </ul>
</div>
);
}

export default Navbar;