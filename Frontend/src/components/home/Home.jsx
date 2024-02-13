import React, {useState, useEffect } from 'react';
import "./Home.css";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function Home() {


    const[dishes, setDishes] = useState([]);
    const [dish, setDish] = useState({id:"",dishName:"",description:"",category:"",cuisine:"",
                            rating:"",price:"",discount:"",dishImage:"",vendorId:""});
    const[error, setError] = useState("");
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    useEffect(()=>{
      debugger;
      getDishes();
    },[]);

    useEffect(()=>
  {
      console.log("Component Did Update is called..")
  }, [dishes,dish]);

  
    const getDishes = ()=>{
      debugger;
        axios.get("http://localhost:8080/dishes")
        .then((response)=>{ debugger; setDishes(response.data)})
        .catch((error)=>{ debugger; setError(error.message)})
        } 

return (
<div className="home-container">
<Navbar/>
 <div className="main-container">
  {
    isLoggedIn ? <></> :
    <div className="small-container" >
      <ul className='list-unstyled' id="links" >
      <li><Link to="/login">SignIn</Link></li>
      <li><Link to="/register">SignUp</Link></li>
      </ul>
    </div>
  }
   
    <div className="title">
      <h1>foodie</h1>
      <p>Find the best restaurants, cafés and bars in India</p>
      <div className="searchbar">
    <input className='form-control' 
    placeholder='search your favourite cuisine here ......'>
    </input>
    <button className="search-button">Search</button>
    </div>
    </div>   
 </div>


 <div className='menu-container'>
   <div className="grid">
    {dishes.map((dish)=>{
           return <div className="card" key={dish.id}>
                    <div className='image'>
                    <img src='https://b.zmtcdn.com/data/pictures/chains/5/18676685/1f8860ecd514f6ac4eef54f299ef5387_featured_v2.jpg?output-format=webp'></img>
                    </div>
                     <h2>{dish.dishName}</h2>
                     <h5>{dish.category}</h5>
                     <h6>{dish.description}</h6>
                     <h6>₹{dish.price}</h6>
           </div>
    })
  }
    </div>
  </div>
  <Footer/>
</div>
  ); 
}

export default Home;
