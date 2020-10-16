import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            registrationErrors: ""
        }
        this.message = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log('form submitted');

        var data = Qs.stringify({
        'username': this.state.username,
        'password': this.state.password 
        });

        var config = {
            method: 'post',
            url: 'http://localhost:1337/register',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
        .then(response => {
            console.log(JSON.stringify(response.data));
            console.log(response.data);

            this.message = "User registered as " + this.state.username;

            console.log("User registered as " + this.state.username);
            
            return this.message;
        })
        .catch(error => {
            console.log(error);
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>{this.message}</p>
                    <br></br>
                    <br></br>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    />
                    <br></br>
                    <br></br>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                    <br></br>
                    <br></br>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}


export default Registration;