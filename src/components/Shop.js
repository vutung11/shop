import React from "react";
import ShopProduct from "./ShopProduct";

const Shop = React.memo(({ products }) => {
    return (
        <>
            <section id="product1" className="section-p1">
                <div className="pro-container">
                    {products.map((product) => (
                        <ShopProduct key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
});

export default Shop;
