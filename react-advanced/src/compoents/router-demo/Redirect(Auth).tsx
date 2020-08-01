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

interface IAuth {
    isAuthenticated:boolean
}



interface IProps {
    fakeAuth:IAuth
}

// @ts-ignore
const PrivateRoute = ({children,fakeAuth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                fakeAuth.isAuthenticated ? children : (
                    <Redirect to={{pathname: '/login', state: {from: location}}}/>)}/>)
};

const LoginPage = (props:IProps) => {
    let history = useHistory();
    let location = useLocation();


    let {from}: any = location.state || {from: {pathname: '/'}};

    let login = () => {
        props.fakeAuth.isAuthenticated=true;
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
  const [fakeAuth,setfakeAuth] =useState(props.fakeAuth);

  return fakeAuth.isAuthenticated?(
      <div>
      <p>Welcome!</p>
          <button onClick={()=>{
              setfakeAuth({isAuthenticated:false});
              history.push("/")
          }} >SigOut</button>
      </div>
  ):(
      <p>You are not logged in.</p>
  )
};

const AuthExample = () => {
    const fakeAuth:IAuth = {
        isAuthenticated:false
    };
    return (
        <div>

            <Router>
                <AuthButton fakeAuth={fakeAuth} />
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
                        <LoginPage fakeAuth={fakeAuth} />
                    </Route>


                    <PrivateRoute fakeAuth={fakeAuth}  path={'/protected'}>
                        <ProtectedPage  />
                    </PrivateRoute>

                </Switch>


            </Router>

        </div>
    )

};

export default AuthExample;