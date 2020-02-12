import React, {Component} from 'react';
import './renderProject.css';
import Project from "../../models/Project";
import MoreMenuModal from "../Modals/moreMenuModal";

class RenderProject extends Component<{project: Project}> {


    render() {
        let {project} = this.props;

        return (
            <div className='wrapper'>
                <div className=
                         {
                             project.progress === 100 ? "block-project full" : project.progress ? "block-project" : "block-project zero"
                         }
                >
                    <div className='box-project'>
                        <div>
                            <p className='title'>
                                {project.title}
                            </p>
                            <p className='colorG'>
                                {project.company}
                            </p>
                        </div>
                        <div>
                            {project.cost}
                        </div>
                        <div>
                            <p>
                                15 May 2016
                            </p>
                            <p className='colorG'>
                                10 days left
                            </p>
                        </div>
                        <div>
                            {project.timeSpent + " hours"}
                        </div>
                        <div>
                            {project.progress + "%"}
                        </div>
                        <div className="status">
                            {project.status}
                        </div>
                        <div className='user-profile'>
                            <div className='user-ava'>

                            </div>
                            <div>
                                <div>
                                    {
                                        project.assigned ? project.assigned.name : "Melya"
                                    }
                                </div>
                                <p className='colorG'>
                                    {
                                        project.assigned ? project.assigned.description : "Master/Lomaster"
                                    }
                                </p>
                            </div>
                            {
                                <MoreMenuModal key={project._id}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RenderProject;