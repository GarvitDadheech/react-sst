import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";
import {loadCategories} from "../store/Categories.js";
import { useDispatch } from "react-redux";

function Categories() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    },[])
    return (<div>
        {categories.map((item)=> {
            return(
            <div key={item.id}>{item.name}</div>)
        })}
    </div>)
}

export default Categories;
