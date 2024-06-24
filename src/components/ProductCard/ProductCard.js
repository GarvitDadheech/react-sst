import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';
import CartContext from "../../context/CartContext";
import { useRef, useState } from 'react';
import productlogo from '../../assets/product.jpeg';
import { useContext } from 'react';
function ProductCard({ product }) {
  // var a = 10;
  // a = a + 1;
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');

  // setInput(value);
  function printTitle() {
    // console.log("printTitle");
    // console.log(pRef.current.innerText);
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }
  // console.log("Rerendered", inputV);
  function displayOutput(e) {
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output here: ${ iRef.current.value }`;
    // oRef.current.innerText = oRef.current.innerText + iRef.current.value;
    setInputV(e.target.value);
  }
 
  return (
    <div className="product-card">
      <p onClick={printTitle}> {product.title}</p>
      <p ref={pRef}> {product.price.value}</p>
      <img src={productlogo} />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <ReduxAddToCart product={product}/>
    </div>
    )
  }
  
export default ProductCard;
  

