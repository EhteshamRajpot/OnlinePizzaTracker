import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import {About} from "../pages/About"
import {Contact} from "../pages/ContactUs"
import Policy from "../pages/Policy";
import "./Nav.css";
import "./TopBar.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { MdLocalOffer } from "react-icons/md";
import { HomeScreen } from "../../screens/HomeScreen";
import { CartScreen }from "../../screens/CartScreen";
import { Register } from "../../screens/Register";
import { Login } from "../../screens/Login";
import { OrderScreen } from "../../screens/OrderScreen";
import { AdminScreen } from "../../screens/AdminScreen";
import { UserList } from "../admin/UserList";
import OrderList from "../admin/OrderList";
import AddNewPizza from "../admin/AddNewPizza";
import  PizzaList  from "../admin/PizzaList";
import EditPizza from "../admin/EditPizza";
export const TopBar = () => {
  return (
    <div>
      <nav
        className={"navbar navbar-expand-lg navbar-light fixed-top"}
        id={"NavBar"}
      >
        <div className={"container-fluid"}>
          <button
            type="button"
            className={"navbar-toggler text-white"}
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          {/* <Navbar.Toggle aria-controls="navbarCollapse" /> */}
          {/* <marquee> */}
          <h6 className="text-white" style={{ marginLeft: "30px" }}>
            <MdLocalOffer className="text-warning" />
            &nbsp;&nbsp;Free Home delivery over 1300/- Rupees
          </h6>
          {/* </marquee> */}
          <nav className={"collapse navbar-collapse"} id="navbarCollapse">
            <ul className={"navbar-nav ms-auto me-5"}>
              <li className="nav-item">
                <a href="/" className={"nav-link text-white"}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/pizzaShop" className={"nav-link text-white"}>
                  PizzaShop
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className={"nav-link text-white"}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/contactUs" className={"nav-link text-white"}>
                  ContactUs
                </a>
              </li>
              <li className="nav-item">
                <a href="/policy" className={"nav-link text-white"}>
                  Policy
                </a>
              </li>

              {/* <li className="nav-item">
                <a href="/cartScreen" className={"nav-link text-white"}>
                  CartScreen
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="login" className={"nav-link text-white"}>
                  Login
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactUs" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/pizzaShop" element={<HomeScreen />}></Route>
        <Route path="/cartScreen" element={<CartScreen />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={<OrderScreen />}></Route>
        <Route path="/admin" element={<AdminScreen />}></Route>
        <Route path="/userList" element={<UserList />}></Route>
        <Route path="/pizzaList" element={<PizzaList />}></Route>
        <Route path="/addNewPizza" element={<AddNewPizza />}></Route>
        <Route path="/orderList" element={<OrderList />}></Route>
        <Route path="/admin" element={<AdminScreen />}>
          {/* <Route index element={<UserList />} /> */}
          <Route path="userList" element={<UserList />} />
          <Route path="pizzaList" element={<PizzaList />} />
          <Route path="addNewPizza" element={<AddNewPizza />} />
          <Route path="orderList" element={<OrderList />} />
          <Route path="editPizza/:pizzaId" element={<EditPizza />} />
        </Route>
      </Routes>
    </div>
  );
};
