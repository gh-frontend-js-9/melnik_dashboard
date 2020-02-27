import React, {Component} from "react";
import API from "../../../../service/apiService";

interface State {

}
interface Props {
    key?: any
}

class Thread extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    sendMessage = () => {
        let message = document.getElementById("input-message");
        // API
        console.log(message)
    };

    render() {
        return (
            <div className="dialog">
                <div className="dialog-items" id="dialog-messages"></div>
                <form id="form">
                    <input type="text" id="input-message" placeholder="Write a message..."/>
                    <button onSubmit={this.sendMessage}>Send</button>
                </form>
            </div>
        );
    }
}

export default Thread
