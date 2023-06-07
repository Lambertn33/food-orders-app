import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/cart/cart-context";
import CartItem from "./CartItem";

export default function Cart({ onHideCart }) {
  const cartContext = useContext(CartContext);

  const addItemHandler = (item) => {
    cartContext.addItemToCart({...item, quantity: 1});
  }

  const removeItemHandler = (itemId) => {
    cartContext.removeItemFromCart(itemId);
  }
  const cartHasItems = cartContext.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem item={item} key={item.id} onAdd={addItemHandler} onRemove={removeItemHandler}/>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{`$${cartContext.totalAmountToPay.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          close
        </button>
        {cartHasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
