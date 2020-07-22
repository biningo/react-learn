class HelloInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {msg:"请输入"}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            msg:e.target.value
        })
    }

    render(){
        var value = this.state.msg
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} /> 
                <h4>{value}</h4>
            </div>
        )
    }

}



class Content extends React.Component {
    render() {
      return  <div>
              <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
              <h4>{this.props.myDataProp}</h4>
              </div>;
    }
  }
  class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    render() {
      var value = this.state.value;
      return <div>
              <Content myDataProp = {value} 
                updateStateProp = {this.handleChange}></Content>
             </div>;
    }
  }
 


ReactDOM.render(
    <div>
    <HelloInput />
    <HelloMessage></HelloMessage>
    </div>,
    document.getElementById('root')
  );