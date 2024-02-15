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




function Menu(){

  var menuName = sessionStorage.getItem("menu");
  const [dishes, setDishes] = useState([]);
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  var customerId = sessionStorage.getItem("customerId");

  useEffect(()=>{
    debugger;
    getDishesByName();
  },[]);

  const getDishesByName =()=>{
    axios.get(`http://localhost:8080/dishes/${menuName}`)
    .then(res=>{
        setDishes(res.data)
        console.log(res.data);
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
      axios.post(`http://localhost:8080/cartitems/add/${customerId}/${dishId}`,{
        "unit_price": price,
        "quantity": 1,
        "discount": discount,
        "totalAmount": totalAmount
      })
      .then(res=>{
        debugger;
        if(res.data.message==="Cart item added!")
        {
          toast.success("Dish Added to Cart",{autoClose:2000});
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
    axios.post(`http://localhost:8080/favourites/add/${customerId}/${dishId}`)
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
         <div className="menu-container">
          <Navbar/>
          <h1>Menus</h1>
          <div className='boxes'>
          {dishes.map((dish)=>{
           return <div className="box" key={dish.id}>
                    <div className='menu-image'>
                    <img src='https://b.zmtcdn.com/data/pictures/chains/5/18676685/1f8860ecd514f6ac4eef54f299ef5387_featured_v2.jpg?output-format=webp'></img>
                    </div>
                    <div className='content'>
                     <h2>{dish.dishName}</h2>
                     <h5>{dish.category}</h5>
                     <h6>{dish.description}</h6>
                     <h6>₹{dish.price}</h6>
                     <div className='buttons'>
                        <button className='btn btn-dark' onClick={()=>{addToCart(dish.id,dish.price,dish.discount)}}>
                          Add To Cart</button>
                        <div className='favourite'>
                          <i class="fa-solid fa-heart" onClick={()=>{addToFavourites(dish.id)}}></i>
                        </div>
                     </div>
                     </div>
           </div>
    })
  }
          </div>
         </div>
      
      </>
    )

}
export default Menu; 
