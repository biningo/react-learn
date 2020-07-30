import React from "react";

//history


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Home = ()=>{
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
};

const About = ()=>{
    return (
        <div>
            <h1>About</h1>
        </div>
    )
};

const User = ()=>{
    return (
        <div>
            <h1>User</h1>
        </div>
    )
};


const App8 = ()=>{

    const userPath = {pathname:"/user",search:"?username=bingo",hash:"#abc",state:{msg:"hello bingo"}};

    return (
        <div>

            <Router>
                <Route path="/" exact><Home/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/user"><User/></Route>
                <div>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to={userPath}>User</Link>

                </div>


            </Router>

        </div>
    )

};

export default App8;