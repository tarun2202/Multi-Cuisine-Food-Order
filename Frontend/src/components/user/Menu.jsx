import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Data from "../../Data";
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./Menu.css";
import Navbar from '../home/Navbar';
import { toast } from 'react-toastify';
import Footer from '../home/Footer';




function Menu(){

  var menuName = sessionStorage.getItem("menu");
  const [dishes, setDishes] = useState([]);
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  var customerId = sessionStorage.getItem("customerId");
  var token = sessionStorage.getItem("token");

  useEffect(()=>{
    debugger;
    getDishesByName();
  },[]);

  const getDishesByName =()=>{
    debugger
    axios.get(`http://localhost:8080/dishes/byname/${menuName}`)
    .then(res=>{
      debugger
        if(res.data.length===0){
          toast.error("Sorry! No such Dish Found",{autoClose:2000})
        }
        else{
        setDishes(res.data)
        console.log(res.data);
        console.log(dishes.length);
        }
    })
    .catch(error=>{
       console.log(error);
    }
    )
  }

  const addToCart=(dishId,price,discount)=>{
    if(isLoggedIn==null){
      toast.error("Please login first",{autoClose:2000});
      return;
    }
      var totalAmount = price*(1-discount);
      axios.post(`http://localhost:8080/cartitems/${customerId}/${dishId}`,{
        "unit_price": price,
        "quantity": 1,
        "discount": discount,
        "totalAmount": totalAmount
      },
      {
        headers:{
          'Authorization': 'Bearer '+ token
        }
      })
      .then(res=>{
        debugger;
        if(res.data.message==="Cart item added!")
        {
          toast.success("Dish Added to Cart",{autoClose:2000});
        }
        else if(res.data.message==="This dish is already present in your cart")
        {
          toast.error("This dish is already present in your cart",{autoClose:2000});
        }
        else{
          toast.error("something went wrong",{autoClose:2000});
        }
      })
      .catch(error=>{
        debugger;
         console.log(error);
      }
      )
    }

  const addToFavourites=(dishId)=>{
    debugger;
    if(isLoggedIn==null){
      toast.error("Please login first",{autoClose:2000});
      return;
    }
    axios.post(`http://localhost:8080/favourites/${customerId}/${dishId}`,
    {
      headers:{
        'Authorization': 'Bearer '+ token
      }
    })
    .then(res=>{
      debugger;
      if(res.data.message==="Favourite added succesfully!")
      {
        toast.success("Favourite added succesfully!",{autoClose:2000});
      }
      else{
        toast.error("something went wrong",{autoClose:2000});
      }
    })
    .catch(error=>{
      debugger;
       console.log(error);
    }
    )

  }


    return(
      <>
         <div className="mmenu-container">
          <Navbar/>
          <h1>Menu</h1>
          <div className='mboxes'>
          { dishes.map((dish)=>{
           return <div className="mbox" key={dish.id}>
                    <div className='mmenu-image'>
                    <img src={dish.dishImage}></img>
                    </div>
                    <div className='mmenu-content'>
                     <h4>{dish.dishName}</h4>
                     <h6>{dish.category}</h6>
                     <h6>{dish.description}</h6>
                     <h6>{dish.vendorName}</h6>
                     <h6>₹{dish.price}</h6>
                     <div className='mbuttons'>
                        <button className='btn btn-dark' onClick={()=>{addToCart(dish.id,dish.price,dish.discount)}}>
                          Add To Cart</button>
                        <div className='mfavourite'>
                          <i class="fa-solid fa-heart" onClick={()=>{addToFavourites(dish.id)}}></i>
                        </div>
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
<br />
          <Footer/>
         </div>
      
      </>
    )

}
export default Menu; 
