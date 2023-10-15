import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="" className='nav-link'>Beranda</Link>
                            </li>
                        </ul>

                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="/tentang" className='nav-link'>Tentang</Link>
                            </li>
                        </ul>

                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="/kontak" className='nav-link'>Kontak</Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
