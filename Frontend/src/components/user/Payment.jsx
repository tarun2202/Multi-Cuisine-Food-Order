import "./Payment.css";
import Navbar from "../home/Navbar";
import { useState,useEffect} from "react";
import axios from "axios";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";

function Payment() {

    const [cartItems, setCartItems] = useState([{}]);
    var customerId = sessionStorage.getItem("customerId");
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    const [totalAmt,setTotalAmt] = useState(0.0);
    const [paymentOption, setPaymentOption] = useState("");

    useEffect(()=>{
        debugger;
        getCartItems();
      },[]);

    const getCartItems=()=>{
        debugger;
        axios.get(`http://localhost:8080/cartitems/getCartItems/${customerId}`)
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

  return (
    <div className="payment-container">    
    <Navbar/>
    
        {/* <div className="col-3"></div> */}
        {/* <div className="form-container"> */}
        {/* <center> */}
           <div className="form">
             <h2 style={{fontWeight:"bolder",color:"white"}}>Payment</h2>
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
             <button className="btn btn-success">Pay ₹{totalAmt}</button>
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
        <Footer/>
    </div>
  )
}

export default Payment