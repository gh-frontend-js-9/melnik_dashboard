import React, {Component} from 'react';
import API from "../../service/apiService";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {setUser} from "../../store/actions";

interface State {
    message?: any,
    email?: string,
    pass?: string,
}

class Login extends Component<{setUser: any}, State> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            message: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        this.setState({'message': ""});
        event.preventDefault();
        API.login(this.state)
            .then(r => {
                switch (r.response.status) {
                    case 200: {
                        this.props.setUser(r.json);
                        window.localStorage.setItem("token", r.response.headers.get('x-auth-token') as string);
                        window.localStorage.setItem("id", r.json._id as string);
                        break;
                    }
                    case 400: {
                        this.setState({'message': r.json.message});
                        break;
                    }
                }
            })
            // .catch(error => console.log(error.json.message))
    };

    render() {
        return (
            <form className="form-auth" onSubmit={this.handleSubmit}>
                <img src="./laptop.jpg" alt=""/>
                <div className="form__inputs">
                    <h2>Login</h2>
                    <input required type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
                    <input minLength={5} maxLength={255} required type="password" name="pass"
                           onChange={this.handleChange} placeholder="******"/>
                    <button type="submit" onSubmit={this.handleSubmit}>Login</button>
                    <p className="message-error">{this.state.message}</p>
                    <p>Forgot <Link to="/recovery">Password</Link></p> <br/>
                    <Link to="/">Create your account</Link>

                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const  mapDispatchToProps = {
    setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);