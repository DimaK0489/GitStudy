import React from "react";
import Header from "./Heder";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateType} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserData();
        /*authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });*/
    }
    render() {
        return <Header {...this.props.state} />
    }
}

const mapStateToProps = (state: InitialStateType) => ({
    isAuth: state.isAuth,
    login: state.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);