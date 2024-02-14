import "./Cart.css";
import Navbar from "../home/Navbar";
import { useState,useEffect} from "react";
import axios from "axios";






function Cart(){

    const [cartItems, setCartItems] = useState([]);
    var customerId = sessionStorage.getItem("customerId");
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    useEffect(()=>{
        debugger;
        getCartItems();
      },[]);
  
    //   useEffect(()=>
    // {
    //     console.log("Component Did Update is called..")
    // }, [cartItems]);

    const getCartItems=()=>{
        axios.get(`http://localhost:8080/cartitems/getCartItems/${customerId}`)
        .then(res=>{
            setCartItems(res.data)    
            console.log(res.data);     
        })
        .catch(error=>{
            console.log(error);
        })
    }

    

    return (
        <div className="cart-container">
          <Navbar/>
           <h1>Welcome To Cart</h1>
           <table className="cart-table table-responsive table-bordered">
           <thead>
            <tr>
                <th>Dish Id</th>
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
           axios.get(``)
                  return <tr key={cartItem.dishId}>
                          <td>{cartItem.dishId}</td>
                          <td>something</td>
                          <td>{cartItem.unit_price}</td>
                          <td>{cartItem.discount}</td>
                          <td>{cartItem.quantity}</td>
                          <td>{cartItem.totalAmount}</td>
                          <td>
                            <button className="btn btn-primary">+</button>
                            <button className="btn btn-danger">-</button>
                          </td>
                  </tr>
           }

           )

    }
                
            </tbody>
           </table>
        </div>
    );
}


export default Cart;