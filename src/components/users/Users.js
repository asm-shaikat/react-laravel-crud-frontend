import React, { Component } from 'react';

class Users extends Component {
    
    render() {
    const users = this.props.users;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return(
                                    {/* <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>@mdo</td>
                                </tr> */}
                                );
                            })
                        }
                    </tbody> 
                </table>
            </div>
        );
    }
}

export default Users;