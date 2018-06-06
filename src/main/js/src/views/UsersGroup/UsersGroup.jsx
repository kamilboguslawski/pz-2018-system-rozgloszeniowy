import React, {Component} from 'react';
import './UsersGroup.css';
import BaseLayout from "../../commons/layouts/BaseLayout/BaseLayout";
import {Col, Row} from "reactstrap";
import UserList from "./components/UserList/UserList";
import {MdGroupAdd} from "react-icons/lib/md/index";

class UsersGroup extends Component {

    render() {
        return (
            <BaseLayout className="users">
                <Row>
                    <Col xs={12}>
                        <div className="users--header">
                            <h1>
                                Users groups
                            </h1>
                            <div className="users--actions">
                                <MdGroupAdd onClick={() => this.props.history.push('/usersgroup/add')}/>
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

export default UsersGroup;