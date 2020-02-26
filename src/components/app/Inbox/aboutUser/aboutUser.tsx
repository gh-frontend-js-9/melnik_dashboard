import React, {Component} from "react";

interface State {

}

interface Props {
    user?: any,
}

class AboutUser extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount(): void {

    }

    render() {
        return (
            <div className="user_info">
                <img className="user-info__avatar" src="./../user1.jpg" alt=""/>
                <p className="user-info__name">{this.props.user.name}</p>
                <p className="work">Frontend Developer</p>
                <p className="desc">{this.props.user.name}</p>
                <p className="title">Email</p>
                <p className="text">{this.props.user.email}</p>
                <p className="title">Phone</p>
                <p className="text">{this.props.user.phone}</p>
                <p className="title">Address</p>
                <p className="text">{this.props.user.address}</p>
                <p className="title">Organization</p>
                <p className="text">{this.props.user.organization}</p>
            </div>
        );
    }
}

export default AboutUser;
