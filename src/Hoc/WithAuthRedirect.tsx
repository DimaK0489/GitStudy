import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: ReduxStateType): mapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}