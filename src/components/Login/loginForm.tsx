import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormsControls";
import {FormDataType, Login} from "./login";
import {connect} from "react-redux";
import { login } from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[require]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[require]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)
const mapStateToProps = (state:ReduxStateType) =>  ({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps,{login}) (Login)