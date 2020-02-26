import React, {Component} from "react";
import API from "../../../../service/apiService";
import RenderThread from "./renderThread";
import Thread from "../../../../models/thread";

interface State {
    threads: Thread[]
}

interface Props {
    upd?: any
}

class ThreadList extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            threads: []
        }
    }

    getThreads = () => {
        API.getAllThreads()
            .then((response) => {
                this.setState({
                    threads: response,
                });
            });
    };

    componentDidMount(): void {
        this.getThreads();
    }

    edit = info => {
        this.props.upd(info);
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
                <button onClick={this.edit} className="dialogs-add">
                    <i className="fas fa-plus"/>
                    New coversation
                </button>
            </div>
        );
    }
}

export default ThreadList
