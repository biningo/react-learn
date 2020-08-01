import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";


const C1 = () => {
    let match = useRouteMatch();
    console.log(match);
    return <h3>C1</h3>
};
const C2 = () => {
    return <h3>C2</h3>
};


const OldSchoolMenuLink = (props: { label: string, to: string }) => {
    let match = useRouteMatch({path: props.to});

    return (
        <div>
            {match && '>'}
            <Link to={props.to}>{props.label}</Link>
        </div>
    )
};

const Home = () => {
    let match = useRouteMatch();
    console.log(match);
    return (
        <Router basename={'/c'}>
            <OldSchoolMenuLink label={'C1'} to={'/c1'}/>
            <OldSchoolMenuLink label={'C2'} to={'/c2'}/>

            <Switch>
                <Route path={'/c1'}><C1/></Route>
                <Route path={'/c2'}><C2/></Route>
            </Switch>

        </Router>
    )
};

const CustomLinkExample = () => {
    return (
        <div>

            <Router>
                    <Route path={'/c'}>
                        <Home/>
                    </Route>
            </Router>

        </div>
    )
};

export default CustomLinkExample;