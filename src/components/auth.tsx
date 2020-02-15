import React, {Component} from 'react';
import Login from "./auth/login";
import "./auth/styles/auth.css";
import SingIn from "./auth/sing-in";

interface Interface {
    page?: string
}

class Auth extends Component<{}, Interface> {

    constructor() {
        super([]);
        this.state = {
            page: "login"
        }
    }

    render() {
        return (
            this.state.page == "login" ? <Login/> : <SingIn/>
        )
    }
}

export default Auth;