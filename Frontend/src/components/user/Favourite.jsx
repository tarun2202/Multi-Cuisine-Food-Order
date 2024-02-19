import "./Favourite.css";
import Navbar from "../home/Navbar";
import axios from "axios";
import React,{ useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../home/Footer";
function Favourite(){

const [favourites, setFavourites] = useState([]);
var isLoggedIn = sessionStorage.getItem("isLoggedIn");
var customerId = sessionStorage.getItem("customerId");
var token = sessionStorage.getItem("token");

useEffect(()=>{
  getFavourites();
},[])

const getFavourites =()=>{
    debugger;
    axios.get(`http://localhost:8080/favourites/${customerId}`,{
        headers:{
          'Authorization': 'Bearer '+ token
        }
      })
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
    axios.delete(`http://localhost:8080/favourites/${favId}`,
    {
        headers:{
          'Authorization': 'Bearer '+ token
        }
      })
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
        <div className='favboxes'>
          {favourites.map((fav)=>{
           return <div className="favbox" key={fav.id}>
                    <div className='favmenu-image'>
                    <img src={fav.dishImage}></img>
                    </div>
                    <div className='favcontent'>
                     <h4>{fav.dishName}</h4>
                     {/* <h5>{fav.dishImage}</h5> */}
                     <h6>{fav.vendorName}</h6>
                    <h6>₹{fav.unit_price}</h6>
                     <h6>{fav.discount} %off</h6>
                        <div className='favourite'>
                        <i class="fa-solid fa-trash" onClick={()=>{removeFromFav(fav.id)}}></i>
                        </div>
                     </div>
           </div>
    })
  }
          </div>
}
<br />
<br />
<br />
<br />
<br />
<br />
<Footer/>
    </div>
);
}

export default Favourite;