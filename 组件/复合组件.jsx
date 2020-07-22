

function Name(props) {
    return (
        <h1>Name:{props.data}</h1>
    )
}

function Url(props) {
    return (
        <h1>Url:{props.data}</h1>
    )
}

function App() {
    return (
        <div>
            <Name data="biningo"></Name>
            <Url data="www.biningo.cn"></Url>
        </div>
    )
}

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
)