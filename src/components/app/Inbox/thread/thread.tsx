import React, {Component} from "react";
import API from "../../../../service/apiService";
import {connect} from "react-redux";
import RenderMessages from "./renderMessages";
import {isReload, changeOpenThread} from "../../../../store/actions";

interface Props {
    key?: any,
    thread?: any,
    getMessages?: any,
    messages: any,
    isReload: any,
    user?: any,
    changeOpenThread?: any
}

interface State {
    value: string,
    idThread: string
}

class Thread extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            idThread: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidUpdate() {
        let dialogMessagesBlock = document.getElementById('dialog-messages')!;
        dialogMessagesBlock.scrollTop = dialogMessagesBlock.scrollHeight;
        if (this.state.idThread !== this.props.thread._id) {
            this.setState({
                idThread: this.props.thread._id
            });
            this.setState({
                value: ''
            })
        }
    }

    componentDidMount(): void {
        setInterval(() => {
            API.getMessagesFromThread(this.props.thread._id).then(messages => {
                if (this.props.messages.length !== messages.length) {
                    this.updateOpenThread()
                }
            })
        }, 3000)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    updateOpenThread = () => {
        API.getMessagesFromThread(this.props.thread._id).then(messages => {
            this.props.changeOpenThread({
                'thread': this.props.thread,
                'user': this.props.user,
                'messages': messages
            });
        })
    };

    sendMessage(event) {
        event.preventDefault();
        API.sendMessage({
            idThread: this.state.idThread,
            message: this.state.value
        })
            .then(r => {
                this.setState({
                    value: ''
                });
                this.updateOpenThread();
                this.props.isReload(true);
            });
    }


    render() {
        return (
            <div className="dialog">
                <div className="dialog-items" id="dialog-messages">
                    {this.props.messages ?
                        this.props.messages.map(message =>
                            <RenderMessages message={message} key={message._id}/>
                        )
                        : null}
                </div>
                <form onSubmit={this.sendMessage} className="form-thread">
                    <input name='message' onChange={this.handleChange} value={this.state.value} type="text"
                           id="input-message"
                           placeholder="Write a message..."/>
                    <button type="submit"><i className="far fa-paper-plane"/></button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        thread: state.openThread.thread,
        messages: state.openThread.messages,
        user: state.openThread.user
    };
};

const mapDispatchToProps = {
    isReload,
    changeOpenThread
};


export default connect(mapStateToProps, mapDispatchToProps)(Thread)
