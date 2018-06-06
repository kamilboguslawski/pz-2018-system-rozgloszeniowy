import React, {Component} from 'react';
import './MainNavbar.css';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import TextLogo from "../TextLogo/TextLogo";
import {Link} from "react-router-dom";

class MainNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/"><TextLogo firstLine="Broadcast" firstLineSmall="System"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link
                                        to="/"
                                        className="nav-link"
                                    >
                                        Homepage
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link
                                        to="/users"
                                        className="nav-link"
                                    >
                                        Users
                                    </Link>
                                </NavItem>
<<<<<<< HEAD
                                <NavItem>
                                    <Link
                                        to="/usersgroup"
                                        className="nav-link"
                                    >
                                        Users group
=======

                                <NavItem>
                                    <Link
                                        to="/fileTransfer"
                                        className="nav-link"
                                    >
                                        Upload file
>>>>>>> 78d40d4bfcc713a9c8d3a17c4d371084da82f4b8
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default MainNavbar;