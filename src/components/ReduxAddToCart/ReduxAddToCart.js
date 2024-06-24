
function AddToCart({ product }) {
    function increase() {
        //useSelector -> to consume the state
        //dispatch({type: "increase", payload: product})
    }
    function decrease() {
        //dispatch({type: "decrease", payload: product})
    }
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }

}

export default AddToCart;

