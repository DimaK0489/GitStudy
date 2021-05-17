import React from "react";
import Header from "./Heder";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../redux/auth-reducer";
import {ReduxStateType} from "../../redux/redux-store";

type AuthPropsType = MapDispatchPropsType & MapStatePropsType
export type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}
export  type MapDispatchPropsType = {
    getAuthUserData:()=>void
    logout:()=>void
}
class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props.state} />
    }
}

const mapStateToProps = (state: ReduxStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);