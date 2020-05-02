import React, { Component } from 'react';
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
        <Navbar.Brand href="#home">Company Name</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto mr-5">
            <Nav.Link className="mr-2 text-light" href="/">Features</Nav.Link>
            <Nav.Link className="mr-2 text-light" href="/">Pricing</Nav.Link>
            <Nav.Link className="mr-2 text-light" href="/">Tools</Nav.Link>
            <Nav.Link className="mr-2 text-light" href="/">About</Nav.Link>
          </Nav>
          <Button className="p-2" variant="outline-light">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
    );
  }
}
 
export default Header;