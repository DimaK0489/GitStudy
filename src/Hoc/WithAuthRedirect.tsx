import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppStateType} from "../redux/redux-store";

type MapStateRedirectType = {
    isAuth: boolean
}

const mapStateRedirect = (state: AppStateType): MapStateRedirectType => ({
    isAuth: state.auth.isAuth
} as MapStateRedirectType)

export function withAuthRedirect<T>(Components: React.ComponentType<T>) {

    const RedirectComponent: React.FC<MapStateRedirectType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Components {...restProps as T}/>
    }

    const ConnectAuthRedirectComponent = connect(mapStateRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
}