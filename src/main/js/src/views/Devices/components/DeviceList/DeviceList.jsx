import React, {Component} from 'react';
import './DeviceList.css';
import { withRouter } from 'react-router-dom'
import {Pagination, PaginationItem, PaginationLink, Table} from "reactstrap";
import {MdEdit, MdHighlightRemove} from "react-icons/lib/md/index";
import UserService from "../../../../services/users/UserService/UserService";

const UserHeaders = () => (
    <tr>
        <th>ID</th>
        <th>IP</th>
        <th>Name</th>
        <th>User_id</th>
    </tr>
);

const UserRow = withRouter(({user, index, history}) => (
    <tr>
        <th scope="row">{index + 1}</th>
        <td>{user.email}</td>
        <td>{user.login}</td>
        <td>{user.roles.map((role, index) => index !== user.roles.length - 1 ? `${role.name}, ` : role.name)}</td>
        <td>{user.groups.map((group, index) => index !== user.groups.length - 1 ? `${group.name}, ` : group.name)}</td>
        <td className="user-table--actions-cell">
            <MdEdit className="user-table--edit-icon" onClick={() => history.push(`/users/${user.id}`)}/>
            <MdHighlightRemove className="user-table--remove-icon"/>
        </td>
    </tr>
));


class DeviceList extends Component {

    static USERS_PER_PAGE = 10;

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            pages: 0,
            users: []
        }
    }

    getUsers() {
        UserService.getUsers(this.state.currentPage, UserList.USERS_PER_PAGE)
            .then(json => {
                this.setState({
                    users: json._embedded.users,
                    pages: json.page.totalPages
                });
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getUsers();
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
                        this.state.users.map((user, index) => <UserRow key={index} index={index} user={user}/>)
                    }
                    </tbody>
                </Table>

                <div className="user-table--pagination-wrapper">
                    <Pagination aria-label="User list navigation" size="2">
                        <PaginationItem disabled={this.state.currentPage <= 0}>
                            <PaginationLink
                                previous
                                onClick={() => {
                                    this.setState({currentPage: this.state.currentPage - 1}, this.getUsers)
                                }}
                            />
                        </PaginationItem>

                        <PaginationItem disabled={true}>
                            <PaginationLink>
                                {this.state.currentPage + 1}
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem disabled={this.state.currentPage >= this.state.pages - 1}>
                            <PaginationLink
                                next
                                onClick={() => {
                                    this.setState({currentPage: this.state.currentPage + 1}, this.getUsers)
                                }}
                            />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}

export default DeviceList;