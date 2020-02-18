import React, {Component} from 'react';
import Login from "./auth/login";
import "./auth/styles/auth.css";
import SingUp from "./auth/sing-up";
import Recovery from "./auth/recovery";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class Auth extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route path="/sing-up">
                        <SingUp/>
                    </Route>
                    <Route path="/recovery">
                        <Recovery/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Auth;