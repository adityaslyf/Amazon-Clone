import "./Subtotal.css";
import {IntlProvider,  FormattedNumber} from 'react-intl'
import { useStateValue } from "../../../StateProvider"
import {getBasketTotal} from '../../../reducer'
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const messages = {
    myMessage: "Aujourd'hui, nous sommes le {ts, date, ::yyyyMMdd}",
  }
  return (
    <IntlProvider locale="en" messages={messages}>
    <div className="subtotal">
     {/* <CurrencyFormat
        renderText={(value) => (  
          <
            <p>
              {/* Part of the homework 
              Subtotal  {basket?.length}: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        /> */}
           <FormattedNumber
        value={getBasketTotal(basket)}
        style="currency"
        currency="USD" // Or any other currency
        currencyDisplay="symbol"
        decimalScale={2}
      />
      <button>Proceed to Checkout</button>
    </div>
    </IntlProvider> 
  );
};
export default Subtotal;
