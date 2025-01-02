import React, { useContext, useState } from "react";
import "../styles/Home.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../components/Product.jsx";
import BasketContext from "./BasketContext.jsx";

function Home() {
  const { products,filteredData } = useContext(BasketContext); // Get products from context
  const images = [
    "https://m.media-amazon.com/images/I/61d5SFtZqWL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61gOqpHSmJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71UEDArzyVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61GtIPsXoIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61L13D4aPtL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81hSGAqJS+L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61hqXfG9rML._SX3000_.jpg",
  ];
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const handleNextClick = () => {
    setCurrentImgIdx((prevIdx) => (prevIdx + 1) % images.length);
  };
  const handlePrevClick = () => {
    setCurrentImgIdx((prevIdx) =>
      prevIdx === 0 ? images.length - 1 : prevIdx - 1
    );
  };

  const dataToRender = filteredData.length > 0 ? filteredData : products;

  // First row with 2 products
  const firstRow = dataToRender.slice(0, 2);
  // Second row with remaining products except the last product
  const secondRow = dataToRender.slice(2, dataToRender.length - 1);
  // Third row with the last product
  const thirdRow = dataToRender.slice(-1);

  return (
    <div className="home">
      <div className="home__imageWrapper">
        <img className="home__image" src={images[currentImgIdx]} alt="" />
        <ArrowBackIosIcon
          onClick={handlePrevClick}
          className="home__imagePrev"
        />
        <ArrowForwardIosIcon
          onClick={handleNextClick}
          className="home__imageNext"
        />
      </div>

      {/* First Row with 2 products
      <div className="product__row">
        {firstRow.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div> */}

      {/* Second Row with the rest of the products (except the last one) */}
      <div className="product__row">
        {dataToRender.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      {/* Third Row with 1 product (the last one)
      <div className="product__row">
        {thirdRow.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Home;