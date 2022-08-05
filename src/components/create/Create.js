import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        }
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handlePassInputChange = this.handlePassInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleNameInputChange(event) {
        this.setState({ name: event.target.value })
    }
    handleEmailInputChange(event) {
        this.setState(
            {
                email: event.target.value
            }
        )
    }
    handlePassInputChange(event) {
        this.setState({ password: event.target.value })
    }
    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/submit', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        })
            .then(response => {
                
                this.setState({
                    name: '',
                    email: '',
                    password: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <form>
                    <div className="form">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="name@example.com"
                                onChange={this.handleEmailInputChange}
                                value={this.state.email}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="name" className="form-control" placeholder="Enter Name"
                                onChange={this.handleNameInputChange}
                                value={this.state.name}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password"
                                onChange={this.handlePassInputChange}
                                value={this.state.password}
                                required
                            />
                        </div>
                        <button type="submit" className='btn btn-primary' onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default create;