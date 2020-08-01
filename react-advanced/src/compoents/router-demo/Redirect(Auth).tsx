import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const PublicPage = () => {
    return <h1>Public Page</h1>
};

const ProtectedPage = () => {
    return <h1>ProtectedPage</h1>
};





interface IProps {
    isLogin:boolean,
    changeLogin:any
}

// @ts-ignore
const PrivateRoute = ({children,isLogin, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                isLogin ? children : (
                    <Redirect to={{pathname: '/login', state: {from: location}}}/>)}/>)
};

const LoginPage = (props:{changeLogin:any}) => {
    let history = useHistory();
    let location = useLocation();

    const changeLogin = props.changeLogin;

    let {from}: any = location.state || {from: {pathname: '/'}};

    let login = () => {
        changeLogin(true);
        history.replace(from) //回到原来的页面
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    )


};


const AuthButton = (props:IProps)=>{
  let history = useHistory();
  const isLogin = props.isLogin;
  const changeLogin = props.changeLogin;
  return isLogin?(
      <div>
      <p>Welcome!</p>
          <button onClick={()=>{
              changeLogin(false);
              history.push("/")
          }} >SigOut</button>
      </div>
  ):(
      <p>You are not logged in.</p>
  )
};

const AuthExample = () => {
    const [isLogin,setisLogin] = useState(false);
    return (
        <div>

            <Router>
                <AuthButton isLogin={isLogin} changeLogin={setisLogin} />
                <ul>
                    <li>
                        <Link to={'/public'}>Public Page</Link>
                    </li>
                    <li>
                        <Link to={'/protected'}>Protected Page</Link>
                    </li>
                </ul>


                <Switch>

                    <Route path={'/public'}>
                        <PublicPage/>
                    </Route>


                    <Route path={'/login'}>
                        <LoginPage  changeLogin={setisLogin} />
                    </Route>


                    <PrivateRoute isLogin={isLogin}  path={'/protected'}>
                        <ProtectedPage  />
                    </PrivateRoute>

                </Switch>


            </Router>

        </div>
    )

};

export default AuthExample;