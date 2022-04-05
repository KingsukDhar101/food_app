import React from "react";
import Bottombar from "./Bottombar";
import "./header.css";
import Middlebar from "./Middlebar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <div className="header">
      <Topbar />
      <Middlebar />
      <Bottombar />
    </div>
  );
}
