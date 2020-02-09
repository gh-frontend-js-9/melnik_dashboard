import React, {Component} from 'react';
import './ProjectLine.css';
import Project from "../../models/Project";


interface Props {
    project: Project
}

class ProjectLine extends Component<Props> {


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
                            <div className='title'>
                                {project.title}
                            </div>
                            <div>
                                {project.company}
                            </div>
                        </div>
                        <div>
                            {project.cost}
                        </div>
                        <div>
                            <div>
                                15 May 2016
                            </div>
                            <div>
                                10 days left
                            </div>
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
                                Ava
                            </div>
                            <div>
                                <div>
                                    {
                                        project.assigned ? project.assigned.name : "Melya"
                                    }
                                </div>
                                <div>
                                    {
                                        project.assigned ? project.assigned.description : "Master/Lomaster"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectLine;