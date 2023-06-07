import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../store/cart/cart-context";

export default function HeaderCartButton({ onClick }) {
  const cartContext = useContext(CartContext);
  const numberOfItemsInCart = cartContext.items.reduce((current, item) => {
    return current + item.quantity;
  }, 0);
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
}
