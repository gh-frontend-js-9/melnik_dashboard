import React, {Component} from 'react';
import API from "../../service/apiService";
import  {Link} from "react-router-dom";

interface State {
    message?: any,
    email?:string,
    pass?:string,
}

class SingUp extends Component<{},State> {
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
        API.singUp(this.state)
            .then(r => {
                switch (r.response.status) {
                    case 201:{
                        window.localStorage.setItem("token", r.response.headers.get('x-auth-token') as string);
                        window.localStorage.setItem("id", r.json._id as string);
                        alert(r.json.message);
                        document.location.pathname = "/";
                        break;
                    }
                    case 400:{
                        let _tmp = '';
                        if (r.json.errors.email)
                            _tmp += r.json.errors.email + "\n";
                        else if (r.json.errors.password)
                            _tmp += r.json.errors.password + "\n";
                        else if (r.json.errors.name)
                            _tmp += r.json.errors.name;

                        this.setState({'message': _tmp});
                        break;
                    }
                }
                console.log(r.response.status);
            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <form className="form-auth" onSubmit={this.handleSubmit}>
                <img src="./laptop.jpg" alt=""/>
                <div className="form__inputs">
                    <h2>Sing-in</h2>
                    <input required type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email"/>
                    <input minLength={5}  maxLength={255} required type="password" name="pass" id="password" onChange={this.handleChange} placeholder="******"/>
                    <input minLength={5}  maxLength={255} required type="text" name="name" onChange={this.handleChange} placeholder="Name"/>
                    <button type="submit" onSubmit={this.handleSubmit}>Sing-up</button>
                    <p className="message-error">{this.state.message}</p>
                    <p>Forgot <Link to="/recovery">Password</Link></p> <br/>
                    <Link to="/">Sing-in</Link> <br/>

                </div>
            </form>
        )
    }
}

export default SingUp;