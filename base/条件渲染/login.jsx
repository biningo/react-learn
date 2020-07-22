function Login(){
    return (
        <h1>欢迎回来</h1>
    )
}

function Logout(){
    return (
        <h1>已注销</h1>
    )
}


function Greeting(props){
    const isLogin = props.isLogin
    if (isLogin){
        return <Login></Login>
    }else{
        return <Logout></Logout>
    }
}



class LoginController extends React.Component{

    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {isLogin:false}
    }

    handleLogin(){
        this.setState({isLogin:true})
    }
    handleLogout(){
        this.setState({isLogin:false})
    }

    render() {
        let isLogin = this.state.isLogin
        let button = null
        if(isLogin){
            button = <button onClick={this.handleLogout}>退出</button>
        }else{
            button = <button onClick={this.handleLogin}>登入</button>
        }

        return (
            <div>
                <Greeting isLogin={isLogin}></Greeting>
                {button}
            </div>
        );
    }
    
}



ReactDOM.render(
    <LoginController></LoginController>,
    document.getElementById("root")
)





