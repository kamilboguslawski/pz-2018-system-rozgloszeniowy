import React, {Component} from 'react';
import './CentredComponentsLayout.css';
import {Container} from "reactstrap";

class CentredComponentsLayout extends Component {
    render() {
        return (
            <Container className={`centred-components-layout ${this.props.className}`}>
                {this.props.children}
            </Container>
        )
    }
}

export default CentredComponentsLayout;