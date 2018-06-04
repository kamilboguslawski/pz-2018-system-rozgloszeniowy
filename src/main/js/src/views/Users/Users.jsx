import React, {Component} from 'react';
import './Users.css';
import BaseLayout from "../../commons/layouts/BaseLayout/BaseLayout";
import {Col, Row} from "reactstrap";
import UserList from "./components/UserList/UserList";
import {MdPersonAdd} from "react-icons/lib/md/index";

class Users extends Component {

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
                                <MdPersonAdd onClick={() => this.props.history.push('/users/add')}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <UserList/>
                    </Col>
                </Row>
            </BaseLayout>
        )
    }
}

export default Users;