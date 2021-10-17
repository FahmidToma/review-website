import React from "react";
import './header.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () =>{

    return(
        <div className='header'>
            <Navbar fixed="top" bg="dark" variant="dark" >
            <Container>
                <Nav className="me-auto">
                <Link className='link' to="/home"><strong>PaintingPro</strong></Link>
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/aboutus">About Us</Link>
                <Link className='link' to="/services">Services</Link>
                <Link className='link' to="/contact">Contact</Link>
                </Nav>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;