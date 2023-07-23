import React from "react";
// import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">The Rick & Morty Files</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
            <Nav.Link href="/episodes">Episodes</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// function NavBar() {
//   return <div className="navbar">
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/characters">Characters</NavLink>
//         </li>
//         <li>
//           <NavLink to="/episodes">Episodes</NavLink>
//         </li>
//         <li>
//           <NavLink to="/locations">Locations</NavLink>
//         </li>
//       </ul>
//     </nav>
//   </div>;
// }

export default NavBar;