import React from "react";
import BasicExample from "./Basic";
import ParamsExample from "./URLParameter";
import NestingExample from "./Nesting";
import AuthExample from "./Redirect(Auth)";
import CustomLinkExample from "./CustomLink";
import FormDemo from "./FormDemo";
import NoMatchDemo from "./NoMatchDemo";
import RescursiveExample from "./dfsRoute";
import SidebarExample from "./Sidebar";
import RouteConfigExample from "./子路由";
import QueryParamsExample from "./QueryParameters";


const App8 = () => {
    return (
        <div>
            <QueryParamsExample/>
            <hr/>
            <RouteConfigExample/>
            <hr/>
            <SidebarExample/>
            <hr/>
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