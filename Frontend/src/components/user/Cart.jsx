import "./Cart.css";
import Navbar from "../home/Navbar";
import { useState,useEffect} from "react";
import axios from "axios";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Cart(){

    const [cartItems, setCartItems] = useState([{}]);
    var customerId = sessionStorage.getItem("customerId");
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    var token = sessionStorage.getItem("token");

    useEffect(()=>{
        debugger;
        if(isLoggedIn==null){
          toast.error("Please login first",{autoClose:2000});
          return;
        }
        getCartItems();
      },[]);
  
    //   useEffect(()=>
    // {
    //     console.log("Component Did Update is called..")
    // }, [cartItems]);

    const getCartItems=()=>{
        debugger;
        if(isLoggedIn==null){
          toast.error("Please login first",{autoClose:2000});
          return;
        }
        axios.get(`http://localhost:8080/cartitems/CartItems/${customerId}`,
        {
            headers:{
              'Authorization': 'Bearer '+ token
            }
          })
        .then(res=>{
            debugger
            setCartItems(res.data)    
            console.log(res.data);     
        })
        .catch(error=>{
            debugger
            console.log(error);
        })
    }

    const increase = (id)=>{
      if(isLoggedIn==null){
        toast.error("Please login first",{autoClose:2000});
        return;
      }
      axios.put(`http://localhost:8080/cartitems/increase/${id}`,
      {
        headers:{
          'Authorization': 'Bearer '+ token
        }
      })
      .then(res=>
        {
            if(res.data.message==="Increased"){
                getCartItems();
                console.log(res.data);
            }
        })
        .catch(error=>
            {
                console.log(error);
            })
    }

    const decrease = (id)=>{
      debugger
      if(isLoggedIn==null){
        toast.error("Please login first",{autoClose:2000});
        return;
      }
        axios.put(`http://localhost:8080/cartitems/decrease/${id}`,
        {
            headers:{
              'Authorization': 'Bearer '+ token
            }
          })
        .then(res=>
          
          {
            debugger
              if(res.data.message==="Decreased"){
                  getCartItems();
                  console.log(res.data);
              }
              else if(res.data.message==="Deleted"){
                 deleteCartItem(id);
                  console.log(res.data);
              }
          })
          .catch(error=>
              {
                  console.log(error);
              })
    }

    const deleteCartItem=(id)=>{
      axios.delete(`http://localhost:9999/api/deleteCartItems/${id}`).then(
        res=>{
          getCartItems();
        }
      ).catch(error=>{
        console.log(error);
      })
    }

    const goToPayment =()=>{
          navigate("/payment")
    }
    

    return (
        <>
        <div className="cart-container">
          <Navbar/>
           <h1>Welcome To Cart</h1>

           {
             cartItems.length===0 ? 
             <div className="empty">
                <h2>Cart is Empty</h2>
             </div> : 
             <div className="table-container">
             <table className="cart-table table-responsive table-bordered ">
             <thead>
              <tr >
                  <th>Dish Id</th>
                  <th>Dish Image</th>
                  <th>Dish Name</th>
                  <th>Vendor Name</th>
                  <th>Unit Price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Action</th>  
              </tr>
              </thead>
              <tbody>
      {
             cartItems.map((cartItem)=>{
                    return <tr style={{fontSize:"1rem",fontWeight:"bold"}} key={cartItem.id}>
                            <td>{cartItem.dishId}</td>
                            <td><img  className="dish-image" src={cartItem.dishImage} alt="Dish Image" style={{width:"20%"}} /></td>
                            <td>{cartItem.dishName}</td>
                            <td>{cartItem.vendorName}</td>
                            <td>{cartItem.unit_price}</td>
                            <td>{cartItem.discount}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.totalAmount}</td>
                            <td>
                              <div className="button-container">
                              <button className="increase" onClick={()=>{increase(cartItem.id)}}>+</button>
                              <button className="decrease" onClick={()=>{decrease(cartItem.id)}}>-</button>
                              </div>
                            </td>
                    </tr>
             })
          }
               </tbody>
             </table>
             <center>
             <button className="place-order" style={{width:"10%"}} onClick={goToPayment}>Place Order</button>
             </center>
             </div>

           }
        </div>
        <Footer/>
        </>
    );
}


export default Cart;