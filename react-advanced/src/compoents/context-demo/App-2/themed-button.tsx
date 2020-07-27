import React from "react";
import {ThemeContext} from "./theme-context";

interface IProps {
    changeTheme:any
}

interface IState {

}

class ThemedButton extends React.Component<IProps,IState>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let props = this.props;
        let theme = this.context;
        return (
            <button onClick={props.changeTheme} style={{backgroundColor:theme.background}} >
                ChangeTheme
            </button>
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;