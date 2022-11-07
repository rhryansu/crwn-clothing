import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isVisible: Boolean,
  setIsVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
  removeItemFromCart: () => {},
  cleanItem: () => {},
  cartTotal: 0,
});

const INITIAL_STATE = {
  isVisible: false,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isVisible, cartItemsCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (productToAdd) => {
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    updateCartItemsReducer(removeCartItem(cartItems, productToRemove));
  };

  const cleanItem = (productToClean) => {
    updateCartItemsReducer(
      cartItems.filter((item) => item.id !== productToClean.id)
    );
  };

  const setIsVisible = () => {
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        isVisible: !isVisible,
      },
    });
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartItemsCount = newCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartItemsCount: newCartItemsCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const value = {
    isVisible,
    setIsVisible,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cleanItem,
    cartItemsCount,
    cartTotal,
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
