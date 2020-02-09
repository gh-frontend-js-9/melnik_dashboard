import React, {Component} from 'react';
import './ProjectButton.css';
import API from "../../service/apiService";




interface Props {
    update: () => void;
}

class ProjectButton extends Component<Props,any> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            title: '',
            company: '',
            cost: '',
            deadline: '',
            assigned: ''
        }
    }



    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    submitHandler = async (e) => {
        e.preventDefault();
        await API.postProject(this.state);
        await this.props.update();
        this.setState({isOpen:false});
    };
    render() {

        const {title, company, cost, deadline, assigned} = this.state;
        return (
            <div className='button'>
                <button className='add-button'
                        onClick={() => this.setState({isOpen:true})}>
                    Add
                    <span className='plus'>
                        +
                    </span>
                </button>
                {this.state.isOpen && (
                    <div>
                        <div className='modal'>
                            <div className='modal-body'>
                                 <form onSubmit={this.submitHandler}>
                                    <input className='modal-input'
                                           type="text"
                                           placeholder="Title"
                                           id="title"
                                           name='title'
                                           value={title}
                                           onChange={this.changeHandler}
                                           required
                                    />
                                    <input className='modal-input'
                                           type="text"
                                           placeholder="Company"
                                           id="company"
                                           name='company'
                                           value={company}
                                           onChange={this.changeHandler}
                                           required
                                    />
                                    <input className='modal-input'
                                           type="text"
                                           placeholder="Cost"
                                           id="cost"
                                           name='cost'
                                           value={cost}
                                           onChange={this.changeHandler}
                                           required
                                    />
                                    <input className='modal-input'
                                           type="text"
                                           placeholder="Deadline"
                                           id="deadline"
                                           name='deadline'
                                           value={deadline}
                                           onChange={this.changeHandler}
                                           required/>
                                    <input className='modal-input'
                                           type="text"
                                           placeholder="Assigned"
                                           id="assigned"
                                           name='assigned'
                                           value={assigned}
                                           onChange={this.changeHandler}
                                           required
                                    />
                                    <div>
                                     <button type='submit'
                                             onSubmit={this.submitHandler}
                                             className='modal-button mg-rgt-20'
                                             > Submit</button>
                                     <button className='modal-button'
                                             onClick={() => this.setState({isOpen:false})}> Cancel</button>
                            </div>
                                 </form>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ProjectButton;