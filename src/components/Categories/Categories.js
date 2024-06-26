import { useEffect,useState } from "react";
function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories").then((response) => {
      return response.json();
    }).then((res) => {
      setCategories(res);
    })
  }, []);
  return (
    <div>
      <h1>Categories</h1>
      {categories.map((item) => {
        return(
          <div key={item.id}>{item.name}</div>
        )
      })}
    </div>
  );
}
export default Categories;