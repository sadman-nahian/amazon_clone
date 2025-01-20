import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
 const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
   
    //firebase stuff...
    try{
      const user=await signInWithEmailAndPassword(auth,email,password);
      if(auth){
        navigate("/");
      }

    }catch(error){
      alert(error.message);

    }

  }
  const handleCreateAccount=async (e)=>{
    e.preventDefault();
    
    //firebase stuff..
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if(auth){
        navigate('/');
      }
    } catch (error) {
      alert(error.message);
    }

  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
          alt=""
          className="login__image"
        />
      </Link>
      <div className="login__container">
        <h1>SIGN-IN</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => {setEmail(e.target.value)
            
            }}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) =>{ setPassword(e.target.value)
           
            }}
            type="password"
          />
          <button type="submit" 
          onClick={handleSubmit} className="login__signIn">Sign In</button>
        </form>
        <p className="login__text">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
        onClick={handleCreateAccount} className="login__createAccount">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
