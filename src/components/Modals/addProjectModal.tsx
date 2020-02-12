import React, {Component} from 'react';
import Modal from '../../models/modal';
import API from "../../service/apiService";

interface IMyComponentState {
    isShowing?: boolean,
    title?: string,
    company?: string,
    cost?: string,
    deadline?: string,
    assigned?: string
}

interface IMyComponentProps {
    isShowing?: boolean,
    title?: string,
    company?: string,
    cost?: string,
    deadline?: string,
    assigned?: string
}

class AddProjectModal extends Component<IMyComponentProps, IMyComponentState> {

    constructor(props: any) {
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
        API.postProject(this.state);
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
        return (
            <div>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                <button className="open-modal-btn" onClick={this.openModalHandler}>Add project</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    continueP={this.handleSubmit}>
                    <form onSubmit={this.handleSubmit} className="addProject">
                        <input required type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
                        <input required type="text" name="company" placeholder="Company" onChange={this.handleChange}/>
                        <input required type="text" name="cost" placeholder="Cost" onChange={this.handleChange}/>
                        <input required type="date" name="deadline" placeholder="Deadline" onChange={this.handleChange}/>
                        <input required type="text" name="assigned" placeholder="Assigned" onChange={this.handleChange}/>
                            <button className="btn-continue" type="submit">Add</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default AddProjectModal;