import React, {useState, useEffect } from 'react';
import "./Home.css";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from './Footer';


function Home() {


    const[dishes, setDishes] = useState([]);
    const [dish, setDish] = useState({id:"",dishName:"",description:"",category:"",cuisine:"",
                            rating:"",price:"",discount:"",dishImage:"",vendorId:""});
    const[error, setError] = useState("");
  

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
   <div className="container-fluid">
    <Navbar/>
    <h1 style={{fontSize:"120px",color:"rgba(0,14,98,1)",
    fontFamily :"monospace",fontWeight:"bold",marginTop:"50px"}}>foodie</h1>
    <div className="searchbar"><input style={{borderRadius :"5px",alignItems:"center",width:"100%"}}></input></div>
    <div className="grid">
    {dishes.map((dish)=>{
           return <div className="card" key={dish.id}>
                     <h2>{dish.dishName}</h2>
                     <h5>{dish.category}</h5>
           </div>
    })
  }
    </div>
     <Footer/>
   </div>

  ); 
}

export default Home;
