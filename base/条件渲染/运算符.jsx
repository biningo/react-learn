//&& 在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。
// 因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
//如果render返回 null 则不会进行渲染

function MailBox(props){
    let message = props.message
    return (
        <div>
            <h1>Hello</h1>
            {message.length>0 &&
                <h2>您有{message.length}条消息</h2>
            }            
        </div>
    );
}



//三目运算符
class Btn extends React.Component{
    constructor(props){
        super(props)
        this.state = {flag:true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        
        this.setState(s=>({
            flag:!s.flag
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.flag?"开启":"关闭"}</button>
            </div>
        );
    }



}


ReactDOM.render(
    <div>
    <MailBox message={["a","b","c","d"]}></MailBox>
    <Btn></Btn>
    </div>,
    document.getElementById("root")
)