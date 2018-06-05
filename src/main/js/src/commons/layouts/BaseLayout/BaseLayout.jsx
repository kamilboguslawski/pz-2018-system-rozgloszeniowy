import React, {Component} from 'react';
import './BaseLayout.css';
import {Container} from "reactstrap";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";

class BaseLayout extends Component {
    render() {
        return (
            <Container fluid className="base-layout">
                <header>
                    <MainNavbar/>
                </header>
                <main>
                    <Container className={this.props.className}>
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