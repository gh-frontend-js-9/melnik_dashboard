import React, {Component} from 'react';
import Modal from '../../models/modal';
import API from "../../service/apiService";

interface IMyComponentState {
    isShowing?: boolean,
    title?: string,
    company?: string,
    cost?: string,
    deadline?: string,
    assigned?: string,
    project?: any
}

interface IMyComponentProps {
    isShowing?: boolean,
    title?: string,
    company?: string,
    cost?: string,
    deadline?: string,
    assigned?: string,
    project?: any
}

class MoreMenuModal extends Component<IMyComponentProps, IMyComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            isShowing: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.closeModalHandler();
        // API.postProject(this.state);
    };

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
        let {project} = this.state;
        console.log({project})

        return (
            <div>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                <button className="open-modal-btn" onClick={this.openModalHandler}>Options</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    <form onSubmit={this.handleSubmit}>
                        <select name="status"  onChange={this.handleChange}>
                            <option value="Queued">Queued</option>
                            <option value="Development">Development</option>
                            <option value="Planning">Planning</option>
                            <option value="Testing">Testing</option>
                            <option value="Design">Design</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <input type="text" name="status" placeholder="Title" value={project}/>
                        <input type="text" name="cost" placeholder="Cost" onChange={this.handleChange}/>
                        <button className="btn-continue" type="submit">Update</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default MoreMenuModal;