import "./Payment.css";
import Navbar from "../home/Navbar";
import { useState,useEffect} from "react";
import axios from "axios";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Payment() {

    const [cartItems, setCartItems] = useState([{}]);
    var customerId = sessionStorage.getItem("customerId");
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    const [totalAmt,setTotalAmt] = useState(0.0);
    const [paymentOption, setPaymentOption] = useState("");
    var token = sessionStorage.getItem("token");

    useEffect(()=>{
        debugger;
        getCartItems();
      },[]);

    const getCartItems=()=>{
        debugger;
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
            var amt = 0.0; 
            for(var i=0;i<res.data.length;i++){
                amt += res.data[i].totalAmount;
            }  
            setTotalAmt(amt);
        })
        .catch(error=>{
            debugger
            console.log(error);
        })
    }

    const togglePayment=(option)=>{
          setPaymentOption(option);
    }

    const placeOrder=()=>{
      if(paymentOption===""){
        toast.error("Please select payment option",{autoClose:2000})
        return;
      }
        debugger
        axios.post(`http://localhost:8080/orders/${customerId}`,{
            "orderTotal": totalAmt,
            "orderTime": "",
            "deliveryTime": "",
            "orderStatus": "ORDERED" 
        }, {
            headers:{
              'Authorization': 'Bearer '+ token
            }
          }).then(res=>{
            debugger
            var orderId = res.data;
            deleteCartItems();
            sendEmail(orderId);
            addPaymentDetails(orderId); 
          }).catch(error=>{
            debugger
            console.log(error);
          })
    }

    const sendEmail=(orderId)=>{
      debugger
         axios.post(`http://localhost:9999/api/sendEmail`,{
          orderId
         }).then(res=>{
          debugger
             console.log(res.data)
         })
         .catch(error=>{
           debugger
           console.log(error);
         })
    }

    const deleteCartItems =()=>{
        debugger
        axios.delete(`http://localhost:9999/api/clearCart/${customerId}`,
        ).then(res=>{
            debugger
            console.log(res.data);
          }).catch(error=>{
            debugger
            console.log(error);
          })
    }

    const addPaymentDetails=(orderId)=>{
        debugger
        axios.post(`http://localhost:8080/payments/${paymentOption}/${orderId}`,
        {
            headers:{
              'Authorization': 'Bearer '+ token
            }
          } ).then(res=>{
            debugger
            toast.success("Ordered Placed Successfully");
            navigate("/home");
          }).catch(error=>{
            debugger
            console.log(error);
          })
    }

  return (
    <div className="payment-container">    
    <Navbar/>
    
        {/* <div className="col-3"></div> */}
        {/* <div className="form-container"> */}
        {/* <center> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 style={{fontWeight:"bolder",color:"white"}}>Payment</h2>
           <div className="pform">
             
             <div className="box">
             <input type="radio" value="UPI" name="payment" onClick={()=>{togglePayment('UPI')}}/>UPI
             </div>
             <div className="box">
             <input type="radio" value="DEBIT_CARD" name="payment" onClick={()=>{togglePayment("DEBIT_CARD")}}/>DEBIT_CARD
             </div>
             <div className="box">
             <input type="radio" value="CREDIT_CARD" name="payment" onClick={()=>{togglePayment("CREDIT_CARD")}}/>CREDIT_CARD
             </div>
             <div className="box">
             <input type="radio" value="NET_BANKING" name="payment" onClick={()=>{togglePayment("NET_BANKING")}}/>NET_BANKING
             </div>
             <button className="btn btn-success"onClick={placeOrder} style={{width:"10rem"}}>Pay ₹{totalAmt}</button>
           </div>
           {/* <div class="scene scene--card">
<div class="card">
  <div class="card__face card__face--front">front</div>
  <div class="card__face card__face--back">back</div>
</div>
</div> */}
           {/* </center> */}
          {/* </div> */}
        {/* <div className="col-3"></div> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </div>
  )
}

export default Payment