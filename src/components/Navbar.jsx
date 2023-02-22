import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state)=>state.handleCart)
  const loginState = useSelector((shouldLogin)=>shouldLogin.loginDetect)
  let name = JSON.parse(localStorage.getItem("logged user")) || "" ;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-white">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Paula's Choice
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
            {loginState?
            <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {name?name.split(" ")[0]:""}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>:
           <div className="button">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1">Login</i>
            </NavLink>
           </div>
           }
           <div className="button"><NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1">Cart({state.length})</i>
            </NavLink></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
