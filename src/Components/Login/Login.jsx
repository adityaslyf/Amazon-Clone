import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async(e) => {
    e.preventDefault();
    // Add your sign-in logic here
    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      console.log(userCredential)
      navigate("/")
    }
    catch(error){
      alert(error.message)
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential =  createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="amazon__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
