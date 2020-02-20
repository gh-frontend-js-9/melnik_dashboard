import React, {Component} from "react";

interface State {
a?: number
}
interface Props {
    q?:any
}

class ThreadList extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            a:1
        }
    }

    edit = event => {
        this.props.q(this.state.a);
        // this.setState({a: 2})
    };

    render() {
        return (
            <div className="dialogs" id="dialogs">

                <button onClick={this.edit} className="dialogs-add">
                    <i className="fas fa-plus"/>
                    New coversation
                </button>
            </div>


        );
    }
}

export default ThreadList
