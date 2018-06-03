import React, {Component} from 'react';
import './UserList.css';
import {Pagination, PaginationItem, PaginationLink, Table} from "reactstrap";
import {MdEdit, MdHighlightRemove} from "react-icons/lib/md/index";
import UserService from "../../../../services/users/UserService/UserService";

const UserHeaders = () => {
    return (
        <tr>
            <th>ID</th>
            <th>E-mail</th>
            <th>Login</th>
            <th>Roles</th>
            <th>Groups</th>
            <th>Actions</th>
        </tr>
    )
};

const UserRow = (index, user) => {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{user.email}</td>
            <td>{user.login}</td>
            <td>placeholder, placeholder</td>
            <td>placeholder, placeholder</td>
            <td className="user-table--actions-cell">
                <MdEdit className="user-table--edit-icon"/>
                <MdHighlightRemove className="user-table--remove-icon"/>
            </td>
        </tr>
    )
};

class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            users: []
        }
    }

    getUsers(page, size) {
        return UserService.getUsers(page, size);
    }

    componentDidMount() {
        this.getUsers(1, 2)
            .then(users => console.log(users));
    }


    render() {
        return (
            <div>
                <Table
                    responsive
                    className="user-table"
                >
                    <thead>
                        <UserHeaders/>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((index, user) => <UserRow index={index} user={user}/>)
                    }
                    </tbody>
                </Table>

                <div className="user-table--pagination-wrapper">
                    <Pagination aria-label="User list navigation" size="2">
                        <PaginationItem>
                            <PaginationLink previous href="#"/>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink next href="#"/>
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}

export default UserList;