import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Projects from "./app/Projects/projects";
import Header from "./app/navigation";
import Inbox from "./app/Inbox/inbox";


class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header/>
                <section>
                    <Router>
                        <div className="section__nav">
                            <a href="#">
                                <i className="fas fa-home"/>
                            </a>
                            <Link to="/app/projects">
                                <i className="fas fa-bars"/>
                            </Link>
                            <a href="#">
                                <i className="fas fa-chart-line"/>
                            </a>
                            <Link to="/app/inbox">
                                <i className="fas fa-envelope"/>
                            </Link>
                            <a href="#">
                                <i className="fas fa-user-friends"/>
                            </a>
                        </div>
                        <div className="section__content">
                            <Switch>
                                <Route path="/app/projects">
                                    <Projects/>
                                </Route>
                                <Route path="/app/inbox">
                                    <Inbox/>
                                </Route>
                                <Route path="/app/">
                                    <Redirect to="/app/projects"/>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </section>
            </div>

        )
    }
}

export default Dashboard;