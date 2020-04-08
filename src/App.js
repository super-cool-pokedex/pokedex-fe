import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Routes from "./components/routes";

//Styles
import { appStyles } from "./styles";

function App() {
    const classes = appStyles();

    return (
        <Router>
            <div className={classes.maxWidth}>
                <div className={classes.container}>
                    <Routes />
                </div>
            </div>
        </Router>
    );
}

export default App;
