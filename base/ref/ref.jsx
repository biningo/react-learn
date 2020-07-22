class MyComponent extends React.Component{

    constructor(props){
        super(props)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleValue = this.handleValue.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            username:""
        }
    }

    handleFocus(){
        this.refs.name.focus();
    }
    
    handleValue(){
        alert(this.refs.name.value)
    }


    handleChange(e){
        var target = e.target;
        this.setState({
            [target.name]:target.value
        })
    }

    render() {
        return (
            <div>
                <input name="username" value={this.state.username} ref="name" onChange={this.handleChange}></input>
                <button onClick={this.handleFocus} >获取焦点</button>
                <button onClick={this.handleValue}>获取value</button>
            </div>
        );
    }


}

ReactDOM.render(

    <div>
    <MyComponent></MyComponent>
    </div>,
    document.getElementById("root")
)