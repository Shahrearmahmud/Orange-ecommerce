import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import './Product.css'
const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rattings : {ratings} starts </small></p>

            </div>
            <button onClick={()=> handleAddToCart(product)}  className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>

        
        </div>
    );
};

export default Product;