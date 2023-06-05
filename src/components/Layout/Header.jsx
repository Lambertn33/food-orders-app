import React from "react";
import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
}
