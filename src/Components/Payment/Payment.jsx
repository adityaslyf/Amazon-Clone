import "./Payment.css";
import {useStateValue} from '../../StateProvider'
import Checkout from "../Checkout/Checkout";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
const Payment = () => {
  const [{basket,user} , dispatch] = useStateValue()
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
            <Link to="/checkout">{basket.length} items
            </Link>
          )
        </h1>
        {/*payment section  - delivery address*/}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
          
            <p>{user?.email}</p>
            <p>Shaket puri</p>
            <p>New Delhi</p>
          </div>
        </div>
        {/*payment section  - Review Items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items</h3>
          </div>
          <div className="payment__items">
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
        {/*payment section  - Payment method*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__method">
            {/*strip*/}

          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
