import React from 'react';
import './App.css';
import "./components/auth/styles/auth.css";
import Dashboard from "./components/dashboard";
import Auth from "./components/auth";


const App: React.FC = () => {

    return (
        <div className="App">
            {localStorage.token ?  <Dashboard/>: <Auth/>}
        </div>
    );
};

export default App;
