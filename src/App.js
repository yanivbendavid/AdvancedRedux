import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.showCart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  );
}

export default App;