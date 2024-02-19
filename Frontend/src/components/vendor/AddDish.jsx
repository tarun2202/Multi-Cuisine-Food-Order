import { Link, useNavigate } from "react-router-dom";
import "./AddDish.css";
import { Last } from "react-bootstrap/esm/PageItem";
import React,{ useEffect,useState} from "react";
import VNavbar from "./VNavbar";
import Footer from "../home/Footer";
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

function AddDish() {

    const [dimage,setDimage] = useState('');
    const [ddescription, setDdescription] = useState('');
    const [dname,setDname] = useState('');
    const [lmobileno,setRmobileno] = useState('');
    const navigate = useNavigate();
    const[type,setType] = useState("INDIAN");
    const[category,setCategory] = useState("VEGETARIAN");
    const[price,setPrice] = useState("");
    const[discount,setDiscount] = useState("");

    var vendorId=sessionStorage.getItem("vendorId");
     var token= sessionStorage.getItem("token");
     var isVendorLoggedIn= sessionStorage.getItem("isVendorLoggedIn");

    const addDish=()=>{
    debugger
        if(dname==="" || ddescription==="" || type==="" || category==="" ||
        price==="" || discount==="" || dimage==="" ){
      toast.error("please enter all required fields",{autoClose:2000});
      return;
    }
    axios.post(`http://localhost:8080/dishes/${vendorId}`,
    {
         "dishName" : dname,
         "description" : ddescription,
         "category" :category,
         "cuisine" : type,
         "rating" : 0,
         "price" : price,
         "discount":discount,
         "dishImage": dimage
    },{
        headers:{
          'Authorization': 'Bearer '+ token
        }
      })
      .then(res=>{
        debugger
          if(res.data.message==="Dish added succesfully!"){
            toast.success(res.data.message,{autoClose:2000});
          }
          else{
            toast.error("Something Went Wrong",{autoClose:2000});
          }
      })
      .catch(error=>{
        debugger
        toast.error("Something Went Wrong",{autoClose:2000});
        console.log(error);
      })
    }

  return (
    <>
    <div className="addDish-container">   
    <VNavbar/>
    <div className="user-reg-form">
               <h2 style={{fontWeight:"bolder",color:"white"}}>Add A Dish</h2>
               <label>Dish Name</label>
               <input type="text" className="form-control" placeholder="Misal Pav" value ={dname} onChange={(e)=>{setDname(e.target.value)}}></input>
               <label>Dish Image</label>
               <input type="text" className="form-control" placeholder="jhd%vdbe.com" value ={dimage} onChange={(e)=>{setDimage(e.target.value)}}></input>
               <label>Description</label>
               <input type="text" className="form-control" placeholder="deep fried,sauce loaded" value={ddescription} onChange={(e)=>{setDdescription(e.target.value)}}></input>
               <div className="flex">
              <div>
              <label>Cuisine Type</label>
              <select name="cuisine-type" className="form-control" value={type} onChange={(e)=>{setType(e.target.value)}}>
              <option value="INDIAN">INDIAN</option>
              <option value="ITALIAN">ITALIAN</option>
              <option value="AMERICAN">AMERICAN</option>
              <option value="THAI">THAI</option>
              <option value="MEXICAN">MEXICAN</option>
              <option value="FRENCH">FRENCH</option>
              <option value="CHINESE">CHINESE</option>
              <option value="LEBANESE">LEBANESE</option>
              <option value="GREEK">GREEK</option>
              </select>
              </div>
              <div>
              <label>Category</label>
              <select name="category" className="form-control" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
              <option value="VEGETARIAN">VEGETARIAN</option>
              <option value="NON_VEGETARIAN">NON_VEGETARIAN</option>
              <option value="VEGAN">VEGAN</option>
              </select>
              </div>
              </div>
              <div className="flex">
              <div>
              <label>Price</label>
              <input type="text" className="form-control" placeholder="₹100" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
              </div>
              <div>
              <label>Discount</label>
              <input type="text" className="form-control" placeholder="0.10" value={discount} onChange={(e)=>{setDiscount(e.target.value)}}></input>
              </div>
              </div>
              <div className="inner-container">
              <div className="button-container">
               <button className="btn btn-dark" onClick={addDish} >Add</button>
               </div>
               </div>
             </div>
             <Footer/>
    </div>
    </>
  )
}

export default AddDish