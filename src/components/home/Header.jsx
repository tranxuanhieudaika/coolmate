import React from "react";
import logoHome from "../../assets/image/logoHome.png";
import head from "../../style/home/head.css"

import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header-container">
       
        <img className="header-logo" src={logoHome} alt="logoHome" />
        
      
      <ul className="header-nav-links">
        <li>Sale</li>
        <li>Sản phẩm</li>
        <li>Đồ lót</li>
        <li>Đồ thể thao </li>
        <li>Mặc hàng ngày</li>
        <li>Nước Hoa</li>
        <li>Sản xuất riêng</li>
        <li>Care&share</li>
      </ul>
      <div className="header-actionUser">
        <div className="header-actionUser-icon">
          <CiSearch />
          <input type="text" placeholder="Tim kiem san pham" />
        </div>
         <Link to="register"><FaUser className="header-actionUser-userIcon"/></Link>
         <FaShoppingBag className="header-actionUser-bagIcon"/>

      </div>
    </div>
  );
}

export default header;
