import React, { useState } from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import "./Feedback.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Feedback() {

    const[feedback,setfeedback] =useState("");
    var dishId=sessionStorage.getItem("feedbackDishId")
    var customerId = sessionStorage.getItem("customerId");
    var navigate = useNavigate();

    const submitFeedback=()=>{
        debugger
      axios.post(`http://localhost:9999/api/feedback`,
      {
        feedback,
        customerId,
        dishId
      }
      ).then(res=>{
        debugger
         toast.success(res.data,{autoClose:2000});
         setfeedback("");
         setTimeout(()=>{navigate("/customerOrders")},2000);
         
      })
      .catch(error=>{
        debugger
        toast.error(error);
      })
    }

  return (
    <div className='feedback'>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Feedback</h1>
        <br/>
        <br/>
        <center>
        <textarea name="" id="" cols="30" rows="5" placeholder='Write your feedback....' onChange={(e)=>setfeedback(e.target.value)}>

        </textarea>
        <br></br>
        <button className="btn btn-success" onClick={submitFeedback}>Submit</button>
        </center>
        <Footer/>
    </div>
  )
}

export default Feedback