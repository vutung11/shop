import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const inputRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if (!value.trim()) return;
        return navigate(`/search/${value}`);
    };
    return (
        <div>
            <section id="header">
                <Link to="/">
                    <img src="./img/logo.png" alt="" />
                </Link>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Search" ref={inputRef} />
                        <button>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>

                <div>
                    <ul id="navbar">
                        <li>
                            <a className="active" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <Link to="/createproduct">CreateProduct</Link>
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
