import { createContext, useEffect, useState } from "react";

//help function to be called to add item to the cart
const addToCart = (cartItems, productToAdd) => {
  //find if the product to add is already in the cart
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  //if the product exist, just increase the number
  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//to handle reduction in the quantity of each cart items
const removeFromCart = (cartItems, productToRemove) => {
  //find if the product is present in the cart
  const exisitingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRemove.id;
  });

  //if the quantity of the item to remove is just 1
  if (exisitingItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== exisitingItem.id;
    });
  }

  //to reduce the quantity if its greater than 1
  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...productToRemove, quantity: productToRemove.quantity - 1 }
      : cartItem;
  });
};

const deleteItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== productToDelete.id;
  });
};

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
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems((cartItems) => {
      const newCartItems = addToCart(cartItems, productToAdd);
      return newCartItems;
    });
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(() => {
      const newCartItems = removeFromCart(cartItems, productToRemove);
      return newCartItems;
    });
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems((cartItems) => {
      const newCartItems = deleteItem(cartItems, productToDelete);
      return newCartItems;
    });
  };

  useEffect(() => {
    const count = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const value = {
    cartShown,
    cartItems,
    cartCount,
    cartTotal,
    setCartShown,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    // clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
