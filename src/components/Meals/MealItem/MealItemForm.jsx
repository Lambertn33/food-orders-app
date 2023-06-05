import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm({ meadId }) {
  return (
    <form className={classes.form}>
        <Input label="amount" input={{
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
            id: meadId
        }} />
        <button>+ Add</button>
    </form>
  )
}
