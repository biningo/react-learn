function ActionClick() {
    function handleClick(e) {
        e.preventDefault();  //阻止默认行为 
        alert("你点击了我");
    }

    return (
        <a href="http://www.baidu.com" onClick={handleClick}>baidu</a>
    )
}



//按钮事件 以及状态改变

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Flag: true };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
       
        
        this.setState(s => ({
            Flag: !s.Flag
        }));
    }

    //匿名函数不需要绑定this
    handleClick2  = ()=>{
        alert("click2"+this.state.Flag);
    }


    //传递参数 事件对象e要放最后 隐式传递最后一个传入
    handleClick3(name,e){
        console.log(e);
        console.log(name);
    }

    render() {
        return (
            <div>
                <p>
            <button onClick={this.handleClick}>
                {this.state.Flag ? 'ON' : 'OFF'}
            </button>
            </p>
            <p>
            <button onClick={this.handleClick2}>click2</button>
            </p>
            <p>
                <button onClick={(e)=>{console.log(e)}} >click3</button>
            </p>
            <p>
                <button onClick={(e)=>this.handleClick3("biningo",e)}>click4</button>
            </p>
            <p>
               
                <button onClick={this.handleClick3.bind(this,"nb")}>click5</button>
            </p>
            
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        <ActionClick></ActionClick>
        <Toggle></Toggle>
    </div>,
    document.getElementById("root")
)