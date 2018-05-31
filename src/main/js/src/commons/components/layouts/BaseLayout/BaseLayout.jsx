import React, {Component} from 'react';
import './BaseLayout.css';
import Footer from "../../Footer/Footer";
import MainNavbar from "../../MainNavbar/MainNavbar";
import {Container} from "reactstrap";

class BaseLayout extends Component {
    render() {
        return (
            <Container fluid className="base-layout">
                <header>
                    <MainNavbar/>
                </header>
                <main>
                    <Container>
                        {this.props.children}
                    </Container>
                </main>
                <footer>
                    <Container>
                        <Footer/>
                    </Container>
                </footer>
            </Container>
        )
    }
}

export default BaseLayout;