import React, {useRef} from "react";


const App7 = () => {

    const inputEl = useRef(null);
    const onClick = () => {
        // @ts-ignore
        inputEl.current.focus();

    };

    return (
        <>
            <input ref={inputEl} type='text' />
            <button onClick={onClick}>focus</button>
        </>
    )

};

export default App7;

