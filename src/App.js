import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Routes from "./components/routes";

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
