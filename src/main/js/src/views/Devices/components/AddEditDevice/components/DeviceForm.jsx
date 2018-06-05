import React, {Component} from 'react';
import './DeviceForm.css';
import {MdHighlightRemove} from "react-icons/lib/md/index";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import SuggestionInput from "../../../../../commons/components/SuggestionInput/SuggestionInput";
import UserService from "../../../../../services/users/UserService/UserService";

class DeviceForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groupSearch: '',
            email: '',
            login: '',
            password: '',
            roles: [],
            groups: []
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
        if (this.props.user != null) {
            const user = {
                email: this.state.email,
                login: this.state.login
            };

            if (this.state.password.length > 0) {
                user.password = this.state.password;
            }

            UserService.updateUser(
                this.props.user.id,
                user,
                this.state.roles,
                this.state.groups
            );
        } else {
            // create
        }
    }

    render() {
        return (
            <Form className="user-form" onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="user@broadcast.com"
                           value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="login">Login</Label>
                    <Input type="text" name="login" id="login" placeholder="Login"
                           value={this.state.login}
                           onChange={(e) => this.setState({login: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="****"
                           onChange={(e) => this.setState({password: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="roles">Roles</Label>
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

                <FormGroup>
                    <Label for="groupSearch">Search for group:</Label>

                    <SuggestionInput
                        items={this.props.availableGroups}
                        maxOnList={6}
                        suggestionsLabel={(item) => item.name}
                        suggestionsValue={(item) => item.id}
                        onSelect={(selectedGroup) => {
                            if (!this.state.groups.some(group => group.id === selectedGroup.id)) {
                                this.setState(prevState => ({groups: [...prevState.groups, selectedGroup]}))
                            }
                        }}
                    />

                </FormGroup>

                <FormGroup>
                    <Label for="groups">Groups</Label>
                    {
                        this.state.groups.map(group =>
                            <span
                                key={group.id}
                                className="user-form--group-entry"
                            >
                                {group.name}
                                <MdHighlightRemove onClick={() => {
                                    this.setState(prevState => ({
                                        groups: prevState.groups.filter((item) => item.id !== group.id)
                                    }));
                                }}/>
                            </span>
                        )
                    }
                    {
                        this.state.groups.length === 0 ?
                            <em style={{marginLeft: '10px'}}>No groups selected.</em> : null
                    }
                </FormGroup>
                <div className="user-form--buttons">
                    <Button type="submit" color="success">Save</Button>
                </div>
            </Form>
        )
    }
}

export default DeviceForm;