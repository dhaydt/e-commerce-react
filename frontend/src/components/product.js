import React from "react";
import Rating from "./rating";

export default function product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img src={product.image} className="medium" alt="product" />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">Rp {product.price}</div>
      </div>
    </div>
  );
}
