import React from 'react'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/auth-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import style from "../common/formControls/FormsControls.module.css"
import {required} from "../../utils/validators";
import {ReduxStateType} from "../../redux/redux-store";
import { Input } from '../common/formControls/FormsControls'

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>>
    = ({
           handleSubmit,
           error
       }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'password'} placeholder={'password'} name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} value={'rememberMe'} name={'rememberMe'} component={Input}/>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({form: 'login'})(LoginForm)

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginPage: React.FC = () => {
    const isAuth = useSelector((state: ReduxStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
    )
}