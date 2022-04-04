import React from "react";
import "./card.css";
import food_img from "../../assets/food_img.jpg";

export default function Card({ item }) {
  return (
    <div className="card-container">
      <img src={food_img} alt="" />
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.season}</div>
      <div>{item.dietaryPreference}</div>
      <div>{item.meal}</div>
      <div>{item.type}</div>
    </div>
  );
}
