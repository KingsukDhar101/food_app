import React, { useState, useEffect } from "react";
import "./FilterContent.css";
import { data } from "../../assets/data";
import Card from "./Card";

export default function FilterContent() {
  let filterCatInit = {
    season: "",
    dietary: "",
    meal: "",
    sweet: "",
  };

  const [prodarr, setProdarr] = useState(data);
  const [filtarr, setFiltarr] = useState(data);
  const [filtercat, setFiltercat] = useState(filterCatInit);
  const [isallempty, setIsallempty] = useState();

  function checkFilterCat(obj) {
    for (let i in obj) {
      if (obj[i] !== "") {
        return false;
      }
    }
    return true;
  }

  function filteration() {
    // console.log(filtercat);

    if (isallempty) {
    } else {
      let filterredArr = filtarr;
      if (filtercat.season !== "") {
        filterredArr = prodarr.filter(
          (item) => item.season === filtercat.season
        );
      }
      if (filtercat.dietary !== "") {
        filterredArr = filterredArr.filter(
          (item) => item.dietary === filtercat.dietary
        );
      }
      if (filtercat.meal !== "") {
        filterredArr = filterredArr.filter(
          (item) => item.meal === filtercat.meal
        );
      }
      console.log("filter: ", filterredArr);
      setFiltarr(filterredArr);
    }
  }

  function handleAllProduct() {
    // console.log(filtercat);

    for (let i in filtercat) {
      // console.log(i, filtercat[i]);
      let val = filtercat[i];
      console.log(val);
      if (val === "") {
        // console.log("null ---");
        continue;
      }
      let radio = document.querySelectorAll(`input[type=radio][name=${i}]`);
      console.log(radio);

      if (radio !== null) {
        // console.log("falsing : ", radio);
        for (let i = 0; i < radio.length; i++) {
          radio[i].checked = false;
        }
      }
    }
    setFiltercat(filterCatInit);
    setFiltarr(prodarr);
    setIsallempty(true);
  }

  function handleChange(e) {
    let { name, value } = e.target;
    // console.log(name, value);
    setFiltercat({ ...filtercat, [name]: value });
  }
  function handleSearch(e) {
    let { value } = e.target;
    console.log(value);
    let arr = filtarr.filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase()));
    console.log(arr);
    setFiltarr(arr);
  }

  useEffect(() => {
    // console.log(filtercat);
    let isempty = checkFilterCat(filtercat);
    isempty === true ? setIsallempty(true) : setIsallempty(false);
    filteration();

    // console.log("prod: ",prodarr);
    // console.log("filt: ", filtarr);
  }, [filtercat, isallempty]);

  return (
    <div className="filterContent-container">
      <div className="left-container">
        <div className="filter-container">
          <h2 className="big-text">Filter Recipes:</h2>
          <p className="small-text">
            Check multiple boxes below to narrow recipe search results:
          </p>
        </div>
        <button onClick={handleAllProduct} style={{width:"max-content", padding:"10px"}}>All</button>
        <div className="filter-container">
          <h3 className="mid-text">By Season:</h3>
          <label>
            <input
              name="season"
              value="Autumn"
              id="Autumn"
              type="radio"
              onChange={(e) => {
                handleChange(e);
              }}
            />{" "}
            Autumn
          </label>
          <label>
            <input
              name="season"
              value="Spring"
              id="Spring"
              type="radio"
              onChange={(e) => {
                handleChange(e);
              }}
            />{" "}
            Spring
          </label>
          <label>
            <input
              name="season"
              value="Summer"
              id="Summer"
              type="radio"
              onChange={(e) => {
                handleChange(e);
              }}
            />{" "}
            Summer
          </label>
          <label>
            <input
              name="season"
              value="Winter"
              id="Winter"
              type="radio"
              onChange={(e) => {
                handleChange(e);
              }}
            />{" "}
            Winter
          </label>
        </div>
        <div className="filter-container">
          <h3 className="mid-text">By Dietary Preference:</h3>
          <label>
            <input
              type="radio"
              name="dietary"
              value="Dairy Free"
              id="Dairy Free"
              onChange={handleChange}
            />
            Dairy Free
          </label>
          <label>
            <input
              type="radio"
              name="dietary"
              value="Egg Free"
              onChange={handleChange}
            />
            Egg Free
          </label>
          <label>
            <input
              type="radio"
              name="dietary"
              value="Gluten Free"
              onChange={handleChange}
            />
            Gluten Free
          </label>
          <label>
            <input
              type="radio"
              name="dietary"
              value="Quick and Easy"
              onChange={handleChange}
            />
            Quick and Easy
          </label>
          <label>
            <input
              type="radio"
              name="dietary"
              value="Healthy"
              onChange={handleChange}
            />
            Healthy
          </label>
        </div>
        <div className="filter-container">
          <h3 className="mid-text">By Meal:</h3>
          <label>
            <input
              type="radio"
              name="meal"
              value="Breakfast"
              onChange={handleChange}
            />
            Breakfast
          </label>
          <label>
            <input
              type="radio"
              name="meal"
              value="Dessert"
              onChange={handleChange}
            />
            Dessert
          </label>
          <label>
            <input
              type="radio"
              name="meal"
              value="Dinner"
              onChange={handleChange}
            />
            Dinner
          </label>
          <label>
            <input
              type="radio"
              name="meal"
              value="Holidays"
              onChange={handleChange}
            />
            Holidays
          </label>
          <label>
            <input
              type="radio"
              name="meal"
              value="Snacks and Appetizers"
              onChange={handleChange}
            />
            Snacks and Appetizers
          </label>
        </div>
        <div className="filter-container">
          <h3 className="mid-text">Sweet Things:</h3>
          <button>Fruit Desserts</button>
          <button>Chocolate</button>
          <button>Cakes and Quick Breads</button>
          <button>Cookies and Bars</button>
          <button>Pies and Tarts</button>
          <button>Ice Cream and Popsicles</button>
        </div>
        <div className="filter-container">
          <h3 className="mid-text">Search Recipe Titles:</h3>
          <div className="search-recipe-input-container">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Enter keyword"
            />
            <div className="search-icon-box">
              <i className="fa fa-search" style={{ color: "white" }}></i>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        {/* {JSON.stringify(isallempty)}
        <br />
        {JSON.stringify(filtarr)} */}
        {/* {isallempty
          ? prodarr.map((item, index) => <Card key={index} item={item} />)
           */}
        {filtarr.length > 0 &&
          filtarr.map((item, index) => <Card key={index} item={item} />)}
      </div>
    </div>
  );
}
