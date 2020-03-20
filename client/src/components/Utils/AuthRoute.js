import React from 'react'
import {Route, Redirect} from "react-router-dom"

function AuthRoute({path, component}) {
    let isAuth = true;
    if (isAuth) {
        return <Route path={path} component={component}></Route> 
    } 

    return <Redirect to='/'></Redirect>
    
}

export default AuthRoute
