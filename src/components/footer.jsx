import React from "react";
import logo from "../assets/img/logo.png";

function Footer(){
    return(
        <footer className="container-fluid">
            <div className="line"></div>
            <div className="row">
                <div className="wrapper_footer">
                    <a href="#">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                </div>

                <div className="footer__title">
                    <h2 className="subtitle">Interested in talking, let’s do it.</h2>
                    <a className="btn btn1 justify-content-center mx-2" href="mailto: chanitebrandon@gmail.com"  type="button">Contact</a>
                    <div className="line2"></div>
                </div> 
            </div>
        </footer>
    );
}

export default Footer;
