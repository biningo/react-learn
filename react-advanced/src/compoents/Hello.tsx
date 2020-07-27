import React from "react"
import App1 from "./context-demo/App-1";
import App2 from "./context-demo/App-2/app2";
import App3 from "./fragments-demo/App3";

export default class Hello extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h1>
                    Hello
                    <App1/>
                    <App2 />
                    <App3 />
                </h1>
            </div>
        );
    }
}
