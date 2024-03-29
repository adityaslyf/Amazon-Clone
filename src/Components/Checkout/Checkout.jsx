import Subtotal from "./Subtotal/Subtotal";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
                                                                                                                                                    
const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="" alt="" />
        <div>
          <h3> Hey,{user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={item.id + index} //here we add index to the item.id to make it unique id as i am facing the issue of not able to remove items with similar id in the checkout section
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
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
