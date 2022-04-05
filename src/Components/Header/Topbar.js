import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div>Forum</div>
      <div>Categories</div>
      <div>Books</div>
      <div style={{ color: "white" }}>Recipe Index</div>
      <div>Popular</div>
      <div className="register">Register</div>
      <div className="login">Login</div>
    </div>
  );
}
