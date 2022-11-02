import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isVisible: Boolean,
  setIsVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
  addItemsCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const cleanItem = (productToClean) => {
    setCartItems(cartItems.filter((item) => item.id !== productToClean.id));
  };

  useEffect(() => {
    setCartItemsCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  const value = {
    isVisible,
    setIsVisible,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartItemsCount,
    cleanItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );
  if (existingCartItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
/* This will not work because the cartItems state is not updated when the addItemToCart function is called. 
if (cartItems.includes(productToAdd)) {
    return cartItems[cartItems.indexOf(productToAdd)].quantity++;
  } else {
    cartItems.push({ ...productToAdd, quantity: 1 });
  }
  return cartItems;
};
*/
