import React from "react";

function Home() {
  return (
    <div>
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="card">
          <img
            src={require("../../assets/images/home.jpg")}
            className="img-fluid card-img-top"
            alt="homepage"
          />
          <div className="card-img-overlay">
            <nav className="navbar navbar-expand-sm me-3">
              <div className="container-fluid justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/addrest">
                      Add restaurant
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/genlogin">
                      Log in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/genReg">
                      Register
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
                  fontSize:"200px",
                  fontWeight: "bolder",
                  fontFamily: "monospace",
                }}
              >
                foodie
              </h1>
              <p className="h4 text-center" style={{color:"black"}}>
                Find the best restaurants,cafe's and bars in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
