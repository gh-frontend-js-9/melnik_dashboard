import React, {Component} from 'react';
import API from "../../service/apiService";
interface Props {
    switch?: any
}
class Login extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        API.login(this.state)
            .then(r => {
                window.localStorage.setItem("token", r.response.headers.get('x-auth-token') as string);
                window.localStorage.setItem("id", r.json._id as string);
                window.location.reload();
            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <form className="form-auth" onSubmit={this.handleSubmit}>
                <img src="./laptop.jpg" alt=""/>
                <div className="form__inputs">
                    <h2>Login</h2>
                    <input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email"/>
                    <input type="password" name="pass" id="password" onChange={this.handleChange} placeholder="******"/>
                    <button type="submit" onSubmit={this.handleSubmit}>Login</button>
                    <p id="message"></p>
                    <p>Forgot <a href="#" onClick={this.props.switch}>Password?</a></p>
                    <a href="#">Create your account</a>
                </div>
            </form>
        )
    }
}

export default Login;