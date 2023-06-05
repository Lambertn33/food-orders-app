import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const handleShowCart = () => {
    setCartVisible(true);
  }

  const handleHideCart = () => {
    setCartVisible(false);
  }

  return (
    <Fragment>
      {cartVisible && <Cart onHideCart={handleHideCart}/>}
      <Header onShowCart={handleShowCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
