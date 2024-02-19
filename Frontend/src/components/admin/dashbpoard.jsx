import React, { useEffect, useState } from 'react';
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { toast } from 'react-toastify';

function AdminDash() {

  const[vendors,setVendors] = useState([]);
  var token = sessionStorage.getItem("token");
  const[active,setAcvtive] = useState("false");
  const[avendors,setAvendors] = useState([]);
var adminLoggedIn = sessionStorage.getItem("adminLoggedIn");
 const[data,setData] = useState({});

  useEffect(()=>{
    if(adminLoggedIn==="true"){
    getInactiveVendors();
   getActiveVendors();
   getData();
  // getData();
  }
  else{
    toast.warning("Please Login As Admin First!!!!",{autoClose:2000});
  }
},[]);

  const getInactiveVendors=()=>{
    debugger
    axios.get(`http://localhost:8080/admin/inactive/vendors`,
    {
      headers:{
        'Authorization': 'Bearer '+ token
      }
    })
    .then(res=>{
      debugger;
      setVendors(res.data);
    })
    .catch(error=>{
      debugger;
       console.log(error);
    }
    )
  }

  const getData=()=>{
     debugger
     axios.get(`http://localhost:8080/admin/adminDashboard`,
     {
      headers:{
        'Authorization': 'Bearer '+ token
      }
    }).then(res=>{
      debugger
      setData(res.data);
    })
    .catch(error=>{
        debugger
        console.log(error);
    })
  }

  const getActiveVendors=()=>{
    debugger
    setAcvtive("true");
    axios.get(`http://localhost:8080/admin/active/vendors`,
    {
      headers:{
        'Authorization': 'Bearer '+ token
      }
    })
    .then(res=>{
      debugger;
      setAvendors(res.data);
    })
    .catch(error=>{
      debugger;
       console.log(error);
    }
    )
  }

  const approveVendor=(vendorId)=>{
    debugger
      axios.put(`http://localhost:8080/admin/activate/${vendorId}`,{
      headers:{
        'Authorization': 'Bearer '+ token
      }}).then(res=>{
        debugger
          if(res.data.message==="Successfully Approved The Vendor!"){
            toast.success(res.data.message,{autoClose:2000});
            console.log(res.data.mesage);
            window.location.reload();
          }
          else{
            toast.error("Something Went Wrong!");
          }
      })
      .catch(error=>{
        debugger
           toast.error("Something Went Wrong!");
      })
  }


  const inactiveVendor=(vendorId)=>{
    debugger
      axios.put(`http://localhost:8080/admin/inactivate/${vendorId}`,{
      headers:{
        'Authorization': 'Bearer '+ token
      }}).then(res=>{
        debugger
          if(res.data.message==="Successfully Inactivated The Vendor!"){
            toast.success(res.data.message,{autoClose:2000});
            console.log(res.data.mesage);
            window.location.reload();
          }
          else{
            toast.error("Something Went Wrong!");
          }
      })
      .catch(error=>{
        debugger
           toast.error("Something Went Wrong!");
      })
  }
  return <>
  <div>
    <h1>Admin Dashboard</h1>
  </div>
  <hr></hr>
  <div className='table-container'>
    <div className="data">
      <div className="data-card">
        <h5>Vendors Count</h5>
        <h5>{data.vendorCount}</h5>
      </div>
      <div className="data-card">
        <h5>Customer Count</h5>
        <h5>{data.customerCount}</h5>
      </div>
      <div className="data-card">
        <h5>Dish Count</h5>
        <h5>{data.dishCount}</h5>
      </div>
      <div className="data-card">
        <h5>Order Count</h5>
        <h5>{data.orderCount}</h5>
      </div>
      <div className="data-card">
        <h5>Revenue</h5>
        <h5>{data.revenue}</h5>
      </div>
    </div>
  <h3>Pending Vendors</h3>
  <table className="vendors">
      <thead>
        <tr>
          <th>Vendor Name</th>
          <th>Vendor Email</th>
          <th>Vendor MobileNo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { vendors.map((vendor)=>(
          <tr key={vendor.id}>
            <td>{vendor.vendorName}</td>
            <td>{vendor.vendorEmail}</td>
            <td>{vendor.mobileNo}</td>
            <td><button className="btn btn-success" onClick={()=>{approveVendor(vendor.id)}}>Approve</button>
           </td>
          </tr>
        ))
        }
      </tbody>
      </table>
      <br></br>
      <br></br>
      {/* <button className='btn-active' onClick={getActiveVendors}>Get Active Customers</button> */}
      <h3>Active Vendors</h3>
      <table className="vendors">
      <thead>
        <tr>
          <th>Vendor Name</th>
          <th>Vendor Email</th>
          <th>Vendor MobileNo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { avendors.map((avendor)=>(
          <tr key={avendor.id}>
            <td>{avendor.vendorName}</td>
            <td>{avendor.vendorEmail}</td>
            <td>{avendor.mobileNo}</td>
            <td><button className="btn btn-success" onClick={()=>{inactiveVendor(avendor.id)}}>Inactivate</button>
           </td>
          </tr>
        ))
        }
      </tbody>
      </table>
  </div>
  </>
}
export default AdminDash;