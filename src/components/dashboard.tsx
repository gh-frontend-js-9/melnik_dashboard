import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Projects from "./app/projects";


class Dashboard extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/projects">
                        <Projects/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Dashboard;