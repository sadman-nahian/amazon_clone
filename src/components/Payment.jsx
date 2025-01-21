import React, { useState } from 'react'
import "../styles/Payment.css"
import { useContext } from 'react';
import BasketContext from './BasketContext';

const Payment = () => {
    const{ basket, setBasket, itemCount, setItemCount, totalprice, setTotalPrice,user }=useContext(BasketContext);
    

    const [formData, setFormData] = useState({
        street: "",
        apartment: "",
        city: "",
        state: "",
        postalCode: ""
    });
    const[cardInfo,setCardInfo]=useState({
        name:"",
        number:"",
        cvv:""

    })
    const handleInfoChange=(e)=>{
        const{name,value}=e.target;
        setCardInfo({
            ...cardInfo,
            [name]:value
        })
    }
    const handlePaymentSubmit=(e)=>{
        e.preventDefault();
        console.log(cardInfo);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave=(e)=>{
        e.preventDefault();
        console.log("Saved Address:", formData);

    }
  return (
    <div className='payment'>
        <div className="payment__header">
            <div className="payment__items"><h3>Checkout({itemCount} items)</h3> </div>
            <div className="payment__total"><h3>Total :{totalprice.toFixed(2)}$</h3></div>
        </div>
        <div className="payment__address">
            <h2>Address</h2>
            <form onSubmit={handleSave} className="payment__address__form">
            <input
                type="text"
                name="street"
                placeholder="Street Address"
                className=""
                value={formData.street}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="apartment"
                placeholder="Apartment Number"
                className=""
                value={formData.apartment}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                className=""
                value={formData.city}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="state"
                placeholder="State"
                className=""
                value={formData.state}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className=""
                value={formData.postalCode}
                onChange={handleInputChange}
                required
            />
            <button type="submit" className="payment__save">Save</button>
        </form>

        </div>
        <div className="payment__method">
            <h3>Payment</h3>
            <form  onSubmit={handlePaymentSubmit} className='Payment__method__form' >
                <input 
                type="text" placeholder="cardholder name"
                name="name"
                value={cardInfo.name}
                onChange={handleInfoChange}
                required

                
                />
                <input 
                type="text" placeholder="card Number"
                name="number"
                value={cardInfo.number}
                onChange={handleInfoChange}
                required

                
                />
                <input 
                type="text" placeholder="card CVV"
                name="cvv"
                value={cardInfo.cvv}
                onChange={handleInfoChange}
                required

                
                />
                <button type="submit" className="payment__save">make payment</button>
            </form>
            
            
        </div>
        </div>
  )
}

export default Payment