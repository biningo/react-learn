import React from "react";
import BasicExample from "./Basic";
import ParamsExample from "./URLParameter";
import NestingExample from "./Nesting";
import AuthExample from "./Redirect(Auth)";



const App8 = ()=>{
    return (
        <div>
            <BasicExample/>
            <hr />
            <ParamsExample/>
            <hr />
            <NestingExample/>
            <hr />
            <AuthExample/>
        </div>
    )
};

export default App8;