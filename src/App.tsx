import React, {Component} from 'react';
import './App.css';
import "./components/auth/styles/auth.css";
import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import {connect} from "react-redux";
import {setUser} from "./store/actions";
import API from "./service/apiService";

interface Interface2 {
    user: {
        _id?: string
    },
    setUser?:any
}

class App extends Component<Interface2> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(): void {
        if (localStorage.token)
            API.getUserById(localStorage.id).then(r => {
                this.props.setUser(r.json)
            })
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

const  mapDispatchToProps = {
    setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
