import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavImage from '../Me.PNG';
import './MPHeader.css';
import Home from './Home';

//TODO: Change this later to take in all of the navbar elements as props so that the navbar will be dynamic.
//Generate navbar links dynamically as well as the image html as props instead of static image saved locally.
const MPHeader = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#Home">JR Kim</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="./Home">Home</Nav.Link>
                    <Nav.Link href="./Resume">Resume</Nav.Link>
                    <Nav.Link href="./Projects">Projects</Nav.Link>
                    <Nav.Link href="./Devblog">Dev Blog</Nav.Link>
                    <Nav.Link href="./Contact-Me">Contact Me</Nav.Link>
                </Nav>
                <nav>
                    <a class="navbar-brand" href="#">
                        <img class='navbar-img' src={NavImage} width="30" height="30" alt="" />
                    </a>
                </nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MPHeader