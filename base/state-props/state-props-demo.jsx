

class C1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {name:this.props.name} //props不允许修改 
        this.changeP = this.changeP.bind(this)
    
    }

    changeP(){
        console.log(this.props);
        console.log(this.state);
        //不要直接修改state setState可能是异步的
        //要使用上一次的state可以传入函数 如果直接传入对象不保证是上一次的
        //箭头函数可以有2个入参  (state,props)=>{}  state=>{}
        this.setState(s=>({   
            name:"changeP" //不会覆盖原来的  如果有属性则覆盖， 没有的属性则添加 不会替换
        }))
    }

    render(){
        return (
            <div>
                <button onClick={this.changeP}>changeP</button>
                {this.state.name}
               
            </div>
        )
    }

}







ReactDOM.render(
    <div>   
        <C1 name='bingo'></C1>
    </div>,
    document.getElementById("root")
)