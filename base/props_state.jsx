
// state可变  props不可变

class Hello extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
}

//设置默认值  如果没有给值的话
Hello.defaultProps = {
    name: 'Biningo'
}



class WebSite extends React.Component {

    constructor(props) { //props不可以更改，state可以更改
        super(props);
        
        this.state = {
            name: "Baidu",
            site: "http://www.baidu.com"
        }
    }

    render() {
        return (
            <div>
                <Name name={this.state.name}></Name>
                <Site site={this.state.site}></Site>
            </div>
        )
    }

}

function Name(props) {
    return (
        <h1>{props.name}</h1>
    )
}

function Site(props) {
    return (
        <a href={props.site}>{props.site}</a>
    )
}





ReactDOM.render(
    <WebSite></WebSite>,
    document.getElementById("root")
)