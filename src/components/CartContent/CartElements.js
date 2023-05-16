import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './CartContent.css';
import CartItemCounter from "./CartItemCounter";

import React from 'react';

const CartElements = () => {

    const { data, cart, setCart } = useContext(dataContext);

    return cart.map((product) => {
        return(
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-car" />
                <h3 className="name">{product.name}</h3>
                <CartItemCounter />
                <h4 className="price">{product.price}$</h4>
            </div>
        )
    })
    
};

export default CartElements;