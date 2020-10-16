import React, { Component } from 'react';
import Registration from './components/auth/Registration.js'
import Login from './components/auth/Login.js'


export default class AuthHandler extends Component {


    render() {
        if (window.$token !== "NoToken") {
            return (
                <div>
                    <h1>Admin</h1>
                    <br></br>
                    <Login />
                    <Registration />
                </div>
            )   
        } else {
            return (
                <div>
                     <form onSubmit={this.handleSubmit}>
                        {/* <p>{this.message}</p> */}
                        <h1>Admin</h1>
                        <h2>You are loged in</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <button type="submit">Log out</button> */}
                    </form>
                </div>
            );
        }
       
    }
}
