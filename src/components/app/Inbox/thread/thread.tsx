import React, {Component} from "react";

interface State {

}
interface Props {
    key?: any
}

class Thread extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount(): void {
        console.log(this.props)
    }

    render() {
        let {key} = this.props;
        return (
            <div className="dialog">
                <div className="dialog-items" id="dialog-messages"></div>
                <form id="form">
                    {key}
                    <input type="text" placeholder="Write a message..."/>
                </form>
            </div>
        );
    }
}

export default Thread
