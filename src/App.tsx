import React from 'react';
import './App.css';
import ProjectList from "./components/ProjectList/ProjectList";
import HeadNavigation from "./components/HeadNavigation/HeadNavigation";

const App: React.FC = () => {

    return (
        <div className="App">
            <HeadNavigation/>
            <section>
                <div className="section__nav">
                    <i className="fas fa-home"></i>
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-chart-line"></i>
                    <i className="fas fa-envelope"></i>
                    <i className="fas fa-user-friends"></i>
                </div>
                <div className="section__content">
                    <ProjectList/>
                </div>
            </section>
        </div>
    );
};

export default App;
