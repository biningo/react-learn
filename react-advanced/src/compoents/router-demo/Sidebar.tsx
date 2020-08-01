import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <h2>home</h2>
    },
    {
        path: "/bubblegum",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
];


const SidebarExample = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bubblegum">Bubblegum</Link>
                </li>
                <li>
                    <Link to="/shoelaces">Shoelaces</Link>
                </li>
            </ul>

            <Switch>

                {
                    routes.map(route => {
                        return (
                            <Route
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar/>}
                            />
                        )
                    })
                }

            </Switch>


            <div>
                <Switch>
                    {
                        routes.map(route => {
                            return (
                                <Route

                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main/>}
                                />
                            )
                        })
                    }
                </Switch>
            </div>


        </Router>
    )
};

export default SidebarExample;