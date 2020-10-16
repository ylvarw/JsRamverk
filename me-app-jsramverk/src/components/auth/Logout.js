import React, { Component } from 'react';


class LogOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "NoToken"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        window.$token = this.data;
        event.preventDefault();
    }

    render() {
        if (window.$token != "NoToken") {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>                        
                        <br></br>
                        <br></br>
                        <button type="submit">Log out</button>
                    </form>
                </div>
            
            );
        }
    }
}

export default LogOut;
