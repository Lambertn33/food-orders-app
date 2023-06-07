import React, { useState } from "react";

export const CartContext = React.createContext({
  items: [],
  totalAmountToPay: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (itemId) => {},
});

const CartProvider = ({ children }) => {
  const [myCart, setMyCart] = useState({
    items: [],
    totalAmountToPay: 0,
  });

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = myCart.items.findIndex(
      (i) => i.id === item.id
    );
    const existingCartItem = myCart.items[existingCartItemIndex];
    const newTotalAmount = myCart.totalAmountToPay + item.quantity * item.price;
    let updatedItems;
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + item.quantity,
      };
      updatedItems = [...myCart.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = myCart.items.concat(item);
    }
    setMyCart({ items: updatedItems, totalAmountToPay: newTotalAmount });
  };

  const removeItemFromCartHandler = (itemId) => {
    const existingCartItemIndex = myCart.items.findIndex(
      (item) => item.id === itemId
    );
    const existingCartItem = myCart.items[existingCartItemIndex];
    const newTotalAmount = myCart.totalAmountToPay - existingCartItem.price;

    let updatedItem;
    let updatedItems;
    if (existingCartItem.quantity > 1) {
      updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...myCart.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = myCart.items.filter((item) => item.id !==itemId);
    }
    setMyCart({ items: updatedItems, totalAmountToPay: newTotalAmount });
  };

  const cartContext = {
    items: myCart.items,
    totalAmountToPay: myCart.totalAmountToPay,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
