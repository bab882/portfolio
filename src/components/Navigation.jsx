import {useState, useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  const [activeLink, setActiveLink] = useState("works");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY>800){
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container className='position-fixed fixed-bottom nav'>
       
          <Navbar.Collapse className="d-flex justify-content-between " id="basic-navbar-nav">
            
              <Nav.Link href="#works" className={activeLink === 'Works' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('works')}>Works</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>contact</Nav.Link>
           
        </Navbar.Collapse>

        
      </Container> 
    </Navbar>
  );
}

export default NavBar;
