import React, {Component} from "react";

interface State {

}

class AboutUser extends Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount(): void {

    }

    render() {
        return (
            <div className="user_info" id="user_info"></div>
        );
    }
}

export default AboutUser
