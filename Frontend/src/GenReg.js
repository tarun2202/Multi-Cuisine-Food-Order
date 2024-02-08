import { Link } from "react-router-dom";

function GenReg() {
    return (
      <div>
        <div class="container pt-3 pb-5 px-5 border border-2 rounded border-dark bg-light mt-5">
          <p class="mb-3 text-center display-5">Register As</p>
          <br/>
          <br/>
          <div>
           <Link to="/vendorreg"><button style={{width:"400px",marginLeft:"370px",height:"70px",borderRadius:"10px"}}>Vendor</button></Link>
             {/* <label for="email">Email</label> */}
          </div>
          <br/>
          <br/>
          <br/>
          <div >
          <Link to="userReg"><button style={{width:"400px",marginLeft:"370px",height:"70px",borderRadius:"10px"}}>User</button></Link>
            {/* <label for="password">Password</label> */}
          </div>
          {/* <div class="text-center d-grid">
            <button class="btn btn-dark btn-lg mt-5 btn-block">Submit</button>
          </div> */}
          {/* <p class="h5 mt-3">
            Not Registered? <a href="#">Register here!</a>
          </p> */}
        </div>
      </div>
    );
  }
  
  export default GenReg;