import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Sandwiches = () => {
    return <h1>Sandwiches</h1>
};
const Bus = ()=>{
  return <h1>Bus</h1>
};
const Cart = ()=>{
    return <h1>Cart</h1>
};
const RouteWithSubRoutes=(route:any)=>{
    return (
        <Route
            path={route.path}
            render={props=>{
                return (
                    <route.component {...props} routes={route.routes}  />
                )
            }}
        />
    )
};


const Tacos = ({routes}:any)=>{
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {
                    routes.map((route:any,i:number)=>{
                        // @ts-ignore
                        return <RouteWithSubRoutes key={i} {...route} />
                    })
                }
            </Switch>
        </div>
    );
};


const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

const RouteConfigExample = ()=>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    );
};

export default RouteConfigExample;