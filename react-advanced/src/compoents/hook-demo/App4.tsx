import React, {useEffect, useState} from "react";

export default function App4() {
    const [count,setCount] = useState(0);

    //// 相当于 componentDidMount 和 componentDidUpdate:
    //当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数
    //我们可以传递一个空数组作为useEffect的第二个参数，这样就能避免在组件更新执行useEffect，只会在组件mount时执行。

    useEffect(()=>{
        document.title = `You clicked ${count} 次`;
        return ()=>{
            console.log("销毁了")
        }
    },[count]); //不加上第二个数组参数 则每次更新都会调用销毁函数 ，加上参数之后代表 count改变时才会销毁


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} >Add Count</button>
        </div>
    )
}