import React from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/CartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <h3>{product.title.slice(0, 20)}+...</h3>
      <h4>₹{parseInt(product.price * 82.15)}</h4>
      <button onClick={() => dispatch(addProducts(product))}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
