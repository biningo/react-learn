class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    //元素挂载上去的钩子函数
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //元素销毁的钩子函数
    componentWillUnmount() {
        clearInterval(this.timeID);
    }


    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (

            <div>
                <h1>Hello</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>

        )

    }

}


ReactDOM.render(
    <Clock></Clock>,
    document.getElementById("root")
)

