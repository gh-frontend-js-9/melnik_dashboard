import React, {Component} from "react";
import API from "../../service/apiService";
import RenderProject from "./renderProject/renderProject";
import Project from "../../models/Project";

interface State {
    projects: Project[]
}

class Projects extends Component<{}, State> {

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
    };

    componentDidMount(): void {
        this.updateProjects()
    }

    render() {
        return (
            <div>
                {
                    this.state.projects.map(project => {
                        return (
                            <RenderProject project={project} key={project._id}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default Projects
