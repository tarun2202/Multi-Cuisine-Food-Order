import { useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Data from "../../Data";
import {Link} from 'react-router-dom';





function Home(){
    const [value, setValue] = useState();
    const [data, setData] = useState([]);
    const onChange = async (e) =>{ 
      setValue(e.target.value);
      // const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
      //const data = await respone.json();
      setData(Data);
    }

    return <>
    <div className="table table-responsive" style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJpPYV0Fko3pcckwDwlQAxgo0whxIpLgWPg&usqp=CAU')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <Link to="/profile"><button style={{borderRadius:"5px", width:"120px", height:"50px",backgroundColor:"cornsilk"}}>Profile</button></Link>
      <section className='container-mt-2'>
        <h1 className='text-center mb-2'style={{fontWeight:"800", fontFamily:"cursive",color:"white"}}>Select Your Cravings</h1>
      </section>
      <div className="search" style={{textAlign:"left", marginTop : "50px",justifyItems:"center", background:"inherit"}}>
        <input type='text' placeholder='Search your cuisine here' onChange={onChange} value={value} style={{borderRadius :"10px", marginLeft:"20px",height:"60px"}}></input> {" "}
        <Link to='/american'><button style={{backgroundColor :"grey", borderRadius:"10px",height:"60px"}} onClick={{}}>Search</button></Link>
       
        {
            data.filter(item => item.title.indexOf(value)===0 && item.title !== value)
            .map(item => <div id='dropdown' key={item.id} onClick={() => setValue(item.title)} style={{color:"white",backgroundColor:"GrayText", width:"370px",height:"50px",marginLeft:"20px",borderRadius:"10px"}}>
             {item.title} <hr/>
             </div>)
        }
  
        </div>
        <br/>
        <br/>
        <br/>
  <div>
      <div className='btn-container d-flex justify-content-around mt-2'style={{background:"inherit"}}>
        <div style={{background:"inherit"}} > 
        <Link to = "/american">
          <Button variant="primary" style={{marginLeft:"50px"}}>American</Button>
        </Link>
          <br/>
          <br/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTEX-PzIE6z2kk2sjvVIYAmksAc34G3CByaLZX4BbkyCIDxHFwJfZB_gIDhhc00Auefs&usqp=CAU' style={{height:"200px", width:"250px", borderRadius :"10px"}}></img>      
        </div>
     
      <div style={{background:"inherit"}} ><Button variant="secondary"style={{marginLeft:"60px"}}>Mexican</Button>
      <br/>
      <br/>
              <img src='https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505' style={{height:"200px", width:"250px", borderRadius :"10px"}}></img>      
      </div>
      <div style={{background:"inherit"}}><Link to = "/french"><Button variant="success" id='french' style={{marginLeft:"70px"}}>French</Button></Link>
      <br/>
      <br/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wRfWYpGhILfebRs2H9w7GPrh3QjnBFVFlA&usqp=CAU' style={{height:"200px", width:"250px", borderRadius :"10px"}}></img> 
      </div>
     <div style={{background:"inherit"}}> <Button variant="danger"style={{marginLeft:"65px"}}>Chinese</Button>
     <br/>
      <br/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILOc4G2S3IvWtplz-HBc6EVPjB2V8Jp4yRg&usqp=CAU'style={{height:"200px", width:"250px", borderRadius :"10px"}} ></img> 
     </div>
     <div style={{background:"inherit"}} ><Button variant="warning"style={{marginLeft:"10px"}}>North Indian</Button>
      <br/>
      <br/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2_KGVriWakAc8AlENJXDvLQuUtJ7FURPHA&usqp=CAU'style={{height:"200px", width:"200px", borderRadius :"10px"}}></img> 
          </div> 
     <div style={{background:"inherit"}}><Button variant="info"style={{marginLeft:"500x"}}>South Indian</Button>
     <br/>
      <br/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwL3VegtBAhOG48g1_7MM8WuTCsG2dk5qEWA&usqp=CAU'style={{height:"200px", width:"200px", borderRadius :"10px"}}></img> 
     </div> 


    {/* <Button variant="light">Light</Button>{' '} */}
      <div style={{background:"inherit"}}><Button variant="dark"style={{marginLeft:"70px"}}>Italian</Button>
      <br/>
      <br/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupdhOU4-hYChtAEMQRES8LlGW9cdlo6QLIA&usqp=CAU'style={{height:"200px", width:"250px", borderRadius :"10px"}}></img> 
      </div>
      </div>
  </div>
  <br/>
  <br/>
  <br/>

  <div style={{display:"flex",justifyContent:'space-around'}}>
  <Card style={{ width: '12rem'}}>
      <Card.Img style={{marginBlock:'5px',height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXru1zan-jXXzopGpt4xvMJOzAzYq4FzcLQ&usqp=CAU"/>
      <Card.Body style={{backgroundColor:"aquamarine"}}>
        <Card.Title>Masala Dosa</Card.Title>
        <Card.Text>
          Price :₹ 75<br></br>
          Restaurant : Taste of Tanjore
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem'}}>
      <Card.Img style={{marginBlock:'5px',height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTEX-PzIE6z2kk2sjvVIYAmksAc34G3CByaLZX4BbkyCIDxHFwJfZB_gIDhhc00Auefs&usqp=CAU"/>
      <Card.Body style={{backgroundColor:"aquamarine"}}>
        <Card.Title>Chicken Burger</Card.Title>
        <Card.Text>
          Price :₹ 150<br></br>
          Restaurant : Burger King
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem'}}>
      <Card.Img style={{marginBlock:'5px',height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrRgVpwVAhsZNRgBOEW879r_2oX-_usRydQ&usqp=CAU"/>
      <Card.Body style={{backgroundColor:"aquamarine"}}>
        <Card.Title>Rotatouille</Card.Title>
        <Card.Text>
          Price :500₹ <br></br>
          Restaurant : The Lorenzo
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem'}}>
      <Card.Img style={{marginBlock:'5px',height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEKxS_oiXEpDXyfrFrf1_MD-joZFwheMqcA&usqp=CAU"/>
      <Card.Body style={{backgroundColor:"aquamarine"}}>
        <Card.Title>Tacos</Card.Title>
        <Card.Text>
          Price :₹ 250<br></br>
          Restaurant :Gringo Loco
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem'}}>
      <Card.Img style={{marginBlock:'5px',height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoP1LChJtvKyxfmslQ3rmnyy1m8CnspqufA&usqp=CAU"/>
      <Card.Body style={{backgroundColor:"aquamarine"}}>
        <Card.Title>Chhole Bhature</Card.Title>
        <Card.Text>
          Price :₹ 80<br></br>
          Restaurant : Nawab of North
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>
      
      {/* <div className='container mt-3'>
     <div className='row d-flex justify-content-center align-items-center'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     </div>
      </div> */}
   
     </div>
</>

    
}
export default Home; 
