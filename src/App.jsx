import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./FirebaseConfig";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("This User is", authUser);
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
      <>
        <div>
          <Routes>
            <Route path="/login" element={<CombinedComponentLogin />} />

            <Route path="/" element={<CombinedComponent />} />
            <Route path="/checkout" element={<CombinedComponent2 />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

function CombinedComponent() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function CombinedComponent2() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}

function CombinedComponentLogin() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
