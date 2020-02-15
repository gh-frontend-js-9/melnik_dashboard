import React, {Component} from 'react';
import Modal from '../../../models/modal';
import API from "../../../service/apiService";

interface IMyComponentState {
    isShowing?: boolean,
    id?: string,
    status?: string,
    cost?: string
}

interface IMyComponentProps {
    isShowing?: boolean,
    project?: any
}

class MoreMenuModal extends Component<IMyComponentProps, IMyComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
            id: this.props.project._id,
            status: this.props.project.status,
            cost: this.props.project.cost
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.closeModal();
        console.log(this.state)
        API.updateProject(this.state)
            .then(r => console.log(r))
            .catch(error => console.log(error.message))
    };

    delProject = event => {
        event.preventDefault();
        this.closeModal();
        console.log(this.state)
        API.deleteProject(this.state)
            .then(r => console.log(r))
            .catch(error => console.log(error.message))
    };

    openModal = () => {
        this.setState({
            isShowing: true
        });
    };

    closeModal = () => {
        this.setState({
            isShowing: false
        });
    };

    render() {
        let {project} = this.props;
        return (
            <div>
                {this.state.isShowing ? <div onClick={this.closeModal} className="back-drop"></div> : null}

                <button className="open-modal-btn" onClick={this.openModal}>Options</button>

                <Modal
                    header={{project}.project.title}
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModal}>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="status">Status: <select required name="status"  onChange={this.handleChange} defaultValue={this.state.status}>
                            <option value="Queued">Queued</option>
                            <option value="Development">Development</option>
                            <option value="Planning">Planning</option>
                            <option value="Testing">Testing</option>
                            <option value="Design">Design</option>
                            <option value="Completed">Completed</option>
                        </select> </label>
                        <label htmlFor="cost">Cost:<input required type="text" name="cost" placeholder="Cost" value={this.state.cost} onChange={this.handleChange}/></label>
                        <div className="btns">
                            <button className="btn-continue" type="submit">Update</button>
                            <button style={{left:0 }} className="btn-cancel" onClick={this.delProject}>Delete</button>
                        </div>
                        </form>
                </Modal>
            </div>
        );
    }
}

export default MoreMenuModal;