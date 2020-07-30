import React, {useContext, useState} from "react";
import {ThemeContext} from "../context-demo/App-2/theme-context";

interface IProps {
    changeTheme:any
}

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};




function App6() {

    const [theme,setTheme] = useState(themes.light);

    const changeTheme = ()=>{
        if(theme===themes.light){
            setTheme(themes.dark)
        }else{
            setTheme(themes.light)
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            <Toolbar changeTheme={changeTheme} />
        </ThemeContext.Provider>
    )
}

function Toolbar(props:IProps) {
    return (
        <div>
            <ThemedButton changeTheme={props.changeTheme}  />
        </div>
    );
}




function ThemedButton(props:IProps) {
    const theme = useContext(ThemeContext);
    return (
        <button onClick={props.changeTheme}  style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}

export default App6;