import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./FirebaseConfig";
import { useStateValue } from "./StateProvider";
 import Payment from "./Components/Payment/Payment";
 import {Elements} from '@stripe/react-stripe-js';
 import {loadStripe} from '@stripe/stripe-js';
 import '@stripe/stripe-js';

const stripePromise = await loadStripe('pk_test_51OX5EUSGr2KSRtwFeyY6KU9cn27SQ8F3pdd3oVCRVwI19vP43ooB7nZ6Fo7c5WyqhY19llLZxTZtUtyrYDRtXxss00Pd7S318v');

function App() {
                                                                                                          
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
           <Route path="/payment" element={<Elements stripe={stripePromise}><Payment /></Elements>} /> 
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;