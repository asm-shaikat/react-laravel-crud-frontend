import React, { Component} from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/users')
        .then((response)=>{
            this.setState({
                users: response.data
            })
        })
        .catch(err => console.error(err))
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(users => (
                                <tr>
                                    <th scope="row">{users.id}</th>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td><Link to={`/edit/${users.id}`}><button>Edit</button></Link></td>
                                    <td><button>Delete</button></td>
                                </tr> 
                            ))
                        }
                    </tbody> 
                </table>
            </div>
        );
    }
}
export default Home;
