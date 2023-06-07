import React, { useState, useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { CartContext } from '../../../store/cart/cart-context';

export default function MealItemForm({ meal }) {
  const cartContext = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const addMealToCart = (e) => {
    e.preventDefault();
    const item = {
      id: meal.id,
      name: meal.name,
      quantity: +quantity,
      price: meal.price
    }
    e.preventDefault();
   cartContext.addItemToCart(item);
  }
  return (
    <form className={classes.form} onSubmit={addMealToCart}>
        <Input label="amount" input={{
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            value: quantity,
            onChange: (e) => setQuantity(e.target.value),
            id: meal.id
        }} />
        <button>+ Add</button>
    </form>
  )
}
