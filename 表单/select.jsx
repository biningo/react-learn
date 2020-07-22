class Hobby extends React.Component{
    constructor(props){
        super(props)
        this.state = {hobby:"running"}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            hobby:e.target.value
        })
    }

    handleSubmit(event){
        alert('Your favorite flavor is: ' + this.state.hobby);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                选择您最喜欢的运动
                <select value={this.state.hobby} onChange={this.handleChange}>
                    <option value="backetball">basketball</option>
                    <option value="football">football</option>
                    <option value="swimming">swimming</option>
                    <option value="running">running</option>
                </select>
                </label>
                <input type="submit" value="提交" />
                </form>
            </div>
        );
    }

}


ReactDOM.render(

    <div>
        <Hobby></Hobby>
    </div>,
    document.getElementById("root")
)