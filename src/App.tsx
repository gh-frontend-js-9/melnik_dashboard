import React from 'react';
import './App.css';
import "./components/auth/styles/auth.css";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/login";
import SingUp from "./components/auth/sing-up";
import Recovery from "./components/auth/recovery";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";


const App: React.FC = () => {

    return (
        <div className="App">
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
                    <Route path="/app">
                        <Dashboard/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
