import React, {Component} from 'react';
import Project from "../../models/Project";
import API from "../../service/apiService";
import ProjectLine from "../ProjectLine/ProjectLine";
import ProjectButton from "../ProjectButton/ProjectButton";

interface Props {

}

interface State {
    projects: Project[]
}

class ProjectList extends Component<Props,State> {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    updateProjects = () => {
        API.getProject()
            .then((response) => {
                this.setState({
                    projects: response,
                })
            })
    }

    componentDidMount(): void {
        this.updateProjects()
    }

    render() {
        return (
            <div>
                <div>
                <ProjectButton update={this.updateProjects} />
                {
                    this.state.projects.map(project => {
                        return(
                            <ProjectLine project={project} key={project._id}/>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default ProjectList;