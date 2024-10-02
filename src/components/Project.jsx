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

            <a href="/snake" target="_blank">
                <h3 className="title__project">Snake Game</h3>
                <p className="project__text mt-3">
                This project is a modern take on the classic Snake game. The player controls a 
                snake that grows longer each time it eats. Avoid obstacles and try to achieve 
                the highest score possible!
                </p>
                <ul className="outil__project" style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ display: "inline" }}>CSS</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>JavaScript</li>
                </ul>
              </a>

            </div>
            <div className="project">
              <a href="#">
                <h3 className="title__project" >Lorem ipsum dolor sit amet.</h3>
                <p className="project__text mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  dicta pariatur quis veniam ut, assumenda ab nesciunt
                  accusantium veritatis voluptatum officiis distinctio, quod,
                  soluta animi! Ipsa temporibus sed hic voluptatem.
                </p>
                <ul
                  className="outil__project"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  <li style={{ display: "inline" }}>React</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>Symfony</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>MySQL</li>
                </ul>
              </a>
            </div>
            <div className="project">
              <a href="#">
                <h3 className="title__project" >Lorem ipsum dolor sit amet.</h3>
                <p className="project__text mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                  dicta pariatur quis veniam ut, assumenda ab nesciunt
                  accusantium veritatis voluptatum officiis distinctio, quod,
                  soluta animi! Ipsa temporibus sed hic voluptatem.
                </p>
                <ul className="outil__project" style={{ listStyle: "none", padding: 0 }} >
                  <li style={{ display: "inline" }}>React</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>Symfony</li>
                  <li style={{ display: "inline", margin: "0 10px" }}>-</li>
                  <li style={{ display: "inline" }}>MySQL</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
