import React, {Component} from 'react';
import './Register.css';
import CentredComponentsLayout from "../../commons/components/layouts/CentredComponentsLayout/CentredComponentsLayout";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import TextLogo from "../../commons/components/TextLogo/TextLogo";


class Register extends Component {

    static HOME_LINK = '/';

    render() {
        return (
            <CentredComponentsLayout className="login">
                <div>
                    <div className="login-logo">
                        <TextLogo
                            firstLine="Broadcast"
                            firstLineSmall="System"
                        />
                    </div>
                    <Form className="login-form">
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="user@broadcast.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="login">Login</Label>
                            <Input type="login" name="login" id="login" placeholder="login" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="****" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confPass">Confirm password</Label>
                            <Input type="password" name="confPass" id="confPassword" placeholder="****" />
                        </FormGroup>
                        <FormGroup className="login-form--buttons">
                            <Link to={Register.HOME_LINK}>Back to homepage</Link>
                            <Button color="success" className="login-form--submit">Register</Button>
                        </FormGroup>
                    </Form>
                </div>
            </CentredComponentsLayout>
        )
    }
}

export default Register;