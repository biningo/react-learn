import React from "react";
import ThemedButton from "./themed-button";
import {themes, ThemeContext} from "./theme-context";
interface IState {
    theme:any
}
interface IProps {
    changeTheme:any
}

class Toolbar extends React.Component<IProps,IState>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let props = this.props;
        return (
            <ThemedButton changeTheme={props.changeTheme} >
                ChangeTheme
            </ThemedButton>

        );
    }
}


interface AppIProps {
    
}
class App2 extends React.Component<AppIProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            theme:themes.light
        }
    }

    changeTheme = ()=>{
        this.setState(s=>({
            theme:
                s.theme === themes.dark
                ? themes.light
                : themes.dark,
        }))
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.changeTheme} />
                </ThemeContext.Provider>
            </div>
        );
    }
}




export default App2;
