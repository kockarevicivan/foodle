import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import {Route, Redirect} from "react-router-dom"
import {authUser} from "../../store/AuthStore/actions"

 class GuestRoute extends Component {

componentDidMount() {
    setTimeout(() => {
        this.props.authenticate();
        console.log(this.props.isAuth);
        
    }, 1000);
}

    render() {
   
        const {component, path, isAuth} = this.props;
        
        if (isAuth) {
            return <Redirect to="/"/> 
        }
        return <Route path={path} component={component}></Route>
    }
}

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    isAuth: PropTypes.bool.isRequired,
    authenticate: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    
    return {
        isAuth: state.auth.isAuth
        // foo: state.foo.isFoo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authUser("Marko"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestRoute)