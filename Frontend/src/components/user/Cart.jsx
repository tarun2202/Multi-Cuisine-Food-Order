import "./Cart.css";
import Navbar from "../home/Navbar";
import { useState,useEffect} from "react";
import axios from "axios";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";






function Cart(){

    const [cartItems, setCartItems] = useState([{}]);
    var customerId = sessionStorage.getItem("customerId");
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const navigate = useNavigate();

    useEffect(()=>{
        debugger;
        getCartItems();
      },[]);
  
    //   useEffect(()=>
    // {
    //     console.log("Component Did Update is called..")
    // }, [cartItems]);

    const getCartItems=()=>{
        debugger;
        axios.get(`http://localhost:8080/cartitems/getCartItems/${customerId}`)
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
      axios.put(`http://localhost:8080/cartitems/increase/${id}`)
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
        axios.put(`http://localhost:8080/cartitems/decrease/${id}`)
        .then(res=>
          {
              if(res.data.message==="Decreased"){
                  getCartItems();
                  console.log(res.data);
              }
              else if(res.data.message==="Deleted"){
                  getCartItems();
                  console.log(res.data);
              }
          })
          .catch(error=>
              {
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
             <table className="cart-table table-responsive table-bordered">
             <thead>
              <tr>
                  <th>Dish Id</th>
                  <th>Image</th>
                  <th>Dish Name</th>
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
                    return <tr key={cartItem.id}>
                            <td>{cartItem.dishId}</td>
                            <td>{cartItem.dishImage}</td>
                            <td>{cartItem.dishName}</td>
                            <td>{cartItem.unit_price}</td>
                            <td>{cartItem.discount}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.totalAmount}</td>
                            <td>
                              <div className="button-container">
                              <button className="btn btn-primary" onClick={()=>{increase(cartItem.id)}}>+</button>
                              <button className="btn btn-danger" onClick={()=>{decrease(cartItem.id)}}>-</button>
                              </div>
                            </td>
                    </tr>
             })
          }
               </tbody>
             </table>
             <center>
             <button className="btn btn-dark" style={{width:"10%"}} onClick={goToPayment}>Place Order</button>
             </center>
             </div>

           }
        </div>
        <Footer/>
        </>
    );
}


export default Cart;