import React from 'react';
import items from './items'
import CartItem from './CartItem'
import './cart.css'


const Cart = ({item, username}) => {
    const total = items.reduce((acc, i) => {
        return acc + i.price * i.quantity
    }, 0)
  return (
    <div className="cart">
      <h1 className="cart-header">{username}'s Shopping Cart</h1>
      <div>
        {items.map(i => (
            <CartItem key={i.id} item={i.name} 
                    price={i.price} 
                    quantity={i.quantity} />
        ))}
      </div>
      <b>Cart Total: ${total.toFixed(2)}</b>
    </div>
  );
}

export default Cart;