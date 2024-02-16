import "./Favourite.css";
import Navbar from "../home/Navbar";
import axios from "axios";
import React,{ useEffect, useState } from "react";
import { toast } from "react-toastify";

function Favourite(){

const [favourites, setFavourites] = useState([]);
var isLoggedIn = sessionStorage.getItem("isLoggedIn");
var customerId = sessionStorage.getItem("customerId");

useEffect(()=>{
  getFavourites();
},[])

const getFavourites =()=>{
    debugger;
    axios.get(`http://localhost:8080/favourites/get/${customerId}`)
    .then(res =>
        {   
            debugger
            setFavourites(res.data)
            console.log(res.data);
        })
    .catch(error=>{
        debugger
        console.log(error);
    })
}

const removeFromFav = (favId) =>{
    axios.delete(`http://localhost:8080/favourites/delete/${favId}`)
    .then(res=>{
        if(res.data.message==="Favourite removed!")
      {
        toast.success("Favourite Removed!",{autoClose:2000});
        getFavourites();
      }
      else{
        toast.error("something went wrong",{autoClose:2000});
        getFavourites();
      }
    })
    .catch(error=>{
        console.log(error);
    })
}

return(
    <div className="favourites-container">
      <Navbar/>
        <h1>Favourites</h1>

        {
             favourites.length===0 ? 
             <div className="empty">
                <h2>Sorry! There are No Favourites</h2>
             </div> : 
        <div className='boxes'>
          {favourites.map((fav)=>{
           return <div className="box" key={fav.id}>
                    <div className='menu-image'>
                    <img src='https://b.zmtcdn.com/data/pictures/chains/5/18676685/1f8860ecd514f6ac4eef54f299ef5387_featured_v2.jpg?output-format=webp'></img>
                    </div>
                    <div className='content'>
                     <h2>{fav.dishName}</h2>
                     {/* <h5>{fav.dishImage}</h5> */}
                    <h6>₹{fav.unit_price}</h6>
                     <h6>{fav.discount}</h6>
                        <div className='favourite'>
                        <i class="fa-solid fa-trash" onClick={()=>{removeFromFav(fav.id)}}></i>
                        </div>
                     </div>
           </div>
    })
  }
          </div>
}
    </div>
);
}

export default Favourite;