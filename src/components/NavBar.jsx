import { useState, useEffect } from "react";


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
        itemProp="url" 
        className={activeLink === "home" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("home")}
      >
        <span itemProp="name">Home</span>
      </a>
      <a 
        href="#works" 
        itemProp="url" 
        className={activeLink === "works" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("works")}
      >
        <span itemProp="name">Works</span>
      </a>
      <a 
        href="#resume" 
        itemProp="url" 
        className={activeLink === "resume" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("resume")}
      >
        <span itemProp="name">Resume</span>
      </a>
      <a 
        href="#contact" 
        itemProp="url" 
        className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} 
        onClick={() => onUpdateActiveLink("contact")}
      >
        <span itemProp="name">Contact</span>
      </a>
      <span></span>
    </nav>
  );
  
}

export default NavBar;
