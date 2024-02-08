import {Link} from 'react-router-dom';

function Bill(){
    return <>
    <div>
        <div class="container pt-3 pb-5 px-5 border border-2 rounded border-dark bg-light mt-5">
           <table style={{fontSize:"40px", backgroundColor:"bisque"}}>
               <tr>
                <td>Item Total</td>
                <td>2200</td>
               </tr>
               <tr>
                <td>SGST</td>
                <td>25</td>
               </tr>
               <tr>
                <td>Delivery Chrges</td>
                <td>0</td>
               </tr>
               <tr>
                <td>Coupon Discount </td>
                <td>110</td>
               </tr>
           </table>
           <br></br>
           <br></br>
        <div style={{fontSize:"50px", backgroundColor:"aqua"}}>
            Order Total : ₹ 2125
        </div>
        <br></br>
        <br></br>
        <div>
           <Link to ="/alert"> <button style={{width:"500px",height:"100px",fontSize:"50px", backgroundColor:"GrayText", borderRadius:"15px"}}>Place Order</button></Link>
        </div>
        </div>

    </div>
    
    
    </>
}

export default Bill;