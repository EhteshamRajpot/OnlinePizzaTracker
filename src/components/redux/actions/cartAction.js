export const addToCart = (pizza, quantity, varients) => (dispatch, getState) => {
  var cartItems = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varients: varients,
    quantity: Number(quantity),
    prices: pizza.prices,
    totalPrice: pizza.prices[0][varients] * quantity,
  };

  if (cartItems.quantity > 10) {
    alert("you Can only add 10 pizzas");
  } else {
    if (cartItems.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItems });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

  
export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({type: "DELETE_FROM_CART", payload:pizza})
  const cartItems = getState().cartReducer.cartitems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}