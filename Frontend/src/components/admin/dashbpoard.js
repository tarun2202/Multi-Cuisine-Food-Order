import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function AdminDash() {
  return <>
  <div className='text-center'>
  {/* <ListGroup style={{width:"400px"}}>
      <ListGroup.Item>Your Orders</ListGroup.Item>
      <ListGroup.Item>Favourites</ListGroup.Item>
      <ListGroup.Item>Settings</ListGroup.Item>
      <ListGroup.Item>Help</ListGroup.Item>
      <ListGroup.Item>Log Out</ListGroup.Item>
    </ListGroup> */}
    {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Your Orders</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Favourites</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
        <Dropdown.Item href="/">LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
    <div className='table table-responsive'>
      <div className="container pt-3 pb-5 px-5 border border-2 rounded border-dark bg-light mt-5 text-center">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRearnkNlxuAqMCW15iHhCh085zdXiM17f5ow&usqp=CAU'></img>
          <h2>Admin</h2>
          <form action='/UserInfo' method='post'>
              <div style={{textAlign:"left"}}>
                <h6>Add Restaurant</h6>
                {/* <div className='pt-2 pb-2 border'>Viraj Malap</div> */}
                <input type='text' style={{borderRadius:"5px"}}></input>
                {"   "}
                <button style={{backgroundColor:"aqua", borderRadius:"5px"}}>Add</button>
              </div>
              <div style={{textAlign:"left"}}>
                <h6>Remove Restaurant</h6>
                {/* <div className='pt-2 pb-2 border'>Viraj Malap</div> */}
                <input type='text' style={{borderRadius:"5px"}}></input>
                {"   "}
                <button style={{backgroundColor:"coral", borderRadius:"5px"}}>Remove</button>
              </div>
              <div style={{textAlign:"left"}}>
                <h6>Add Dish</h6>
                {/* <div className='pt-2 pb-2 border'>Viraj Malap</div> */}
                <input type='text' style={{borderRadius:"5px"}}></input>
                {"   "}
                <button style={{backgroundColor:"aqua", borderRadius:"5px"}}>Add</button>
              </div>
              <div style={{textAlign:"left"}}>
                <h6>Remove Dish</h6>
                {/* <div className='pt-2 pb-2 border'>Viraj Malap</div> */}
                <input type='text' style={{borderRadius:"5px"}}></input>
                {"   "}
                <button style={{backgroundColor:"coral", borderRadius:"5px"}}>Remove</button>
              </div>
              <div style={{textAlign:"left"}}>
                <h6>Add User</h6>
                {/* <div className='pt-2 pb-2 border'>Viraj Malap</div> */}
                <input type='text' style={{borderRadius:"5px"}}></input>
                {"   "}
                <button style={{backgroundColor:"aqua", borderRadius:"5px"}}>Add</button>
              </div>
              <div style={{textAlign:"left"}}>
                <h6>Remove User</h6>
                {/* <div className='pt-2 pb-2 border'>Viraj Malap</div> */}
                <input type='text' style={{borderRadius:"5px"}}></input>
                {"   "}
                <button style={{backgroundColor:"coral", borderRadius:"5px"}}>Remove</button>
              </div>
          </form>
      </div>
 </div>
 </div>
  
  </>
}
export default AdminDash;