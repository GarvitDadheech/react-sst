import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Categories from "../Categories/Categories";
import Effect from "../Effect/Effect";
function Products() {

  let [products, setProducts] = useState([]);
  console.log("products")
  useEffect(() => {
    fetch("https://run.mocky.io/v3/1c9a787b-3e6b-4fc2-9460-f908e2e3cc29").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  
    return (
      <div>
        <div><Effect /></div>
        <Categories/>
            {
                products.map(function (item, index) {
                  return (<ProductCard key={index}  product={item} />)
                })
            }
        </div>
    )
}

export default Products;
