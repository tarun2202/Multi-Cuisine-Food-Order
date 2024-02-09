import Dashboard from "./components/user/Dashboard";
import Contact from "./components/user/Contact";
import AboutUs from "./components/user/AboutUs";
import Login from "./components/user/Login";
import { Switch,Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import French from "./Cuisines/French";
import American from "./Cuisines/American";
import Cart from "./components/user/Cart";
import Home from "./components/home/Home";
import AddRest from "./components/admin/Login";
import GenLogin from "./GenLogin";
import UserLogin from "./components/user/Login"
import VendorLogin from "./components/vendor/Login"
import Bill from "./components/user/Bill"
import Alert1 from "./components/user/Alert1";
import vendorReg from "./components/vendor/Register"
import userReg from "./components/user/Register"
import GenReg from "./GenReg";
import Profile from "./components/user/Profile"
import AdmDash from "./components/admin/dashbpoard"
import VendDash from "./components/vendor/dashboard"




function Launcher(){
return <div>
<Switch>
            <Route path="/" component = {Home} exact/>
            <Route path="/home" component = {Home} exact/>
            <Route path="/dashboard" component = {Dashboard} exact/>
            <Route path="/about" component = {AboutUs} exact/>
            <Route path="/contact" component = {Contact} exact/>
            <Route path="/genlogin" component = {GenLogin} exact/>
            {/* <Route path="/french" component = {French} exact/> */}
            <Route path="/american" component = {American} exact/>
            <Route path="/cart" component = {Cart} exact/>
            <Route path="/addrest" component = {AddRest} exact/>
            <Route path="/vendorlogin" component = {VendorLogin} exact/>
            <Route path="/userlogin" component = {UserLogin} exact/>
            <Route path="/bill" component = {Bill} exact/>
            <Route path="/alert" component = {Alert1} exact/>
            <Route path="/vendorreg" component = {vendorReg} exact/>
            <Route path="/userReg" component = {userReg} exact/>
            <Route path="/genReg" component = {GenReg} exact/>
            <Route path="/profile" component = {Profile} exact/>
            <Route path="/AdmDash" component = {AdmDash} exact/>
            <Route path="/VendDash" component = {VendDash} exact/>
            
</Switch>

</div>
}

export default Launcher;