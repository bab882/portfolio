import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [activeLink, setActiveLink] = useState("works");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update the active link based on the current section in view
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust this value for better accuracy
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav itemScope itemType="https://schema.org/SiteNavigationElement" className={scrolled ? "scrolled" : ""}>
      <a 
        href="#home" 
        itemProp="url name" 
        className={activeLink === "home" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("home")}
      >
        Home
      </a>
      <a 
        href="#works" 
        itemProp="url name" 
        className={activeLink === "works" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("works")}
      >
        Works
      </a>
      <a 
        href="#resume" 
        itemProp="url name" 
        className={activeLink === "resume" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("resume")}
      >
        Resume
      </a>
      <a 
        href="#contact" 
        itemProp="url name" 
        className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("contact")}
      >
        Contact
      </a>
      <NavLink 
        to="/project/toto" 
        itemProp="url name" 
        className={activeLink === "toto" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("toto")}
      >
        Projet Toto
      </NavLink>
      <span></span>
    </nav>
  );
  
}

export default NavBar;
