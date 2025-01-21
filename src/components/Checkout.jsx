import React, { useContext } from 'react'
import BasketContext from './BasketContext'
import Header from "./Header.jsx"
import "../styles/Checkout.css";
import { useNavigate } from 'react-router-dom';



function Checkout() {
    const navigate=useNavigate();
    const{ basket, setBasket, itemCount, setItemCount, totalprice, setTotalPrice, products,setProducts,filteredData, setFilteredData,user }=useContext(BasketContext);
    const emptyCart="Your cart is currently empty .Add items to see total ."
    const handleRemove=(id,price)=>{
        const index=basket.findIndex((x)=>x.id===id);
        const newBasket=[...basket];
        newBasket.splice(index,1);
        setItemCount((prevCount)=>prevCount-1);
        setBasket(newBasket);
        if (newBasket.length === 0) {
            setTotalPrice(0); 
        } else {
            setTotalPrice((prevPrice) => prevPrice - price); 
        }
    }
    const handleProceed=()=>{
        if(user){
            navigate("/payment");

        }else{
            alert("You must sign in first.")
        }
        
        
    }
  return (
    <div className="checkout">
        <Header/>
        <img src="https://m.media-amazon.com/images/G/01/DiscoTec/2024/CategoryFlips/Winter/Fashion/EN/AFWL1/Fashion_Winter25_970_DESKTOP_3000x1200_Browse_AF_WL1_EN._SX3000_QL85_.jpg" alt="" className="checkout__image__header" />
        <div className="checkout__banner">
        <h1 className="checkout__header">Shopping Cart</h1>
        <div className="checkout__subtotal">
            <div className="checkout__cost">
            <small>Subtotal <span style={{color:"black"}}>({itemCount} item)</span></small> 
            <strong>${totalprice.toFixed(2)}</strong>

            </div>
            <div className="checkout__gift">
            <input className="checkbox" type='checkbox'/>
            <label>This item contains gift</label>

            </div>
           
        
        <button className="proceed__button" onClick={handleProceed}>Proceed To Checkout</button>

        </div>

        </div>
        <div className="checkout__empty">
            {
                basket.length===0 &&<p className="checkout__emptyText">{emptyCart}</p>
            }
        </div>
        
        <div className="checkout__list">
            {
                basket.map((x)=>{
                    return(
                        <div className="checkout__item">
                            <img src={x.image} alt="" className="checkout__image" />
                            <div className="checkout__info">
                                <h2 className='checkout__title'>{x.title}</h2>
                                <p className="checkout__instock">In Stock</p>
                                <p className="checkout__freedelivey">FREE delivery by Amazon</p>
                                <p onClick={() => handleRemove(x.id, x.price)}className="checkout__remove">remove</p>
                            </div>
                            <div className="checkout__price">
                                <p><small>price</small> 
                                <strong>
                                ${x.price}</strong></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Checkout