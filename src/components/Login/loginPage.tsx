import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import LoginReduxForm from "./loginForm";

type LoginType = MapDispatchPropsType & MapStatePropsType
export type MapStatePropsType = {
    isAuth:boolean
}
export  type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginPage = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
})
const connector = connect(mapStateToProps, {login})
export default connector(LoginPage)

