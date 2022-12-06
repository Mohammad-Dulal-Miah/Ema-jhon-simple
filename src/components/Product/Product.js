import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const {product , handleAddToCart} = props;
    const {name , img , seller ,price, ratings} = product;
    
   


    return (
        <div className='product'>
           <img src={img} alt=""/>
           <h4>{name}</h4>
           <h3>Price: {price}</h3>
            <div className='product-information'>
                   
                    <p><small>Seller: {seller}</small></p>
                    <p><small>ratings: {ratings} star</small></p>
            </div>

            <button className='btn-card' onClick={()=>handleAddToCart(product)}>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                <p>
                    Add to Cart
                </p>
                </button>
        </div>
    );
};

export default Product;