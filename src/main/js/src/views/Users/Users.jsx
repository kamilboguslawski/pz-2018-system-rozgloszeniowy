import React, {Component} from 'react';
import './Users.css';
import BaseLayout from "../../commons/layouts/BaseLayout/BaseLayout";
import {Col, Collapse, Row} from "reactstrap";
import UserList from "./components/UserList/UserList";
import {MdPersonAdd, MdSearch} from "react-icons/lib/md/index";
import UsersFilters from "./components/UsersFilters/UsersFilters";
import AddEditUserModal from "./components/AddEditUser/AddEditUserModal";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filtersCollapse: false,
            addUserOpen: false,
        };

        this.toggleAddUserModal = this.toggleAddUserModal.bind(this);
    }

    toggleFilters() {
        this.setState({filtersCollapse: !this.state.filtersCollapse});
    }

    toggleAddUserModal() {
        this.setState({addUserOpen: !this.state.addUserOpen});
    }

    render() {
        return (
            <BaseLayout className="users">
                <Row>
                    <Col xs={12}>
                        <div className="users--header">
                            <h1>
                                Users
                            </h1>
                            <div className="users--actions">
                                <MdPersonAdd onClick={() => this.toggleAddUserModal()}/>
                                <MdSearch onClick={() => this.toggleFilters()}/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Collapse isOpen={this.state.filtersCollapse}>
                            <UsersFilters className="users--filters"/>
                        </Collapse>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <UserList/>
                    </Col>
                </Row>

                <AddEditUserModal isOpen={this.state.addUserOpen} toggle={this.toggleAddUserModal}/>
            </BaseLayout>
        )
    }
}

export default Users;