import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";


class Login extends Component {
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

    handleSuccessfulAuth(data) {
        console.log(data);
        window.$token = data;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        // console.log('form submitted');

        var data = Qs.stringify({
            'username': this.state.username,
            'password': this.state.password  
        });

        var config = {
            method: 'post',
            url: 'http://localhost:1337/login',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        
        axios(config)
        .then(response => {
            console.log(response.data.data);
            console.log('you logged in ');           

            if (response.data.data.type === "success") {
                this.handleSuccessfulAuth(response.data.data.token);
            };
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
                    <button type="submit">Login</button>
                </form>
            </div>

        );
    }
}


export default Login;
