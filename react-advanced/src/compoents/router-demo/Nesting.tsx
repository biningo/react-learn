import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

const Home = () => {
    return <h1>Home</h1>
};


const Topics = () => {
    let {path, url} = useRouteMatch();

    console.log(path, url);

    return (
        <div>

            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>

                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>

                <Route path={`${path}/:topicId`}>
                    <Topic/>
                </Route>

            </Switch>

        </div>
    )

};


const Topic = () => {
    let {topicId} = useParams();
    let {path,url} = useRouteMatch(); //path是 /topic/:topicId  url /topic/rendering
    console.log(path,url);
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    )
};

const NestingExample = () => {
    return (
        <Router>
            <div>

                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr/>


                <Switch>

                    <Route exact path='/home'>
                        <Home/>
                    </Route>

                    <Route path="/topics">
                        <Topics/>
                    </Route>

                </Switch>


            </div>


        </Router>
    )
};


export default NestingExample;