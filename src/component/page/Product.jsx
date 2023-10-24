import { GlobalHooks } from "../context/CartContextProvider";
import "../css/product.css";
import { useEffect, useState } from "react";

const Product = () => {
  const [productItem, setProductItem] = useState([]);

  const productList = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    setProductItem(await response.json());
  };
  useEffect(() => {
    productList();
  }, []);

  const { dispatch } = GlobalHooks();

  return (
    <div className="product">
      <div className="container">
        <h1>product List</h1>
        <div className="product_flex">
          {productItem.map((product, index) => {
            product.quantity = 1;
            const { image, title, price } = product;
            return (
              <div className="product_item" key={index}>
                <img src={image} alt="" />
                <p className="title">{title}</p>
                <p>Price : ${price}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "AddCart", payload: product })
                  }
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
