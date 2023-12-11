  import "./App.css";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Header from "./Components/Header/Header";
  import Home from "./Components/Home/Home";
   import Checkout from './Components/Checkout/Checkout'

  function App() {
    return (
      <Router>
        <>
          <div>
          <Routes>
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

  function  CombinedComponent2() {
    return (
      <>
        <Header />
         <Checkout />
      </>
    );
  }



  export default App;
