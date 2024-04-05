import React from "react";
import logo from "../assets/img/logo.png";
import headerImg from "../assets/img/image.jpeg";

function Banner() {
    return (
        <header id="home">
            <div className="lighthing"></div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="link">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <a href="">EN</a>
            </div>
            <div className="hero">
                <div className="hero-title">
                    <h1 id="title">
                        <span id="er">I'm Brandon 
                            <img className="wrapper__img" src={headerImg} alt="" /> 
                        </span>
                        <span>Creative FullStack</span>
                        <span>Developer.</span>
                    </h1>
                    <p className="hero-wrapper-description">I develop accessible, responsive, interactive, and performance websites with a strong focus on security.</p>
                </div>
            </div>
        </header> 
    );
}

export default Banner;
