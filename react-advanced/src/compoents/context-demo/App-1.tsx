import React from "react";

class Button extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div>
            <button>{this.context}</button>
        </div>;
    }
}

class ThemeButton extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Button />;
    }
}


class Toolbal extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <ThemeButton/>
            </div>
        );
    }
}

const ThemeContext = React.createContext('light');
class App1 extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            //下面的所有子组件都可以直接拿到 value的值 不需要 props传递
            <ThemeContext.Provider value="dark">
                <Toolbal />
            </ThemeContext.Provider>
        );
    }
}

Button.contextType = ThemeContext;

export default App1;
