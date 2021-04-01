import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../redux/redux-store";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: ReduxStateType) => ({
    //profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if(!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}