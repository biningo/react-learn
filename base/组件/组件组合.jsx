
class Left extends React.Component {
    render(){
        return (
            <p>Left</p>
        )
    }
}

class Right extends React.Component {
    render(){
        return (
            <p>Right</p>
        )
    }
}

class Center extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="left">
                    {this.props.right}
                </div>
                Center
                <div className="right">
                    {this.props.left}
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        <Center
            left = {<Left></Left>}
            right = {<Right></Right>}
        ></Center>
    </div>,
    document.getElementById("root")
)