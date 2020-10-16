import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";



class AddKmom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kmom: "",
            reportText: "",
            week: "",
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

    handleNoToken() {
        console.log('No token');
    }

    handleSubmit(event) {

        var loginToken = window.$token;

        if (loginToken === "NoToken") {
            this.handleNoToken();
        }

        var data = Qs.stringify({
        'kmom': this.state.kmom,
        'content': this.state.reportText 
        });

        var config = {
            method: 'post',
            url: 'http://localhost:1337/reports/week/' + this.state.week,
            headers: { 
                'x-access-token': loginToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
        .then(response => {
            console.log(JSON.stringify(response.data));
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

        event.preventDefault();
    }

    render() {
        if (window.$token !== "NoToken") {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>New Kmom</h1>
                        <br></br>
                        <br></br>
                        <input
                        type="text"
                        name="kmom"
                        placeholder="Kmom"
                        value={this.state.kmom}
                        onChange={this.handleChange}
                        required
                        />
                        <br></br>
                        <br></br>
                        <input
                        type="number"
                        name="week"
                        placeholder="kmom number, ex 03"
                        value={this.state.week}
                        onChange={this.handleChange}
                        required
                        />
                        <br></br>
                        <br></br>
                        <textarea
                        type="textarea"
                        name="reportText"
                        placeholder="text"
                        value={this.state.reportText}
                        onChange={this.handleChange}
                        required
                        />
                        <br></br>
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        } else {
            return(
                <div>
                    <h1>New Kmom</h1>
                    <h2>You need to log in to add reports</h2>
                </div>
            );
        }
    }
}


export default AddKmom;



