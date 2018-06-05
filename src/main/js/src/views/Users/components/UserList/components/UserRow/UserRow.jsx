import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {MdEdit, MdHighlightRemove} from "react-icons/lib/md/index";

class UserRow extends Component {

    render() {
        const {user, index, history, prepareDeleteUserMethod, deleteModalToggle} = this.props;

        return (
            <tr>
                <th scope="row">
                    {index + 1}
                </th>

                <td>
                    {user.email}
                </td>

                <td>
                    {user.login}
                </td>

                <td>
                    {
                        user.roles.map(
                            (role, index) => index !== user.roles.length - 1 ? `${role.name}, ` : role.name
                        )
                    }
                </td>

                <td>
                    {
                        user.groups.map(
                            (group, index) => index !== user.groups.length - 1 ? `${group.name}, ` : group.name
                        )
                    }
                </td>

                <td className="user-table--actions-cell">
                    <MdEdit className="user-table--edit-icon" onClick={() => history.push(`/users/${user.id}`)}/>
                    <MdHighlightRemove className="user-table--remove-icon" onClick={() => {
                        prepareDeleteUserMethod(user.id);
                        deleteModalToggle();
                    }}/>
                </td>
            </tr>
        )
    }
}

UserRow.propTypes = {
    index: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    prepareDeleteUserMethod: PropTypes.func.isRequired,
    deleteModalToggle: PropTypes.func.isRequired
};

export default withRouter(UserRow);