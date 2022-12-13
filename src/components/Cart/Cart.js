import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {



    console.log(cart);
    let total = cart.reduce((init , product) => init+(product.price*product.quantity) , 0);
   
    let shipping = cart.reduce((init , product) => init + product.shipping , 0);
    let tax = (total*0.1).toFixed(2);

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <h5>Selected product: {cart.length}</h5>
            <p>Total price: {total} $</p>
            <p>Total shipping: {shipping} $</p>
            <p>Tax: {tax} $</p>
            <p>Grand total: {total+shipping+parseFloat(tax)} </p>
            
        </div>
    );
};

export default Cart;