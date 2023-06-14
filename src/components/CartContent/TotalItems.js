import React from 'react';
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const { cart } = useContext(dataContext);

    const itemsQuanty = cart.reduce((acc, ele) => acc + ele.quanty, 0)
    return (
        <span className='cart-items-total'>{itemsQuanty}</span>
    );
};

export default TotalItems;