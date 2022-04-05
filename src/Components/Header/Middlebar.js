import React from "react";
import "./middlebar.css";

export default function Middlebar() {
  return (
    <div className="middlebar-container">
      <div className="logo">EASYMEALS</div>
      <div className="search-container">
        <div className="allcat">ALL CATEGORIES</div>
        <div className="input-container">
          <input type="text" placeholder="Search recipes" />
        </div>
        <div className="search-icon">
          <i className="fa fa-search" style={{ color: "black" }}></i>
        </div>
      </div>
      <div className="box-container">
        <div className="favourites">Favourites</div>
        <diV className="cart">Cart (0.00)</diV>
      </div>
    </div>
  );
}
