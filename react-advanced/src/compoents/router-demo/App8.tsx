import React from "react";
import BasicExample from "./Basic";
import ParamsExample from "./URLParameter";
import NestingExample from "./Nesting";
import AuthExample from "./Redirect(Auth)";
import CustomLinkExample from "./CustomLink";
import FormDemo from "./FormDemo";
import NoMatchDemo from "./NoMatchDemo";
import RescursiveExample from "./dfsRoute";


const App8 = () => {
    return (
        <div>
            <RescursiveExample/>
            <hr/>
            <NoMatchDemo/>
            <hr/>
            <BasicExample/>
            <hr/>
            <ParamsExample/>
            <hr/>
            <NestingExample/>
            <hr/>
            <AuthExample/>
            <hr/>
            <CustomLinkExample/>
            <hr/>
            <FormDemo/>


        </div>
    )
};

export default App8;