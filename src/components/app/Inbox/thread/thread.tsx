import React, {Component} from "react";
import API from "../../../../service/apiService";
import {connect} from "react-redux";
import RenderMessages from "./renderMessages";

interface Props {
    key?: any,
    thread?: any,
    getMessages?: any,
    messages: any
}

class Thread extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    sendMessage = () => {
        let message = document.getElementById('input-message');
        // API
        console.log(message)
    };

    render() {
        return (
            <div className="dialog">
                <div className="dialog-items" id="dialog-messages">
                    { this.props.messages ?
                        this.props.messages.map(message =>
                            <RenderMessages message={message} key={message._id}/>
                        )
                    : null}
                </div>
                <input type="text" id="input-message" placeholder="Write a message..."/>
                <button onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        thread: state.openThread.thread,
        messages: state.openThread.messages
    };
};


export default connect(mapStateToProps)(Thread)
