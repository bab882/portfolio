import React, { useEffect, useState } from "react";
import stack1 from "../assets/img/logo/figma.png";
import stack2 from "../assets/img/logo/html.png";
import stack3 from "../assets/img/logo/api.png";
import stack4 from "../assets/img/logo/css.png";
import stack5 from "../assets/img/logo/react.png";
import stack6 from "../assets/img/logo/webpack.png";
import stack7 from "../assets/img/logo/symfony.png";
import logo from "../assets/img/logo.png";
import profil from "../assets/img/pohot.jpg";
import cv from "../assets/doc/cv-bab-codes.pdf";

function Portfolio() {

  const [email, setEmail] = useState("");

  useEffect(() => {
    const hash1 = "contact";
    const hash2 = "bab-codes";
    const hash3 = ".fr";
    setEmail(`${hash1}@${hash2}${hash3}`);
  }, []);

  return (
    <section id="resume" className="wrapper_about">
    <div className="container_about">
      <div className="wrapper__subtitle">
        <h2 className="subtitle">My Skillset</h2>
      </div>    
      <div className="about">
        <div className="column">
          <div className="item">
            <p className="description_about">
              Fullstack developer with two years of experience, I create user
              experiences and robust architectures, while ingeniously solving
              problems.
            </p>
            <div className="link-left">
              <a href={`mailto:${email}`} className="bg-icone">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://github.com/bab882" target="_blank" className="bg-icone">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/brandonchanite7a021252" target="_blank" className="bg-icone">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="link-right">
              <a href={cv} className="bg-icone2" target="_blank">
                <i className="fa-solid fa-download"></i>Resume
              </a>
            </div>
          </div>
          <div className="item" id="item">
            <h4>my background</h4>
            <p>
              Originally from the
              <span className="effecte"> charming town of Remiremont,</span> nestled in the heart of the Vosges mountains, I grew up in an environment where nature was as
              <span className="effecte"> inspiring</span> as the rapidly expanding digital world.
            </p>
            <p>
              My <span className="effecte">fascination with technology</span> began at a young age, sparked by watching my grandfather assemble PCs in his office with passionate interest. Although I pursued a degree in computer science, my true passion lies in the craft of
              <span className="effecte"> programming, extending beyond mere lines of code.</span>
            </p>
            <p>
              My curiosity led me to wonder: <span className="effecte">could I also create something that can evoke this effect on people? </span>
            </p>
            <p>
              Today, <span className="effecte">I apply my skills to create digital solutions</span> for user experiences, transforming ideas into digital reality with <span className="effecte">creativity and efficiency.</span>
            </p>
            <img src={logo} alt="" className="logo" />
          </div>
        </div>
        <div className="column">
          <div className="item4">
            <img src={profil} alt="I'm me" />
          </div>
          <div className="item" id="item">
            <h4>favorite jams</h4>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/2KejCKgm7l3uefW9cFt8cH?utm_source=generator&theme=0" 
              width="100%" 
              height="100" 
              frameBorder="0" 
              loading="lazy">
            </iframe>
            <iframe 
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/6UAgnw2w3AVwLg1p7sE7v4?utm_source=generator&theme=0"
              width="100%" height="100" 
              frameBorder="0" 
              loading="lazy">
            </iframe>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/6GyFP1nfCDB8lbD2bG0Hq9?utm_source=generator&theme=0"
              width="100%"
              height="100"
              frameBorder="0"
              loading="lazy">
            </iframe>
          </div>
        </div>
        <div className="column">
          <div className="item" id="item">
            <h4>expérience</h4>
            <div className="experience">
              <span style={{color: '#b778e8'}}>January 2025 - In progress</span>
              <h3 className="mt-1">Application Developer | Ace Software</h3>
              <p className="text__experience">
                Participated in the design and development of application in collaboration with the technical team.  
                {/* Analyzed requirements, devised tailored solutions, and implemented new features following best development practices.  
                Contributed to performance optimization and project scalability.   */}
                </p>
            </div>
            <div className="experience">
              <span style={{color: '#b778e8'}}>May 2024 - September 2024</span>
              <h3 className="mt-1">Developer FullStack | Circet France</h3>
              <p className="text__experience">
                  Managed and implemented modifications on internal applications.
                  Optimized code for better performance and usability.
                  Created new processes to improve functionality and workflow.
                </p>
            </div>
            <div className="experience">
            <span style={{color: '#b778e8'}}>April 2023 - June 2023</span>
            <h3 className="mt-1">Developer FullStack | Isabelle Viviani</h3>
                <p className="text__experience">
                  Designed and developed websites from concept to launch.
                  Implemented user-friendly interfaces and ensured responsiveness across devices.
                  Optimized websites for SEO and performance.
                </p>
            </div>
          </div>
          <div className="item" id="item"> 
            <h4>éducation</h4>
            <div className="experience">
              <span style={{color: '#b778e8'}}>2025 - In Progress</span>
              <h3 className="mt-1">Application Designer and Developer</h3>
              <p className="text__experience">Iscod</p>
            </div>
            <div className="experience">
              <span style={{color: '#b778e8'}}>2022 - 2023</span>
              <h3 className="mt-1">Web and Mobile Web Developer</h3>
              <p className="text__experience">Chamber of Commerce and Industry</p>
            </div>
          </div>
          <div className="item" id="item">
            <h4>skillset</h4>
            <div className="content">
              <div className="stack">
                <img src={stack1} alt="" />
              </div>
              <div className="stack">
                <img src={stack2} alt="" />
              </div>
              <div className="stack">
                <img src={stack3} alt="" />
              </div>
              <div className="stack">
                <img src={stack4} alt="" />
              </div>
              <div className="stack">
                <img src={stack5} alt="" />
              </div>
              <div className="stack">
                <img src={stack6} alt="" />
              </div>
              <div className="stack">
                <img src={stack7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Portfolio;