import React, {Component} from 'react';
import { connect } from "react-redux"
import {changeOpenThread} from "../../../../store/actions";

interface Props {
    thread: any,
    changeOpenThread:any
}

class RenderThread extends Component<Props> {

    updOpenThread = () => {
        this.props.changeOpenThread(this.props.thread)
    };

    render() {
        let thread = this.props.thread;
        if (thread.users.length === 2) {
            let user;
            if (thread.users[0] !== localStorage.id)
                user = thread.users[1];
            else
                user = thread.users[0];

            return (
                <div className="dialogs-item" onClick={this.updOpenThread}>
                    <div className="dialogs-item__person">
                        <img src="./user1.jpg" className="dialogs__avatar" alt=""/>
                        <span className="dialog__name">{user.name}</span>
                    </div>
                    <p>{thread.message ? thread.message.body : ""}</p>
                </div>
            );
        }
        else
            return null
    }
}

const mapStateToProps = state => {
    return {
        openThread: state.openThread
    };
};
const  mapDispatchToProps = {
    changeOpenThread,
};

export default connect(mapStateToProps,mapDispatchToProps)(RenderThread);