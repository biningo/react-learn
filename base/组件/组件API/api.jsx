// 设置状态：setState
// 替换状态：replaceState
// 设置属性：setProps
// 替换属性：replaceProps
// 强制更新：forceUpdate
// 获取DOM节点：findDOMNode
// 判断组件挂载状态：isMounted

//计数器组件

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {clickCount:0}
        this.addCount = this.addCount.bind(this)
        this.subCount = this.subCount.bind(this)
    }


    addCount(){
        this.setState(s=>({
            clickCount:s.clickCount+=1
        }))
    }
    subCount(){
        this.setState(s=>({
            clickCount:s.clickCount-=1
        }))
    }

    render(){
        return (
            <div>
            <h1>{this.state.clickCount}</h1>
            <button onClick={this.subCount}>-1</button>
            <button onClick={this.addCount}>+1</button>
            </div>
        )
    }

}


class TestState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            age:18
        }
        this.addName = this.addName.bind(this)
    }

    addName(){
        this.setState(s=>({ //不会覆盖原来的值
            name:"biningo"
         }))
    }

    
    render(){
        return (
            <div>
            <div>{this.state.age}</div>
            <p>
            {this.state.name?this.state.name:"NoneName"}
            </p>
            <button onClick={this.addName} >addName</button>
            </div>
        )
    }

}



ReactDOM.render(
    <div>
        <Counter></Counter>
        <TestState></TestState>
    </div>,
    document.getElementById("root")
)