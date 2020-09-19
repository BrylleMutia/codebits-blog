import React from "react";
import { app, container } from "./App.module.css";

import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className={app}>
                <Navbar />
                <div className={container}>
                    <Switch>
						
					</Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
