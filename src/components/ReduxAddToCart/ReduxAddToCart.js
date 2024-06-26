import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { addToCart } from '../store';
function ReduxAddToCart({ product }) {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.items[product.id]?.quantity || 0);

    const increase = () => {
        dispatch(addToCart(product));
    };

    const decrease = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    return (
        <div>
            {quantity === 0 ? (
                <button onClick={increase}>Add to Cart</button>
            ) : (
                <div>
                    <button onClick={decrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increase}>+</button>
                </div>
            )}
        </div>
    );
}

export default ReduxAddToCart;
