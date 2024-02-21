import React, {useState, useEffect } from 'react';
import "./Home.css";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';



function Home() {


    const[dishes, setDishes] = useState([]);
    const [dish, setDish] = useState({id:"",dishName:"",description:"",category:"",cuisine:"",
                            rating:"",price:"",discount:"",dishImage:"",vendorId:""});
    const[error, setError] = useState("");
    const[cuisine, setCuisine] = useState('');
    const navigate = useNavigate();
    // const[dishList,setDishList] = useState([]);
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    var customerId = sessionStorage.getItem("customerId");
    var token = sessionStorage.getItem("token");


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
         const Cuisinedata=axios.get("http://localhost:8080/dishes")
        .then((response)=>{ debugger; 
          setDishes(response.data)
          console.log(response.data);
                    
        })
        .catch((error)=>{ debugger; setError(error.message)})
        }
        
    const goToMenu = ()=>{
      if(cuisine.length===0){
        toast.error("Please Enter a Dish Name",{autoClose:2000})
      }
      else{
      sessionStorage.setItem("menu",cuisine);
      navigate("/menu");
      }
    }

    const addToCart=(dishId,unitPrice,discount)=>{
      debugger;
      if(isLoggedIn==null){
        toast.error("Please login first",{autoClose:2000});
        return;
      }
      var totalAmount = unitPrice*(1-discount);
      axios.post(`http://localhost:8080/cartitems/${customerId}/${dishId}`,{
        "unit_price": unitPrice,
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
        else if(res.data.message==="This dish is already present in your favourites")
        {
          toast.error("This dish is already present in your favourites",{autoClose:2000});
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
    
return (
<div className="home-container">
<Navbar/>
 <div className="main-container">
  {
    isLoggedIn ? <></> :
    <div className="small-container" >
      <ul className='list-unstyled' id="links" >
      <li><Link to="/login">SignIn</Link></li>
      <li><Link to="/Userregister">SignUp</Link></li>
      </ul>
    </div>
  }
   
    <div className="title">
      <h1>FoodHub</h1>
      <p>Find the best restaurants, cafés and bars in India</p>
    <div className="searchbar">
    <input className='form-control' 
    placeholder='search your favourite cuisine here ......' 
    value={cuisine}
    onChange={(e)=>{setCuisine(e.target.value)}}>
    </input>
    <button className="search-button" onClick={goToMenu}>Search</button>
    </div>
    {/* <div className='cuisineList'>
    {
            dishes.filter(item => item.dishName.indexOf(cuisine)===0 && item.dishName !== cuisine)
            .map(item => <div id='dropdown' key={item.id} onClick={() => setCuisine(item.dishName)} style={{color:"white",backgroundColor:"GrayText", width:"100%",height:"50px",borderRadius:"10px"}}>
             {item.dishName} <hr/>
             </div>)
    }
    </div> */}
    </div>   
 </div>


 <div className='menu-container'>
   <div className="grid">
    {dishes.map((dish)=>{
           return <div className="foodcard" key={dish.id}>
                    <div className='image'>
                    <img src={dish.dishImage}></img>
                    </div>
                    <div className='foodcontent'>
                     <h4>{dish.dishName}</h4>
                     <h5>{dish.category}</h5>
                     <h6>{dish.description}</h6>
                     <h6>Vendor: {dish.vendorName}</h6>
                     <h6>{dish.discount*100} %off</h6>
                     <h6>₹{dish.price}</h6>
                     <div className='buttons'>
                        <button className='btn btn-dark' onClick={()=>{addToCart(dish.id,dish.price,dish.discount)}}>Add To Cart</button>
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
  <Footer/>
</div>
  ); 
}

export default Home;
