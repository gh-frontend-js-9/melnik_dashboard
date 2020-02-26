import React, {Component} from 'react';
import './App.css';
import "./components/auth/styles/auth.css";
import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import {connect} from "react-redux";

interface Interface2 {
    user: {
        _id?: string
    }
}

class App extends Component<Interface2> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                {this.props.user._id ? <Dashboard/> : <Auth/>}
            </div>
        )
    };
}

const mapStateToProps = function (state) {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(App);
