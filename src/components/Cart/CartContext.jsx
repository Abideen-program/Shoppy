import { createContext, useState } from "react";

export const CartContext = createContext({
  cartShown: false,
  setCartShown: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartShown, setCartShown] = useState(false);
  const [cartItems, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const value = {
    cartShown,
    cartItems,
    cartCount,
    setCartShown
    // addItemToCart,
    // removeItemFromCart,
    // deleteItemFromCart,
    // clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
