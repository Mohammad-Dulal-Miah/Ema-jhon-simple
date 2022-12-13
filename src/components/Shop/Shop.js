import React, { useEffect, useState } from 'react';
import { addToLocalStorage, checkCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]); 

    useEffect(()=>{
         fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{

        const storedCart = checkCart();
        let stored = [];
        for(const id in storedCart){

           const addedProduct = products.find(product => product.id === id);
           let quantity = 0;
           if(addedProduct){
            addedProduct.quantity = storedCart[id];
            stored.push(addedProduct);

           }
           setCart(stored);
        }


    },[products]);
  

    const updateCart = (clickProduct) =>{

        const searchProduct = cart.find(product => product.id === clickProduct.id);

        if(searchProduct){
            searchProduct.quantity = searchProduct.quantity + 1;

            const other = cart.filter(product => product.id !== clickProduct.id);
            setCart([...other , searchProduct]);
        }
        else{
            clickProduct.quantity = 1;
            setCart([...cart , clickProduct]);
        }
    }
    
    const handleAddToCart = (selectedProduct)=>{

           updateCart(selectedProduct);
           addToLocalStorage(selectedProduct.id);
           // console.log(selectedProduct)
           
    }



    return (
        <div className='shop-container'>
           
           <div className='products-container'>
                   {
                     products.map(product=><Product 
                                             key={product.id}
                                             product={product}

                                             handleAddToCart = {handleAddToCart}
                                             ></Product>)
                   }
           </div>

           <div className='cart-container'>
                    <Cart cart = {cart}></Cart>
           </div>

        </div>
    );
};

export default Shop;