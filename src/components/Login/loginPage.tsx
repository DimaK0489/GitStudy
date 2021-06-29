import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../common/formControls/FormsControls.module.css"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {createField, Input} from "../common/formControls/FormsControls";
import {required} from "../../utils/validators";
import {ReduxStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type:"password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    debugger

    if (props.isAuth) <Redirect to={"/profile"}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);