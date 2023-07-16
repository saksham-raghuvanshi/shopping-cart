import React from "react";

const ProductCart = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="productcart">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>₹{price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
