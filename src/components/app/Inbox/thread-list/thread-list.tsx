import React, {Component} from "react";
import API from "../../../../service/apiService";
import RenderThread from "./renderThread";
import Thread from "../../../../models/thread";
import {connect} from 'react-redux';
import {isReload} from "../../../../store/actions";

interface State {
    threads: Thread[]
}

interface Props {
    upd?: any,
    isReloadF:boolean,
    isReload:any,
    isOpenThread: boolean
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

    componentDidUpdate(){
        if(this.props.isReload) {
            this.props.isReload(false);
            this.getThreads();
        }
    }

    edit = info => {
        this.props.upd(info);
    };

    render() {
        return (
            <div className="dialogs" id="dialogs" style={
                document.documentElement.clientWidth < 700 && !this.props.isOpenThread ?
                    {
                            display:"flex"
                    } :
                    {
                            display:"none"
                    }
            }>
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

const mapStateToProps = function(state){
    return {
        isReloadF: state.isReload,
        isOpenThread: state.isOpenThread
    }
};

const  mapDispatchToProps = {
    isReload,
};

export default connect(mapStateToProps,mapDispatchToProps)(ThreadList)
