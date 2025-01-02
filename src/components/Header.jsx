import React, { useContext, useEffect, useState } from "react";
import "../styles/Nav.css";
import logo from "../assets/white.webp";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BasketContext from "./BasketContext";

function Header() {
  const {itemCount,products,setProducts,filteredData,setFilteredData}=useContext(BasketContext);
  const [query,setQuery]=useState("");
  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length !== 0) {
      // Filter the products based on the query and update the global state
      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(newQuery.toLowerCase())
      );
      setFilteredData(filteredResults); // Update global filteredData
    } else {
      // Reset the filteredData if the query is empty
      setFilteredData(products);
    }
  };
  useEffect(()=>
  {
    console.log(filteredData)
  },[filteredData]
  )
  return (
    <div className="header">
      <Link to="/login">
        <img className="header__logo" src={logo}></img>
      </Link>

      <div className="header__search">
        <input type="text" 
        placeholder="Search items "
        value={query}
        onChange={handleChange}
        className="header__searchBox" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />

            <span className="header__basketCount header__optionLineTwo">{itemCount}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
