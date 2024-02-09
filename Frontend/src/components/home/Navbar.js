import "./Navbar.css"
function Navbar(){
return(
<div className="nav-container-fluid">
<a href="/" className="site-title" id="foodie" style={{fontSize : '30px',fontFamily :'cursive', color:'aquamarine'}}>foodie</a>
    <ul>
        <li><a href="/home">
            Home</a>
        </li>
        <li><a href="/about">
            About Us</a>
        </li>
        <li><a href="/contact">
            Contact</a>
        </li>
    </ul>
</div>
);
}

export default Navbar;