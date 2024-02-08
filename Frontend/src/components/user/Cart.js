import American from "../../Cuisines/American";
import { Link } from "react-router-dom";

function Cart({Id}){
    return <>
      <div>
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="card">
          <img
            src={"https://cdn4.vectorstock.com/i/1000x1000/23/93/cart-a-background-vector-1822393.jpg"}
            className="img-fluid card-img-top"
            alt="homepage"
          />
          <div className="card-img-overlay">
            <nav className="navbar navbar-expand-sm me-3">
              <div className="container-fluid justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid mt-5">
              <h1
                className="h1 text-center"
                style={{
                  color:"navy",
                  fontSize:"100px",
                  fontWeight: "bolder",
                  fontFamily: "monospace",
                }}
              >
               Cart
              </h1>
              <p className="h4 text-center" style={{color:"black", alignContent:"center"}}>
                <center>
                <table className="table table-bordered"style={{width:"500px"}}>
                    <tr>
                        <td>Burger</td>
                        <td>₹ 1200</td>
                        <td>QTY 1</td>
                    </tr>
                      <tr>
                    <td>Hot Dog</td>
                    <td>₹ 1000</td>
                    <td>QTY 1</td>
                    </tr>

                   {/* <tr>c
                    <button style={{width:"500px", backgroundColor:"gray"}}>
                        Place Order
                    </button>
                    </Link>
                   </tr> */}
                </table>
                </center>
                <div><Link to = "/bill">
                <button style={{width:"500px", backgroundColor:"gray"}}>
                        Place Order
                    </button>
                    </Link>
                </div>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>

}

export default Cart;