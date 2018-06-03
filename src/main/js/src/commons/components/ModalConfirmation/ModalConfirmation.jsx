import React, {Component} from 'react';
import './ModalConfirmation.css';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


class ModalConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open
        };
    }

    toggle(callback) {
        if (callback)
            callback();

        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const {header, message, onClick} = this.props;

        return (
            <Modal isOpen={this.state.open} toggle={() => this.toggle()} className={this.props.className}>
                <ModalHeader>
                    {header !== undefined ? header : 'Confirmation'}
                </ModalHeader>
                <ModalBody>
                    {message !== undefined ? message : 'Are you sure You want to do that?'}
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => this.toggle(onClick)}>Yes</Button>
                    <Button color="secondary" onClick={() => this.toggle()}>No</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default ModalConfirmation;