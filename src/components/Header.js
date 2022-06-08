import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <section id="header">
                <a href="#">
                    <img src="./img/logo.png" alt="" />
                </a>
                <div>
                    <ul id="navbar">
                        <li>
                            <a className="active" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li id="lg-bag">
                            <a href="#">
                                <i className="fa fa-bag-shopping"></i>
                            </a>
                        </li>
                        <a href="#" id="close">
                            <i className="fa fa-times"></i>
                        </a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="#">
                        <i className="fa fa-bag-shopping"></i>
                    </a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </section>
        </div>
    );
};

export default Header;
