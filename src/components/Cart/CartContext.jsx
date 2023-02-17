import { createContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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
  showBasket: true,
  setShowBasket: () => {},
  timer: () => {},
  response: <Loader/>,
  setResponse: () => {},
  showResponse: false,
  setShowResponse: () => {},
});

export const CartProvider = ({ children }) => {
  //to show the cartbody
  const [cartShown, setCartShown] = useState(false);
  //to handle the display of nasket on each products
  const [showBasket, setShowBasket] = useState(true);
  //this handle the cartItems
  const [cartItems, setCartItems] = useState([]);
  //this handles the cart count
  const [cartCount, setCartCount] = useState(0);
  //this handles the total amount of items in the cart
  const [cartTotal, setCartTotal] = useState(0);
  //this stores the message to be displayed when payment was made
  const [response, setResponse] = useState(<Loader />);
  //this handles the display of message when payment was made
  const [showResponse, setShowResponse] = useState(false);

  //add and increase the quantity of items inside the cart
  const addItemToCart = (productToAdd) => {
    setCartItems((cartItems) => {
      const newCartItems = addToCart(cartItems, productToAdd);
      return newCartItems;
    });
  };

  //reduce the quantity of items inside the cart
  const removeItemFromCart = (productToRemove) => {
    setCartItems(() => {
      const newCartItems = removeFromCart(cartItems, productToRemove);
      return newCartItems;
    });
  };

  //delete an item from the cart
  const deleteItemFromCart = (productToDelete) => {
    setCartItems((cartItems) => {
      const newCartItems = deleteItem(cartItems, productToDelete);
      return newCartItems;
    });
  };

  //reseting the success message when payment was made
  const timer = () => {
    setTimeout(() => {
      if(cartItems.length === 0) {
        setResponse('Cart is empty')
      } else{

        setResponse("Order successfully placed");
      }
    }, 10000);
  };

  //calculating the number of quantity in the cart
  useEffect(() => {
    const count = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setCartCount(count);
  }, [cartItems]);

  //calculating the total amount of quantity in the cart
  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const value = {
    cartShown,
    showBasket,
    setShowBasket,
    cartItems,
    cartCount,
    cartTotal,
    setCartShown,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    timer,
    response,
    setResponse,
    showResponse,
    setShowResponse,
    // clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
