import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import "./Orders.css"
import { useNavigate } from 'react-router-dom';


function Orders() {

const[orders,setOrders] = useState([]);
var customerId = sessionStorage.getItem("customerId");
var token = sessionStorage.getItem("token");
var navigate = useNavigate(); 

useEffect(()=>{
 getOrders();
},[])

const getOrders=()=>{
    debugger
    axios.get(`http://localhost:9999/api/orderItems/${customerId}`
).then(
        
        res=>{
            debugger
            setOrders(res.data);
        }
    ).catch(
        error=>{
            debugger
            toast.error("Something Went Wrong!",{autoClose:2000})
            console.log(error);
        }
    )
}

const goToFeedback=(dishId)=>{
    sessionStorage.setItem("feedbackDishId",dishId);
    navigate("/feedback")
}

  return (
    <div className='cus-orders'>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <div>
        <h1>Your Orders</h1>
        </div>
       <table className='cus-Orders-table'>
        
         <thead>
            <tr>
                <th>Dish Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Vendor Name</th>
                <th>Action</th>
            </tr>
         </thead>
         <tbody>
            {orders.map((order)=>{
                    return <tr key={order.dish_name} style={{textAlign:"center"}}>
                        <td>{order.dish_name}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.vendor_name}</td>
                        <td><button className='btn btn-dark' onClick={()=>{goToFeedback(order.dishId)}}>Feedback</button></td>
                    </tr>
                })
            }
         </tbody>

       </table>
       </center>
       <Footer/>
    </div>
  )
}

export default Orders