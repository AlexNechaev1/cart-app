import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartWindow from "./Components/Layout/Cart/CartWindow";
import CartContextProvider from "./Store/CartContextProvider";

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const onOpenCartHandler = () => {
    setIsCartShown(true);
  };

  const onCloseCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartContextProvider>
      {isCartShown && <CartWindow onCloseCart={onCloseCartHandler} />}
      <Header onOpenCart={onOpenCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};

export default App;
