import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Data from "../Data";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Cart from '../components/user/Cart';


function American(){

    const [data,setData] = useState(Data);
   // const [itemId,seItemId] = useState();

    const sendToCart=(itemId)=>{
        return <Cart 
        Id = {itemId}
        />
         }
    return <>
    <div className='table table-responsive' style={{display:"grid"}}>
{
     data.filter(item =>  item.kind === "American")
     .map(item=>
     <div className='' style={{border:"solid 3px", width:"50%"}}>
        <div style={{position:"relative",float:"right"}}>{item.desc}</div>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXe7ZWu6rBlpEZNzJZqvplJa-KUHFn9cIzcA&usqp=CAU' style={{width:"200px"}}></img>
       <br></br>
        <h2>{item.title}</h2>
        <h3>Price:₹{item.price}</h3>
        <h5>Restaurant:</h5>
    <Link to="/cart">
    <button id='{item.title}' name='{item.price}' onClick={() => sendToCart(item.id)} style={{width:"20%", height:"13%",fontSize:"30px",marginBottom:"3px",borderRadius:"5px"}}>Add to Cart
    </button>
    </Link>
     </div>)    
}

<Cart 


/>
    </div>
    </>
    
};

export default American;