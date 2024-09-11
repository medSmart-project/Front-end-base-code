import React from "react";
import "../styles/style1.css";
import logo from "../../../assets/imgs/logo.png";
import avatar from "../../../assets/imgs/avatar.png";
import dashboard from "../../../assets/imgs/dashboard1.png";


import {
  FaBell,
  FaPlus,
  FaTable,
  FaSitemap,
  FaReceipt,
  FaTruck,
  FaHandshake,
  FaShoppingCart,
  FaExclamationTriangle,
  FaExclamationCircle,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="dash-header">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <FaBell className="icon icon-1" />
          </li>
          <li>
            <img src={avatar} alt="avatar" />
          </li>
        </ul>
      </header>

      {/* Main Content Wrapper */}
      <div className="wrapper">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <button className="flex flex-row space-x-5 justify-center pt-3">
            <FaPlus className="icon icon-1" /> <span>Quick add</span>
          </button>
          <ul>
            <li className="active flex ">
              <FaTable className="icon icon-1" />
              <span>Dashboard</span>
            </li>
            <li className="flex">
              <FaSitemap className="icon icon-1" />
              <span>Products</span>
            </li>
            <li className="flex">
              <FaReceipt className="icon icon-1" />
              <span>Billing</span>
            </li>
            <li className="flex">
              <FaTruck className="icon icon-1" />
              <span>Delivery</span>
            </li>
            <li className="flex">
              <FaHandshake className="icon icon-1" />
              <span>Partners</span>
            </li>
            <li className="flex">
              <FaShoppingCart className="icon icon-1" />
              <span>Cart</span>
            </li>
          </ul>
        </div>

        {/* Main Page Content */}
        <div className="page">
          <div className="content">
            <img src={dashboard} alt="doctors" />
            <div className="info">
              <h2 className="font-bold">Never worry about your inventory</h2>
              <button>Create a bill</button>
            </div>
          </div>

          {/* Stock Information */}
          <div className="stock">
            <div className="stock-box">
              <div className="icon">
                <FaExclamationTriangle
                  className="icon icon-1"
                  style={{ color: "red" }}
                />
              </div>
              <div className="info">
                <h3 className="font-bold">Out of stock</h3>
                <p>5 Products</p>
              </div>
            </div>
            <div className="stock-box">
              <div className="icon">
                <FaExclamationCircle
                  className="icon icon-1"
                  style={{ color: "#e5a819" }}
                />
              </div>
              <div className="info">
                <h3 className="font-bold">Low stock</h3>
                <p>2 Products</p>
              </div>
            </div>
            <div className="stock-box">
              <div className="icon">
                <FaTruck className="icon icon-1" style={{ color: "blue" }} />
              </div>
              <div className="info">
                <h3 className="font-bold">In delivery</h3>
                <p>3 Products</p>
              </div>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="pie">
            <div className="pie-chart"></div>
            <div className="description">
              <div>
                <div style={{ backgroundColor: "#e5a819" }}></div>Low stock
              </div>
              <div>
                <div style={{ backgroundColor: "red" }}></div>Out of stock
              </div>
              <div>
                <div style={{ backgroundColor: "blue" }}></div>In Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



