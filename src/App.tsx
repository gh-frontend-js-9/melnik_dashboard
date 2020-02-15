import React from 'react';
import './App.css';
import Projects from "./components/projects";
import Header from "./components/app/navigation";
import Auth from "./components/auth";

const App: React.FC = () => {
    return (
        <div className="App">
            {
                localStorage.token ?  <div>
                <Header/>
                <section>
                    <div className="section__nav">
                        <a href="#">
                            <i className="fas fa-home"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-bars"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-chart-line"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-user-friends"></i>
                        </a>
                    </div>
                    <div className="section__content">
                        <Projects/>
                    </div>
                </section>
            </div> : <Auth/>
            }
        </div>
    );
};

export default App;
