import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavImage from '../Me.PNG'
import './MPHeader.css'

const MPHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#Home">JR Kim</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
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