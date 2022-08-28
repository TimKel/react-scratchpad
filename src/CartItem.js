import React from 'react';
import "./CartItem.css"

const CartItem = ({item, price, quantity}) => (
    <div className="CartItem">
        <h4 className="CartItem-item-name">Item: {item}</h4>
        <ul>
            <li>Price: ${price}</li>
            <li>Quantity: {quantity}</li>
            <li className="CartItem-subtotal">Subtotal: {(price * quantity).toFixed(2)}</li>
        </ul>
    </div>
)

export default CartItem;