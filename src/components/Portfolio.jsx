import React from "react";
import stack1 from "../assets/img/logo/figma.png";
import stack2 from "../assets/img/logo/html.png";
import stack3 from "../assets/img/logo/api.png";
import stack4 from "../assets/img/logo/css.png";
import stack5 from "../assets/img/logo/react.png";
import stack6 from "../assets/img/logo/webpack.png";
import stack7 from "../assets/img/logo/symfony.png";
import logo from "../assets/img/logo.png";
import profil from "../assets/img/pohot.jpg";

function Portfolio() {
  return (
    <section className="wrapper_about">
    <div className="container_about">
      <div className="wrapper__subtitle">
        <h2 className="subtitle">My Skillset</h2>
      </div>
                      
      <div className="about">
        <div className="column">
          <div className="item">
            <p className="description_about">
              Fullstack developer with one year of experience, I create user
              experiences and robust architectures, while ingeniously solving
              problems.
            </p>
            <div className="link-left">
              <a href="mailto: chanitebrandon@gmail.com" className="bg-icone">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://github.com/bab882" className="bg-icone">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/brandonchanite7a021252"
                className="bg-icone"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="link-right">
              <a href="./assets/doc/cv.pdf" className="bg-icone2">
                <i className="fa-solid fa-download"></i>Resume
              </a>
            </div>
          </div>
          <div className="item" id="item">
            <h4>my background</h4>
            <p>
              Originally from the
              <span className="effecte">charming town of Remiremont</span>,
              nestled in the heart of the Vosges mountains, I grew up in an
              environment where nature was as{" "}
              <span className="effecte">inspiring</span> as the rapidly
              expanding digital world.
            </p>
            <p>
              My <span className="effecte">fascination with technology</span>{" "}
              began at a young age, sparked by watching my grandfather
              assemble PCs in his office with passionate interest. Although I
              pursued a degree in computer science, my true passion lies in the
              craft of
              <span className="effecte">programming, extending beyond mere
                lines of code.</span>
            </p>
            <p>
              My curiosity led me to wonder:
              <span className="effecte">
                could I also create something that can evoke this effect on
                people?
              </span>
            </p>
            <p>
              Today,
              <span className="effecte">
                I apply my skills to create digital solutions
              </span>
              for user experiences, transforming ideas into digital reality
              with
              <span className="effecte">creativity and efficiency.</span>
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
              src="https://open.spotify.com/embed/track/5mjYQaktjmjcMKcUIcqz4s?utm_source=generator&theme=0"
              width="100%"
              height="100"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/6SWVr6T3yQS6gZ9gQHrr2b?utm_source=generator&theme=0"
              width="100%"
              height="100"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/75A0IHjwrTj0LZhbeI1pR0?utm_source=generator&theme=0"
              width="100%"
              height="100"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="column">
          <div className="item" id="item">
            <h4>expérience</h4>
            <div className="cv-item">
              <div className="left">
                <p>2024</p>
              </div>
              <div className="right">
                <h3>Developer FullStack</h3>
                <p>MC - Connexion</p>
              </div>
            </div>
            <div className="cv-item">
              <div className="left">
                <p>2023</p>
              </div>
              <div className="right">
                <h3>Developer FullStack</h3>
                <p>Isabelle Viviani</p>
              </div>
            </div>
          </div>

          <div className="item" id="item">
            <h4>éducation</h4>
            <div className="cv-item">
              <div className="left">
                <p>2022/ 23</p>
              </div>
              <div className="right">
                <h3>Web and Mobile Web Developer</h3>
                <p>Chamber of Commerce and Industry</p>
              </div>
            </div>
          </div>
          {/* <div className="item">Caroussel with react</div> */}
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