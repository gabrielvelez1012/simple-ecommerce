import React from "react";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

    const decrese = () => {
        const productRepeat = cart.find((item) => item.id === product.id);

        productRepeat.quanty !== 1 && setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productRepeat.quanty - 1 } : item)));
    };

  return (
    <>
      <p className="counter-button" onClick={decrese}>-</p>
      <p>{product.quanty}</p>
      <p className="counter-button" onClick={() => buyProducts(product)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;
