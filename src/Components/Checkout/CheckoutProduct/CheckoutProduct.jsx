import "./CheckoutProduct";
import "../../Home/Home";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{  basket}, dispatch] =useStateValue();
  const removeBasket=()=>{
//remove the basket
console.log("current basket: ", basket);
dispatch({
  type:'REMOVE_FROM_BASKET',
  id: id,
})                                                                                                                                                                                                                                                                                                                  
  }
  
  return (
    <div>
      <img src={image} alt=""  className=" w-44"/>
      <p className=" w-66">{title}</p>
      <p >
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className=" flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>
      <div>
      <button
       onClick={removeBasket} className=" border-orange-500 bg-orange-500  w-32 border-r-4">
         
          Remove the item
          </button>
          
        </div>
        
    </div>
  );
}
export default CheckoutProduct;
