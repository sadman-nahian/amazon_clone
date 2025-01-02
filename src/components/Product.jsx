import React,{useContext,useEffect} from "react";
import "../styles/Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import BasketContext from "./BasketContext";

function Product({ id, title, image, price, rating }) {
  const{basket, setBasket, itemCount, setItemCount, totalprice, setTotalPrice}=useContext(BasketContext);
  const handleClick=()=>{
    const product={
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating
    }
    setBasket((prevBasket)=>[...prevBasket,product]);
    setItemCount((prevCount)=>prevCount+1);
    setTotalPrice((prevPrice)=>prevPrice+price);
    
  }
  useEffect(() => {
    console.log('Updated Basket:', basket);
    console.log('totalCost' ,totalprice)
  }, [basket]);

  return (
    
    
    <div className="product">
       
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((x) => (
              <StarRateIcon className="product__star" />
            ))}
        </div>
      </div>
      

      <img className="product__image" src={image} />
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}

export default Product;
