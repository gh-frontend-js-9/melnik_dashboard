import React, {Component} from "react";
import ThreadList from "./thread-list/thread-list";
import Thread from "./thread/thread";
import AboutUser from "./aboutUser/aboutUser";
import {connect} from "react-redux";

interface State {
    user?: object,
    isOpenThread?: any
}

class Inbox extends Component<{ openThread: object }, State> {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isOpenThread:false
        }
    }

    render() {
        return (
            <div>
                        {
                            document.documentElement.clientWidth > 700 ?
                <div className="content__nav">
                    <div className="content__nav__types">
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
                                :
                                null
                        }
                <div className="content_content">
                    <ThreadList/>
                    {this.props.openThread ? <Thread/> : null}
                    {this.props.openThread ? <AboutUser user={this.state.user}/> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        user: state.user,
        openThread: state.openThread
    }
};


export default connect(mapStateToProps, {})(Inbox)