import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<h1>Login Page</h1>} />
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