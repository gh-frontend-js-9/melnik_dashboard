import React, {Component} from "react";
import API from "../../../../service/apiService";
import RenderThread from "./renderThread";
import Thread from "../../../../models/thread";
import {connect} from 'react-redux';
import {isReload} from "../../../../store/actions";
import Modal from "../../../../models/modal";

interface State {
    threads: Thread[],
    isShowing: boolean,
    threadNew?: any
}

interface Props {
    upd?: any,
    isReloadF: boolean,
    isReload: any,
    isOpenThread: boolean,
    me: any
}

class ThreadList extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            threads: [],
            isShowing: false,
            threadNew: []
        }
    }

    removeUsers = (arr1: any, arr2: any) => {
        let _tmp: any = [];
        arr1.map(element => {
            let q = 0;
            arr2.map(element2 => {
                if (element._id === element2._id || element._id === this.props.me._id)
                    q++;
            });
            if (q === 0)
                _tmp.push(element);
        });
        return _tmp;
    };

    getThreads = () => {
        let usersTmp: any = [], users: any = [], user;
        API.getAllUsers().then(response => {
            usersTmp = response;
            API.getAllThreads()
                .then((response) => {
                    this.setState({
                        threads: response,
                    });
                    response.map(thread => {
                        if (thread.users[0]._id === this.props.me._id)
                            user = thread.users[1];
                        else
                            user = thread.users[0];

                        if (user)
                            users.push(user);

                    });
                    let result = this.removeUsers(usersTmp, users);
                    if (this.state.threadNew.length === 0) {
                        this.setState({threadNew: result})
                    }
                });
        });

    };

    componentDidMount(): void {
        this.getThreads();
    }

    componentDidUpdate() {
        // this.props.isReload(false);
        this.getThreads();
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    };

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    };

    render() {
        return (
            <div className="dialogs" id="dialogs">
                {
                    this.state.threads.map(thread => {
                        return (
                            <RenderThread thread={thread} key={thread._id}/>
                        )
                    })
                }

                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"/> : null}

                <Modal
                    header="Create thread"
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    <div>
                        <p>// Список юзерів, з якими ще немає діалога <br/>
                            xD
                        </p>
                    </div>
                </Modal>
                <button className="dialogs-add" onClick={this.openModalHandler}>
                    <i className="fas fa-plus"/>
                    New coversation
                </button>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        isReloadF: state.isReload,
        isOpenThread: state.isOpenThread,
        me: state.user
    }
};

const mapDispatchToProps = {
    isReload,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadList)
