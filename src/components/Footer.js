import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="section-p1">
                <div className="col">
                    <img className="logo" src="./img/logo.png" alt="" />
                    <h4>Contact</h4>
                    <p>
                        <strong>Address: </strong> 12 Distric, Hochiminh City
                    </p>
                    <p>
                        <strong>Phone:</strong> +84 359797197 / (+84)393836817
                    </p>
                    <p>
                        <strong>Hours:</strong> 10:00 - 18:00. Mon - Sat
                    </p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About</a>
                    <a href="#">Delivery Infomation</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Term & Conditions</a>
                    <a href="#">Contact us</a>
                </div>

                <div className="col">
                    <h4>My account</h4>
                    <a href="#">Sign in</a>
                    <a href="#">View cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src="/img/pay/app.jpg" alt="" />
                        <img src="/img/pay/play.jpg" alt="" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="/img/pay/pay.png" alt="" />
                </div>
                <div className="copyright">
                    <p>@2022, TungDev - Ecommerce Template</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
