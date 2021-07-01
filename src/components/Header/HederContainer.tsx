import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {logOut} from "../../redux/auth-reducer";

// types
type TProps = ConnectedProps<typeof connector>

class HeaderContainer extends React.Component<TProps, AppStateType> {

    render() {
        const {isAuth, login, logOut} = this.props

        return (
            <Header
                isAuth={isAuth}
                login={login}
                logOut={logOut}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

const connector = connect(mapStateToProps, {logOut})
export default connector(HeaderContainer)

