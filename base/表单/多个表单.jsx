class ManyForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:"username",
            man:false,
            woman:true
        }
        this.handleMsg = this.handleMsg.bind(this)
    }


    handleMsg(e){
        var target = e.target
        const value = target.type=='checkbox'?target.checked:target.value
        console.log(target.name,value);
        
        this.setState({
            [target.name]:value
        })
    }


    render(){
        return (
            <div>
            <form>
                <input name="msg" type="text" value={this.state.msg} onChange={this.handleMsg} ></input>    
                女：<input name="woman" type="checkbox" checked={this.state.woman} onChange={this.handleMsg}></input>
                男：<input name="man" type="checkbox" checked={this.state.man} onChange={this.handleMsg} ></input>
                <input type="submit"></input>
            </form>
            <p>{this.state.man.toString()}</p>
            <p>{this.state.woman.toString()}</p>
            <p>{this.state.msg}</p>
        </div>
        )
    }

}

ReactDOM.render(
    <ManyForm />,
    document.getElementById('root')
  );