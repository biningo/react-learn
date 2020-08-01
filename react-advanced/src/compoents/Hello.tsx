import React from "react"
import App1 from "./context-demo/App-1";
import App2 from "./context-demo/App-2/app2";
import App3 from "./fragments-demo/App3";
import App4 from "./hook-demo/App4";
import App5 from "./hook-demo/App5";
import App6 from "./hook-demo/ContextHook";
import App7 from "./hook-demo/OtherHook";
import App8 from "./router-demo/App8";

export default class Hello extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h1>
                    Hello
                    <App1/>
                    <App2/>
                    <App3/>
                    <App4/>
                    <App5 username={'None'} age={0}/>
                    <App6/>
                    <App7/>
                    <hr />
                    <App8/>

                </h1>
            </div>
        );
    }
}
