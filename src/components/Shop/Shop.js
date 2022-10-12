import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    // const [products, setProducts] = useState([])
    const [products,setProducts] = useProducts()
    const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = []
        for (const id in storedCart) {
            // eslint-disable-next-line eqeqeq
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <cart className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>

                </Cart>
            </cart>
        </div>
    );
};

export default Shop;