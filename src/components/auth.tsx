import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./auth/login";
import SingUp from "./auth/sing-up";
import Recovery from "./auth/recovery";


class Auth extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/sing-up">
                        <SingUp/>
                    </Route>
                    <Route path="/recovery">
                        <Recovery/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </Router>

        )
    }
}

export default Auth;