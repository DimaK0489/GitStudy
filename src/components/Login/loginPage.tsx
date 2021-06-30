import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../common/formControls/FormsControls.module.css"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {createField, Input} from "../common/formControls/FormsControls";
import {required} from "../../utils/validators";
import {ReduxStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";

type LoginPropsType = {
    isAuth: boolean
    captchaUrl: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const LoginForm: FC<InjectedFormProps<FormDataType, LoginReduxFormPropsType> & LoginReduxFormPropsType> = React.memo((props) => {
    const {handleSubmit, error, captchaUrl} = props
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt={""}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <button>Login</button>
        </form>
    )
})

const LoginReduxForm = reduxForm<FormDataType, LoginReduxFormPropsType>({form: 'login'})(LoginForm)
type LoginReduxFormPropsType = {
    captchaUrl: string | null
}
const Login: FC<LoginPropsType> = React.memo((props) => {
    const {login, isAuth, captchaUrl} = props

    const onSubmit = (formData: FormDataType) => login(formData.email, formData.password, formData.rememberMe, formData.captcha)

    if (isAuth) {
        return (
            <Redirect to={'/profile'}/>
        )
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </>
    )
})

const mapStateToProps = (state: ReduxStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);