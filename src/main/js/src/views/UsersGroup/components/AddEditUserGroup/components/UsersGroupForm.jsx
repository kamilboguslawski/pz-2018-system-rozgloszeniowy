import React, {Component} from 'react';
import './UsersGroupForm.css';
import {MdHighlightRemove} from "react-icons/lib/md/index";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import SuggestionInput from "../../../../../commons/components/SuggestionInput/SuggestionInput";
import UserService from "../../../../../services/users/UserService/UserService";
import validate from 'validate.js';
import BaseModal from "../../../../../commons/components/modals/BaseModal/BaseModal";

class UsersGroupForm extends Component {

    static validatorConstraints = {
        email: {
            presence: true,
            length: {
                minimum: 1
            },
            email: true
        },
        login: {
            presence: true,
            length: {
                minimum: 1
            }
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            groupSearch: '',
            email: '',
            login: '',
            password: '',
            roles: [],
            groups: [],
            errors: [],
            errorModalToggle: null,
            confirmationModalToggle: null
        };
    }

    componentWillReceiveProps(props) {
        if (props.user != null) {
            this.setState({
                email: props.user.email,
                login: props.user.login,
                roles: props.user.roles,
                groups: props.user.groups
            });
        }
    }


    handleSubmit(event) {
        event.preventDefault();

        const user = {
            email: this.state.email,
            login: this.state.login
        };
        const errors = validate(user, UserForm.validatorConstraints, {format: "flat"});

        if (errors !== undefined) {
            this.setState({
                errors
            });
            this.state.errorModalToggle();
        } else {
            if (this.state.password.length > 0)
                user.password = this.state.password;

            if (this.props.user != null)
                this.handleUserUpdate(user, this.state.roles, this.state.groups);
            else
                this.handleUserCreate(user, this.state.roles, this.state.groups);
        }
    }

    handleUserUpdate(user, roles, groups) {
        UserService.updateUser(
            this.props.user.id,
            user,
            roles,
            groups
        ).then(
            successful => {
                if (successful) {
                    this.state.confirmationModalToggle();
                } else {
                    this.setState({
                        errors: ['Something went wrong, try again.']
                    })
                }
            }
        );
    }

    handleUserCreate(user, roles, groups) {
        UserService.createUser(
            user,
            roles,
            groups
        ).then(
            successful => {
                if (successful) {
                    this.state.confirmationModalToggle();
                } else {
                    this.setState({
                        errors: ['Something went wrong, try again.']
                    })
                }
            }
        );
    }

    render() {
        return (
            <Form className="user-form" onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <Label for="name">Group name</Label>
                    <Input type="text" name="name" id="name" placeholder="Name"
                           value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="Description" id="Description" placeholder="Description"
                           value={this.state.login}
                           onChange={(e) => this.setState({login: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="roles">Users</Label>
                    <Input type="select" name="roles" id="roles" multiple
                           value={this.state.roles.map(item => item.id.toString())}
                           onChange={event => {
                               const options = event.target.options;

                               const roles = [];
                               for (let i = 0; i < options.length; i++) {
                                   if (options[i].selected) {
                                       roles.push(this.props.availableRoles.find(item => item.id === parseInt(options[i].value)));
                                   }
                               }

                               this.setState({roles})
                           }}
                    >
                        {
                            this.props.availableRoles.map(role =>
                                <option
                                    key={`${role.name}${role.id}`}
                                    value={role.id}
                                >
                                    {role.name}
                                </option>)
                        }
                    </Input>
                </FormGroup>


                <div className="user-form--buttons">
                    <Button type="submit" color="success">Save</Button>
                </div>

                <BaseModal
                    toggle={(toggle) => this.state.errorModalToggle = toggle}
                    header={<span>Errors in form!</span>}
                    body={
                        <ul>
                            {
                                this.state.errors.map((error, index) => <li key={index}>{error}</li>)
                            }
                        </ul>
                    }
                    cancelButtonContent={<span>Understood!</span>}
                    onCancelClick={() => this.state.errorModalToggle()}
                />

                <BaseModal
                    toggle={(toggle) => this.state.confirmationModalToggle = toggle}
                    header={<span>Confirmation</span>}
                    body={
                        this.props.user != null ?
                            <span>Group updated!</span>
                            :
                            <span>Group created!</span>
                    }
                    cancelButtonContent={<span>Understood!</span>}
                    onCancelClick={() => this.state.confirmationModalToggle()}
                />
            </Form>
        )
    }
}

export default UsersGroupForm;