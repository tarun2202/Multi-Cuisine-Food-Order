import Menu from "./components/user/Menu";
import Contact from "./components/user/Contact";
import AboutUs from "./components/user/AboutUs";
// import Login from "./components/user/Login";
import {Route,Routes} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import French from "./Cuisines/French";
import American from "./Cuisines/American";
import Cart from "./components/user/Cart";
import Home from "./components/home/Home";
import AdminLogin from "./components/admin/Login";
import Login from "./components/General/Login";
// import UserLogin from "./components/user/Register"
import VendorLogin from "./components/vendor/Login"
import Bill from "./components/user/Bill"
import Alert1 from "./components/user/Alert1";
import Register from "./components/user/Register"
import VendorRegister from "./components/vendor/Register"
import Profile from "./components/user/Profile"
import AdminDash from "./components/admin/dashbpoard"
import VendDash from "./components/vendor/dashboard"
import CustomerHome from "./components/home/CustomerHome";
import { ToastContainer } from "react-toastify";
import Favourites from "./components/user/Favourite"
import Payment from "./components/user/Payment";
import VendorMenu from "./components/vendor/Menu";
import AddDish from "./components/vendor/AddDish";
import EditDish from "./components/vendor/EditDish";
import Orders from "./components/vendor/Orders";




function App(){




return <>
 <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cust" element = {<CustomerHome/>} exact/>
            <Route path="/home" element = {<Home/>} exact/>
            <Route path="/menu" element = {<Menu/>} exact/>
            <Route path="/about" element = {<AboutUs/>} exact/>
            <Route path="/contact" element = {<Contact/>} exact/>
            <Route path="/login" element = {<Login/>} exact/>
            {/* <Route path="/french" component = {French} exact/> */}
            <Route path="/american" element = {<American/>} exact/>
            <Route path="/cart" element = {<Cart/>} exact/>
            <Route path="/adminlogin" element = {<AdminLogin/>} exact/>
            <Route path="/vendorlogin" element = {<VendorLogin/>} exact/>
            {/* <Route path="/userlogin" element = {<UserLogin/>} exact/> */}
            <Route path="/bill" element = {<Bill/>} exact/>
            <Route path="/alert" element = {<Alert1/>} exact/>
            <Route path="/userRegister" element={<Register/>}/>
            <Route path="/vendorRegister" element={<VendorRegister/>}/>
            <Route path="/profile" element = {<Profile/>} exact/>
            <Route path="/AdminDashboard" element = {<AdminDash/>} exact/>
            <Route path="/VendDash" element = {<VendDash/>} exact/>
            <Route path="/favourites" element = {<Favourites/>} exact/>
            <Route path="/payment" element = {<Payment/>} exact/>
            <Route path="/vendorMenu" element = {<VendorMenu/>} exact/>
            <Route path="/addDish" element = {<AddDish/>} exact/>
            <Route path="/editDish" element = {<EditDish/>} exact/>
            <Route path="/orders" element = {<Orders/>} exact/>
</Routes>
<ToastContainer
 pauseOnHover={false}
 closeOnClick={true}
 theme="colored"/>
</>
}

export default App;