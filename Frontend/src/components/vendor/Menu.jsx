import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Data from "../../Data";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./Menu.css";
import VNavbar from './VNavbar';
import { toast } from 'react-toastify';
import Footer from '../home/Footer';




function Menu(){

  var menuName = sessionStorage.getItem("menu");
  const [dishes, setDishes] = useState([]);
  var isVendorLoggedIn = sessionStorage.getItem("isVendorLoggedIn");
  var vendorId = sessionStorage.getItem("vendorId");
  var token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");

  useEffect(()=>{
    debugger;
    getDishesByName();
  },[]);

  const getDishesByName =()=>{
    debugger
    axios.get(`http://localhost:8080/dishes/${vendorId}`,
    {
        headers:{
          'Authorization': 'Bearer '+ token
        }
      })
    .then(res=>{
        debugger
        setDishes(res.data)
        console.log(res.data);
    })
    .catch(error=>{
        debugger
       console.log(error);
    }
    )
  }

  const goToAddDish=()=>{
     navigate("/addDish")

  }

  const deleteDish=(dishId)=>{
    debugger
    axios.delete(`http://localhost:8080/dishes/${vendorId}/${dishId}`,
    {
        headers:{
          'Authorization': 'Bearer '+ token
        }
      }).then(res=>{
        debugger
        if(res.data.message==="Deletion succesfull!"){
            toast.success("Dish deleted successfully",{autoClose:2000});
            window.location.reload();
        }
        else{
            toast.error("Something Went Wrong",{autoClose:2000});
        }
      }).catch(error=>{
        debugger
        console.log(error);
        toast.error("Something Went Wrong",{autoClose:2000});
      })
  }
 
  const editDish=(id)=>{
    sessionStorage.setItem("dishId",id);
    navigate("/editDish");
  }


    return(
      <>
         <div className="menu-container">
          <VNavbar/>
          <h1>Menu</h1>
          <div className='action'>
            <button onClick={goToAddDish}>Add Dish</button>
          </div>
          <div className='boxes'>
          {dishes.map((dish)=>{
           return <div className="box" key={dish.id}>
                    <div className='menu-image'>
                    <img src={dish.dishImage}></img>
                    </div>
                    <div className='vmenu-content'>
                     <h4>{dish.dishName}</h4>
                     <h5>{dish.category}</h5>
                     <h6>{dish.description}</h6>
                     <h6>₹{dish.price}</h6>
                     <div className='buttons'>
                        <button className="btn btn-danger" onClick={()=>{editDish(dish.id)}} >Edit</button>
                        <i class="fa-solid fa-trash" onClick={()=>{deleteDish(dish.id)}} ></i>
                     </div>
                     </div>
           </div>
    })
  }
          </div>
          <br />
<br />
<br />
<br />
<br />
          <Footer/>
         </div>
      
      </>
    )

}
export default Menu; 
