import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class BaseModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.props.toggle(this.toggle.bind(this))
    }


    toggle() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }


    render() {
        const {header, body, onApproveClick, onCancelClick, approveButtonContent, cancelButtonContent} = this.props;

        return (
            <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className} centered>
                <ModalHeader>
                    {header}
                </ModalHeader>
                <ModalBody>
                    {body}
                </ModalBody>
                <ModalFooter>
                    {
                        approveButtonContent ?
                            <Button color="success" onClick={onApproveClick}>
                                {approveButtonContent}
                            </Button>
                            :
                            null
                    }

                    {
                        cancelButtonContent ?
                            <Button color="secondary" onClick={onCancelClick}>
                                {cancelButtonContent}
                            </Button>
                            :
                            null
                    }
                </ModalFooter>
            </Modal>
        )
    }
}

BaseModal.propTypes = {
    toggle: PropTypes.func.isRequired,

    header: PropTypes.node,
    body: PropTypes.node,

    onApproveClick: PropTypes.func,
    approveButtonContent: PropTypes.node,

    onCancelClick: PropTypes.func,
    cancelButtonContent: PropTypes.node
};

export default BaseModal;