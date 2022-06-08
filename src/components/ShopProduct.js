import React from "react";
import { Link } from "react-router-dom";

const ShopProduct = ({ product }) => {
    return (
        <>
            <div className="pro">
                <Link to={`/products/${product._id}`}>
                    <img src={product.image} alt="" />
                    <div className="des">
                        <span>{product.category}</span>
                        <h5>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                        </h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <a href="#">
                        <i className="fas fa-shopping-cart cart"></i>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default ShopProduct;
