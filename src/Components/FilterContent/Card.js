import React from "react";
import "./card.css";
import food_img from "../../assets/food_img.jpg";

export default function Card({ item }) {
  return (
    <div className="card-container">
      <img src={food_img} alt="" />
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>
      <div className="smallText">{item.season}</div>
      <div className="smallText">{item.dietary}</div>
      <div className="smallText">{item.meal}</div>
      <div className="smallText">{item.type}</div>
    </div>
  );
}
