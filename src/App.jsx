import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Checkout from "./components/Checkout.jsx";
import Login from "./components/Login.jsx"
import { auth } from "./components/Firebase.jsx";

import BasketContext from "./components/BasketContext.jsx";
import { useContext } from "react";


function App() {
  const{user,setUser}=useContext(BasketContext);
  

  useEffect(()=>{
    auth.onAuthStateChanged(authuser=>{
      
      if(authuser){
        setUser(authuser.email);
        console.log('The user is :',user);

      }else{
        setUser(null);

      }
    })

  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route
            path="/checkout"
            element={
              <Checkout/>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
