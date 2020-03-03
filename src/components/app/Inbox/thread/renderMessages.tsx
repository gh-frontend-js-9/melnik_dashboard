import React, {Component} from 'react';

class RenderMessages extends Component<{message: any}> {

    render() {
        let {message} = this.props;
        return (
            <div className={
                message.user._id !== localStorage.id ? "dialog-message" : "dialog-message my"
            }>
                <img className="" src="../user1.jpg" alt={''}/>
                <p className="">{message.body}</p>
            </div>
        )
    }
}

export default RenderMessages;