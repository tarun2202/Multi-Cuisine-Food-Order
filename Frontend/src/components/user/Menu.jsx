import { useEffect, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Data from "../../Data";
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./Menu.css";
import Navbar from '../home/Navbar';





function Menu(){

  var menuName = sessionStorage.getItem("menu");
  const [dishes, setDishes] = useState([]);

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
                        <button className='btn btn-dark'>Add To Cart</button>
                        <div className='favourite'>
                          <i class="fa-solid fa-heart"></i>
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
