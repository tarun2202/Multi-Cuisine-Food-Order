import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import VNavbar from './VNavbar';
import "./Orders.css"


function Orders() {

const[orders,setOrders] = useState([]);

var vendorId = sessionStorage.getItem("vendorId")

useEffect(()=>{
  getOrders();
},[])

const getOrders=()=>{
    axios.get(`http://localhost:9999/api/getOrders/${vendorId}`).
    then(res=>{
        setOrders(res.data);
    }).
    catch(error=>{
        console.log(error);
    })
}

const changeStatus =(id)=>{
  axios.put(`http://localhost:9999/api/changeStatus/${id}`)
  .then(res=>{
    if(res.data.message==="Order Prepared"){
        toast.success(res.data.message,{autoClose:2000})
        window.location.reload();
    }
  }).
  catch(error=>{
      console.log(error);
  })
}

  return (
    <div className='orders-container'>
        <VNavbar/>
        <h1>Orders</h1>
        <div className="orders-table-container">
          <table className='table table-responsive'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Dish Name</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                 {orders.map((order)=>(
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.dish_name}</td>
                        <td>{order.quantity}</td>
                        <td>{order.order_total}</td>
                        <td>{order.order_status}</td>
                        <td><button className="btn btn-success" onClick={()=>{changeStatus(order.id)}}>Prepare</button></td>
                    </tr>
                 ))}
            </tbody>
          </table>
          <br/>
          <br/>
          <br/>
        </div>
    </div>
  )
}

export default Orders