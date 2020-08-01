import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";



const NoMatchDemo = ()=>{
    return (
        <Router>

            <Link to={'/n1'}>N1</Link>
            <Link to={'/n2'}>N2</Link>
            <Link to={'/n3'}>N3</Link>

            <Switch>

                <Route path={'/n1'} children={<h1>N1</h1>} />
                <Route path={'/n2'} children={<h1>N2</h1>} />
                <Route path={'*'} children={<h1>No Match</h1>} />

            </Switch>

        </Router>
    )
};


export default NoMatchDemo;