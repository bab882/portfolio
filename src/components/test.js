// import { useState, useEffect } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";

// function NavBar() {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, seScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//         if(window.scrollY>50){
//             seScrolled(true);
//         } else {
//             seScrolled(false);
//         }
//     }
//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="#works" className={activeLink === 'Works' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('works')}>Works</Nav.Link>
             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
             <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
             <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
             <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>contact</Nav.Link>
           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default App;
