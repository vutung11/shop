import React from "react";

const ProductInfo = ({ product }) => {
    return (
        <>
            <section id="prodetails" className="section-p1">
                <div className="single-product-img">
                    <img
                        className="single-product-img-img"
                        src={product.image}
                        width="100%"
                        id="MainImg"
                        alt=""
                    />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img
                                src="/img/products/f1.jpg"
                                width="100%"
                                className="small-img"
                                alt=""
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src="/img/products/f2.jpg"
                                width="100%"
                                className="small-img"
                                alt=""
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src="/img/products/f3.jpg"
                                width="100%"
                                className="small-img"
                                alt=""
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src="/img/products/f4.jpg"
                                width="100%"
                                className="small-img"
                                alt=""
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src="/img/products/f5.jpg"
                                width="100%"
                                className="small-img"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="single-product-details">
                    <h6>Home / {product.category}</h6>
                    <h4>{product.title}</h4>
                    <h2>${product.price}</h2>
                    <select name="" id="">
                        <option value="">Select Size</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                        <option value="">Small</option>
                        <option value="">Large</option>
                    </select>
                    <input type="number" value="1" min="0" />
                    <button className="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>{product.description}</span>
                </div>
            </section>
        </>
    );
};

export default ProductInfo;
