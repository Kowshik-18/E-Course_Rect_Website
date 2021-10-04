import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { SiCoursera } from "react-icons/si";
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="header-main" variant="light">
                <Navbar.Toggle aria-controls="navbarScroll" className="m-3" />
                <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-between mx-5 px-5 py-3">
                    <Nav>
                        <span className="logo"><SiCoursera /> E-Courses</span>
                    </Nav>
                    <Nav
                        className="mr-auto my-2 my-lg-0 d-flex flex-row"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/home" className="decoration"><Nav.Link href="/home" className="mx-2">Home</Nav.Link></Link>
                        <Link to="/about" className="decoration"><Nav.Link href="/about" className="mx-2">About Us</Nav.Link></Link>
                        <Link to="/services" className="decoration"><Nav.Link href="/services" className="mx-2">Services</Nav.Link></Link>
                        <Link to="/review" className="decoration"><Nav.Link href="/review" className="mx-2">Review</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;