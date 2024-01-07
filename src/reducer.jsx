export const initialState = {
  basket: [],
};
//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      console.log("Adding product to basket: ", action.item);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":{
      // return {
      //   ...state,
      //   basket: state.basket.filter(item =>
      //     item.id !== action.id
      //   )

      // }

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {  
        console.warn(
          `product (id: ${action.id}) can not be removed as it is not present`
        );
      }
      console.log("Basket after removing product: ", newBasket);
      return {
        ...state,
        basket: newBasket,
      };
    }
    default:
      return state;
  }
};
export default reducer;
