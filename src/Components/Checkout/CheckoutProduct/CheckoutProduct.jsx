import "./CheckoutProduct";
import '../../Home/Home'
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div>
      <img src={image} alt="" />
      
    </div>
  );
}
export default CheckoutProduct;
