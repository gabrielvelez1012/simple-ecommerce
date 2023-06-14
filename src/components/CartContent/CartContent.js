import React from 'react';
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import './CartContent.css';
import NavBar from '../NavBar/NavBar';

const CartContent = () => {

    const { cart } = useContext(dataContext);

return (
    <>
        <NavBar />
        {cart.length > 0 ? (
            <>
            <CartElements />
            <CartTotal />
            </>
        ) : (
            <h2 className='cart-message'>Your cart is empty</h2>
        )}
    </>
);
};

export default CartContent;