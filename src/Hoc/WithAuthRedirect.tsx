import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReduxStateType} from "../redux/redux-store";

type MapStateRedirectType = {
    isAuth: boolean
}
type DispatchStateType = {}
const mapStateRedirect = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth
} as MapStateRedirectType)

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapStateRedirectType & DispatchStateType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapStateRedirectType, DispatchStateType, WCP, ReduxStateType>(mapStateRedirect, {})(RedirectComponent)

    return ConnectedAuthRedirectComponent
}