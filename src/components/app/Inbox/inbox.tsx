import React, {Component} from "react";
import ThreadList from "./thread-list/thread-list";
import Thread from "./thread/thread";
import AboutUser from "./aboutUser/aboutUser";

interface State {
    test?: string,
    isPress?: boolean
}

class Inbox extends Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {
            test: 'zalypa',
            isPress: true
        }
    }

    update = t => {
        this.setState({isPress: false});
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <div className="content__nav">
                    <div className="content__nav__types">
                <span>
                    <i className="fas fa-inbox"/>
                    Inbox (2)
                </span>
                        <span>
                    <i className="fab fa-telegram-plane"/>
                    Sent
                </span>
                        <span>
                    <i className="fas fa-trash"/>
                    Trash
                </span>
                    </div>
                    <div className="content__nav__filter">
                        Filter message:
                        <select>
                            <option value="1">Date</option>
                        </select>
                    </div>
                </div>
                <div className="content_content">
                    <ThreadList
                        q={this.update}>
                    </ThreadList>
                    {this.state.isPress ? <Thread key={this.state.test}></Thread> : null}
                    {this.state.isPress ? <AboutUser/> : null}
                </div>
            </div>
        );
    }
}

export default Inbox
