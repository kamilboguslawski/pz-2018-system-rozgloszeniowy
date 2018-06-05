import React, {Component} from 'react';
import './UserList.css';
import {Pagination, PaginationItem, PaginationLink, Table} from "reactstrap";
import UserService from "../../../../services/users/UserService/UserService";
import BaseModal from "../../../../commons/components/modals/BaseModal/BaseModal";
import UserRow from "./components/UserRow/UserRow";

const UserHeaders = () => (
    <tr>
        <th>ID</th>
        <th>E-mail</th>
        <th>Login</th>
        <th>Roles</th>
        <th>Groups</th>
        <th>Actions</th>
    </tr>
);

/*const UserRow = withRouter(({user, index, history, parent}) => (
    <tr>
        <th scope="row">{index + 1}</th>
        <td>{user.email}</td>
        <td>{user.login}</td>
        <td>{user.roles.map((role, index) => index !== user.roles.length - 1 ? `${role.name}, ` : role.name)}</td>
        <td>{user.groups.map((group, index) => index !== user.groups.length - 1 ? `${group.name}, ` : group.name)}</td>
        <td className="user-table--actions-cell">
            <MdEdit className="user-table--edit-icon" onClick={() => history.push(`/users/${user.id}`)}/>
            <MdHighlightRemove className="user-table--remove-icon" onClick={() => parent.prepareDeleteUser(user.id)}/>
        </td>
    </tr>
));*/


class UserList extends Component {

    static USERS_PER_PAGE = 10;

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
            pages: 0,
            users: [],
            deleteModalToggle: null,
            errorModalToggle: null,
            userIdToDelete: null
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

    prepareDeleteUser(id) {
        this.setState({userIdToDelete: id});
    }

    deletePreparedUser() {
        this.state.deleteModalToggle();

        const backupUsers = this.state.users;
        const userId = this.state.userIdToDelete;
        UserService.deleteUser(userId)
            .then(response => {
                if (!response.ok) {
                    this.setState({
                        users: backupUsers
                    });
                    this.state.errorModalToggle();
                }
            });

        this.setState(prevState => ({
            users: prevState.users.filter(user => user.id !== this.state.userIdToDelete),
            userIdToDelete: null
        }));
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
                        this.state.users.map((user, index) => <UserRow key={index} index={index} user={user}
                                                                       prepareDeleteUserMethod={this.prepareDeleteUser.bind(this)}
                                                                       deleteModalToggle={this.state.deleteModalToggle}/>)
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

                <BaseModal
                    toggle={(toggle) => this.state.deleteModalToggle = toggle}
                    header={<span>Delete Confirmation</span>}
                    body={
                        <span>This operation is irreversible. Are you sure?</span>
                    }
                    approveButtonContent={<span>DESTROY THIS!</span>}
                    approveButtonColor="danger"
                    onApproveClick={() => this.deletePreparedUser()}
                    cancelButtonContent={<span>Get me out of here!</span>}
                    onCancelClick={() => this.state.deleteModalToggle()}
                />

                <BaseModal
                    toggle={(toggle) => this.state.errorModalToggle = toggle}
                    header={<span>Error</span>}
                    body={
                        <span>Something went wrong, sorry. :(</span>
                    }
                    cancelButtonContent={<span>Understood!</span>}
                    onCancelClick={() => this.state.errorModalToggle()}
                />
            </div>
        )
    }
}

export default UserList;