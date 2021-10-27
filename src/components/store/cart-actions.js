import { uiActions } from "./ui-store";
import { cartActions } from "./cart-store";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "updating",
        title: "updating cart...",
        message: "sending cart...",
      })
    );

    try {
      const send = await fetch(
        "https://reactdemo-7f6f1-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart.items),
          headers: { "Content-Type": "application/json" },
        }
      );
      const response = await send;
      if (response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "cart updated!",
            message: "cart updated successfully!",
          })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error occurred",
          message: error.message,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const send = await fetch(
      "https://reactdemo-7f6f1-default-rtdb.firebaseio.com/cart.json",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    try {
      const data = await send.json();
      dispatch(cartActions.setCart(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error occurred",
          message: error.message,
        })
      );
    }
  };
};
