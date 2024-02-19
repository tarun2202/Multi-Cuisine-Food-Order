import React, { useEffect, useState } from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../home/Navbar';

function Profile() {
const[name,setName] = useState("");
const[email,setEmail] = useState("");
const[mobileNo,setMobileNo] = useState("");
const[street,setStreet] = useState("");
const[city,setCity] = useState("");
const[state,setState] = useState("");
const[country,setCountry] = useState("");
const[pincode,setPincode] = useState("");

const[isEdit,setIsEdit] =useState(false);

var customerId = sessionStorage.getItem("customerId");
var token = sessionStorage.getItem("token");

const navigate = useNavigate();

useEffect(()=>{
  getProfile();
},[])

const getProfile=()=>{
  debugger
  axios.get(`http://localhost:8080/customers/${customerId}`,
  {
    headers:{
      'Authorization': 'Bearer '+ token
    }
  }).
  then(res=>{
    debugger
     setName(res.data.customerName);
     setEmail(res.data.customerEmail);
     setMobileNo(res.data.customerMobileNo);
     setStreet(res.data.street);
     setCity(res.data.city);
     setState(res.data.state);
     setCountry(res.data.country);
     setPincode(res.data.pincode);
  }).catch(error=>{
    debugger
    console.log(error);
  }
  )
  }

const updateProfile=()=>{
  debugger
   axios.put(`http://localhost:8080/customers/${customerId}`,{
     
   "customerName" : name,
   "customerEmail" :email,
   "customerMobileNo" : mobileNo,
   "street" : street,
   "city":city,
   "state":state,
   "country":country,
   "pincode":pincode
   },
   {
    headers:{
      'Authorization': 'Bearer '+ token
    }
  }
   ).then(res=>{
    debugger
    if(res.data.message==="Pofile Updated Successfully!")
    {
      toast.success(res.data.message,{autoClose:2000});
      window.location.reload();
    }
   }).catch(error=>{
    debugger
      console.log(error);
      toast.error("Something Went Wrong!",{autoClose:2000});
   })
}

const logout=()=>{
  sessionStorage.clear();
  navigate("/home");
}
  return <>
  <div className='text-center'>
  <Navbar/>
  <br></br>
  <br></br>
  <br></br>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Your Orders</Dropdown.Item>
        <Dropdown.Item >Help</Dropdown.Item>
        <Dropdown.Item onClick={logout}>LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className='table table-responsive'>
     
      <div className="container pt-3 pb-5 px-5 border border-2 rounded border-dark bg-light mt-5 text-center">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRearnkNlxuAqMCW15iHhCh085zdXiM17f5ow&usqp=CAU'></img>
          <h2>Profile</h2>
          <button className='edit' onClick={()=>{setIsEdit(true)}}>Edit</button>
          <form action='/UserInfo' method='post'>
          <div style={{textAlign:"left"}}>
                <h6>User Name</h6>
                {isEdit?<input className='form-control'value={name} type="text" onChange={e=>{setName(e.target.value)}}></input>
                : <div className='pt-2 pb-2 border'>{name}</div>} 
            </div>
            <div style={{textAlign:"left"}}>
                <h6>E-Mail</h6>
                {isEdit?<input className='form-control'value={email} type="text" onChange={e=>{setEmail(e.target.value)}}></input>
                : <div className='pt-2 pb-2 border'>{email}</div>} 
              </div>
              <div style={{textAlign:"left"}}>
                <h6>Mobile No</h6>
                {isEdit?<input className='form-control'value={mobileNo} type="text" onChange={e=>{setMobileNo(e.target.value)}}></input>
                 :<div className='pt-2 pb-2 border'>{mobileNo}</div>}
              </div>
              <h3>Address</h3>
              <div style={{textAlign:"left"}}>
                <h6>street</h6>
                {isEdit?<input className='form-control'value={street} type="text" onChange={e=>{setStreet(e.target.value)}}></input>
                 :<div className='pt-2 pb-2 border'>{street}</div>}
                  <h6>City</h6>
                {isEdit?<input className='form-control'value={city} type="text" onChange={e=>{setCity(e.target.value)}}></input>
                 :<div className='pt-2 pb-2 border'>{street}</div>}
                  <h6>State</h6>
                {isEdit?<input className='form-control'value={state} type="text" onChange={e=>{setState(e.target.value)}}></input>
                 :<div className='pt-2 pb-2 border'>{state}</div>}
                  <h6>Country</h6>
                {isEdit?<input className='form-control'value={country} type="text" onChange={e=>{setCountry(e.target.value)}}></input>
                 :<div className='pt-2 pb-2 border'>{country}</div>}
                 <h6>Pincode</h6>
                {isEdit?<input className='form-control'value={pincode} type="text" onChange={e=>{setPincode(e.target.value)}}></input>
                 :<div className='pt-2 pb-2 border'>{country}</div>}
                 </div>
          </form>
          <button className="update" onClick={updateProfile}>Update</button>
      </div>
 </div>
 </div>
  
  </>
}
export default Profile;