import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';
import CartContext from "../../context/CartContext";
import { useRef, useState } from 'react';
import productlogo from '../../assets/product.jpeg';
import { useContext } from 'react';
function ProductCard({ product }) {
  // var a = 10;
  // a = a + 1;

  return (
    <div className="product-card">
      <p> {product.title}</p>
      <p> {product.price.value}</p>
      <img src={productlogo} />
      
      <ReduxAddToCart product={product}/>
    </div>
    )
  }
  
export default ProductCard;
  

