import React from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

export default function Cart({ onHideCart }) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total amount</span>
        <span>30.00</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHideCart}>close</button>
        <button className={classes.button}>Order</button>
    </div>
  </Modal>;
}
