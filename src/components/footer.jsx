import React from "react";
import logo from "../assets/img/logo.png";

function Footer(){
    return(
        <footer className="container-fluid">
            <div className="lighthing2"></div>
            <div className="lighthing3"></div>
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
                    <div className="line2 ">
                        <div className="row justify-content-between align-items-baseline ajusted">
                            <div className="col-12 col-md-6 text-start">
                                <div style={{color: "#fefefe"}}>
                                    Designed and developed by Bab
                                </div>
                                <div>
                                    <i className="fa-regular fa-copyright"></i>
                                    <span> 2024 All rights reserved</span>
                                </div>
                            </div>  
                            <div className="col-12 col-md-6 text-end">
                                <a href="mailto:chanitebrandon@gmail.com" className="bg-icone">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                                <a href="https://github.com/bab882" className="bg-icone">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/brandonchanite7a021252" className="bg-icone">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </footer>
    );
}

export default Footer;
