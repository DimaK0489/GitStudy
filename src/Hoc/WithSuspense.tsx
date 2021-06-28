import {ReduxStateType} from "../redux/redux-store";
import React, {ComponentType} from "react";
import { Preloader } from "../components/common/preloader/preloder";
import { Suspense } from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStatePropsForRedirectType = {
    isAuth: boolean
};

let mapStateToPropsForRedirect = (state: ReduxStateType): MapStatePropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function withSuspense <T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
    const RedirectComponent = (props: MapStatePropsForRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }
    const ConnectRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectRedirectComponent
}