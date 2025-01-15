import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Project() {
  const linkRef = useRef(null);
  const handleClick = () => {
    // Faire quelque chose avec le lien, comme le focus
    linkRef.current.focus();
  };

  const [email, setEmail] = useState("");

  useEffect(() => {
    const hash1 = "contact";
    const hash2 = "bab-codes";
    const hash3 = ".fr";
    setEmail(`${hash1}@${hash2}${hash3}`);
  }, []);

  return (
    <section id="works" className="scroll-section-outer">
      <div className="text-wrapper">
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
        <span>
          Showcase
          <i className="fa-solid fa-star"></i>
        </span>
      </div>

      <div className="scroll">
        <div className="scroll-section-inner">
          <div className="wrapper__subtitle">
            <h2 className="subtitle">Projects</h2>
            <p className="subtitle__text">
              I played a key role in project development. Here's a carefully
              selected showcase highlighting expertise and achieved results
            </p>
            <a className="btn btn1" href={`mailto:${email}`} type="button">Contact</a>
          </div>
          <div className="container__project">
            <div className="project">
                <a href="https://bab882.github.io/login/" target="_blank">
                  <h3 className="title__project" >Toggle Password Visibility</h3>
                  <p className="project__text mt-3">
                    Feature to display the PIN in plain text for testing purposes,
                    designed with a focus on usability. In production, data remains 
                    hashed to ensure security. 
                  </p>
                  <ul className="outil__project" style={{ listStyle: "none", padding: 0 }} >
                    <li style={{ display: "inline" }}>HTML</li>
                    <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                    <li style={{ display: "inline" }}>CSS</li>
                    <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                    <li style={{ display: "inline" }}>JavaScript</li>
                  </ul>
                </a>
            </div>
            <div className="project">
              <a href="https://bab882.github.io/brandon-chanite/" target="_blank">
                <h3 className="title__project" >Portfolio 2023</h3>
                <p className="project__text mt-3">
                  This portfolio, created in 2023, uses LocomotiveScroll for smooth animations.
                  While I’ve since evolved, this version reflects my work at that time.
                </p>
                <ul
                  className="outil__project"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  <li style={{ display: "inline" }}>HTML</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>JavaScript</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>LocomotiveScroll</li>
                </ul>
              </a>
              </div>
            <div className="project">
            <Link to="/snake" className="navbar-link" >
                <h3 className="title__project">Snake Game</h3>
                <p className="project__text mt-3">
                This project is a modern take on the classic Snake game. The player controls a 
                snake that grows longer each time it eats. Avoid obstacles and try to achieve 
                the highest score possible!
                </p>
                <ul className="outil__project" style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ display: "inline" }}>CSS</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>React</li>
                </ul>
            </Link>      
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
