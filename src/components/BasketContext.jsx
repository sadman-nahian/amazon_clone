import { createContext, useState } from "react";

// Create the BasketContext
const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  const [basket, setBasket] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  // Products list
  const productDummy = [
    {
      id: "1001",
      title: "Fitbit Versa 4 Fitness Smartwatch with Daily Readiness",
      image: "https://m.media-amazon.com/images/I/61OEuoqFqYL._AC_SX425_.jpg",
      price: 149.95,
      rating: 5,
    },
    {
      id: "1002",
      title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      image: "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF894,1000_QL80_.jpg",
      price: 15.79,
      rating: 5,
    },
    {
        id: "1003",
        title: "SHOWKOO Luggage Sets Expandable PC+ABS Durable Suitcase Double Wheels TSA Lock 3pcs Red Wine",
        image: "https://m.media-amazon.com/images/I/81lnGViLcLL._AC_SY355_.jpg",
        price: 152.99,
        rating: 4,
      },
    
    {
      id: "1004",
      title: "JBL Go 3 - Portable Mini Bluetooth Speaker, IP67 waterproof ,dustproof, 5 hours of playtime,(Red)",
      image: "https://m.media-amazon.com/images/I/81IdAroUECL._AC_SL1500_.jpg",
      price: 29.95,
      rating: 4,
    },
    {
      id: "1005",
      title: "Amazon Echo Dot (newest model), With bigger vibrant sound, helpful routines and Alexa, Charcoal",
      image: "https://m.media-amazon.com/images/I/710exCeNPJL._AC_SY355_.jpg",
      price: 22.99,
      rating: 4,
    },
    
    {
      id: "1006",
      title: "Sony 65 Inch OLED 4K Ultra HD TV BRAVIA 8 Smart Google TV with Dolby Vision",
      image: "https://m.media-amazon.com/images/I/71R1ZcAYlRL._AC_SX355_.jpg",
      price: 1998,
      rating: 4,
    },
    {
      id: "1007",
      title: "Under Armour Men's Charged Assert 10 Running Shoe",
      image: "https://m.media-amazon.com/images/I/71k2ZobLduL._AC_SY395_.jpg",
      price: 65,
      rating: 4,
    },
    {
      id: "1008",
      title: "Optimum Nutrition Gold Standard 100% Whey Protein Powder",
      image: "https://m.media-amazon.com/images/I/71D3hzqn5rL._AC_SX425_.jpg",
      price: 37,
      rating: 5,
    },
    {
      id: "1009",
      title: "Ninja BL770 Mega Kitchen System, 1500W,",
      image: "https://m.media-amazon.com/images/I/81WPPmP+4mL._AC_SY300_SX300_.jpg",
      price: 159,
      rating: 5,
    },
    
  ];
  const[products,setProducts]=useState(productDummy);

  return (
    <BasketContext.Provider
      value={{ basket, setBasket, itemCount, setItemCount, totalprice, setTotalPrice, products,setProducts,filteredData, setFilteredData,user,setUser}}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
