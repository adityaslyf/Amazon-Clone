import Subtotal from "./Subtotal/Subtotal";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="" alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will appear here</h2>
        <Subtotal />
        <CheckoutProduct />
      </div>
    </div>
  );
};
export default Checkout;
