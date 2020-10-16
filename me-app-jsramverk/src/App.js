import React, { Component } from "react";

// import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

import Me from './Me.js';
import Report from './Report.js';
import AuthHandler from './AuthHandler.js';

import AddKmom from './components/AddKmom.js'


window.$token = 'NoToken';
// const App = () => (
export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Me</Link>
                            </li>
                            <li>
                                <Link to="/report/week/1">Kmom01</Link>
                            </li>
                            <li>
                                <Link to="/report/week/2">Kmom02</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                            <li>
                                <Link to="/addkmom">New kmom</Link>
                            </li>

                        </ul>
                    </nav>
                    <Route exact path="/" component={Me} />
                    <Route path="/report/week/:kmom" component={Report} />
                    <Route path="/admin" component={AuthHandler} />
                    <Route path="/addkmom" component={AddKmom}/>
                    {/* <Route path="/addkmom" render={props => (<AddKmom {...props} token={this.state.token} />)} /> */}
                </div>
            </Router>
        );
    }
    // render() {
    //     return(
    //         <Router>
    //         <div className="App">
    //             <nav>
    //                 <ul>
    //                     <li>
    //                         <Link to="/">Me</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/report/week/1">Kmom01</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/report/week/2">Kmom02</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/admin">Admin</Link>
    //                     </li>
    //                     {/* <li>
    //                         <Link to="/newkmom">New kmom</Link>
    //                     </li> */}
    //                     {/* <li>
    //                         <Link to="/login">Login</Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/register">Register</Link>
    //                     </li> */}
    //                 </ul>
    //             </nav>
                // <Route exact path="/" component={Me} />
                // <Route path="/report/week/:kmom" component={Report} />
                // <Route path="/admin" component={AuthHandler} />
                // <Route 
                //     path={"/addkmom"}
                //     render={props => (
                //         <AddKmom
                //         {...props}
                //         token={this.state.token}
                //         />
                //     )}
                // />
    //             {/* <Route path="/addkmom" component={AddKmom} /> */}

    //             {/* <Route path="/addkmom" render={(props) => <AddKmom {...props}/>}/> */}
    //             {/* <Route path="/login" component={Login} /> */}
    //             {/* <Route path="/register" component={Register} /> */}
    //             {/* <Route path="/register" component={Registration} /> */}
    //         </div>
    //     </Router>
    //     )
    // }
}
// );

// export default App;