import React, {Component} from 'react';
import './AddEditUserGroup.css';
import {Col, Row} from "reactstrap";
import BaseLayout from "../../../../commons/layouts/BaseLayout/BaseLayout";
import RoleService from "../../../../services/roles/RoleService/RoleService";
import UserGroupService from "../../../../services/groups/UserGroupService/UserGroupService";
import UserService from "../../../../services/users/UserService/UserService";
import UserForm from "./components/UsersGroupForm";

class AddEditUserGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            user: null,
            availableRoles: [],
            availableGroups: [],
        }
    }

    componentDidMount() {
        if (this.state.id !== undefined) {
            UserService.getUserById(this.state.id)
                .then(user => {
                    this.setState({user});
                })
                .catch(error => console.log(error));
        }

        Promise.all([RoleService.getRoles(), UserGroupService.getGroups()])
            .then(response => {
                this.setState({
                    availableRoles: response[0]._embedded.roles,
                    availableGroups: response[1]._embedded.userGroups
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <BaseLayout>
                <Row>
                    <Col xs={12}>
                        <div>
                            <h1>
                                {this.state.id === undefined ? 'Add group' : `Edit group`}
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <UserForm
                            user={this.state.user}
                            availableRoles={this.state.availableRoles}
                            availableGroups={this.state.availableGroups}
                        />
                    </Col>
                </Row>

            </BaseLayout>
        );
    }
}

export default AddEditUserGroup;