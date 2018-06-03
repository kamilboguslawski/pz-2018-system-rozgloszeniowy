import React, {Component} from 'react';
import './AddEditUserModal.css';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class AddEditUserModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} centered>
                <ModalHeader>Add new user</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="user@broadcast.com"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="text" name="login" id="login" placeholder="Login"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="****"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="roles">Roles</Label>
                            <Input type="select" name="roles" id="roles" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.props.toggle}>Save</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default AddEditUserModal;