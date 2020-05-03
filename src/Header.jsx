import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <>
      <Navbar collapseOnSelect expand="md" bg="dark">
      <LinkContainer to="/"><Navbar.Brand>Company Name</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-5">
            <LinkContainer to="/"><Nav.Link className="mr-2 text-light">Features</Nav.Link></LinkContainer>
            <LinkContainer to="/prices"><Nav.Link className="mr-2 text-light" href="/">Pricing</Nav.Link></LinkContainer>
            <LinkContainer to="/tools"><Nav.Link className="mr-2 text-light" href="/">Tools</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link className="mr-2 text-light" href="/">About</Nav.Link></LinkContainer>
          </Nav>
          <LinkContainer to="/login"><Button className="px-3" variant="outline-light">Login</Button></LinkContainer>
        </Navbar.Collapse>
      </Navbar>
    </>
    );
  }
}
 
export default Header;