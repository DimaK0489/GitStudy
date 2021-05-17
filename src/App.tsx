import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import {store} from "./redux/store";
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/News';
import {compose, Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HederContainer";
import UsersContainer from './components/Users/UsersContainer';
import {LoginPage} from './components/Login/loginPage';
import {login, logOut} from "./redux/auth-reducer";
import {connect, ConnectedProps} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "./redux/profile-reducer";
import {withAuthRedirect} from "./Hoc/WithAuthRedirect";
import {initializeApp} from "./redux/app-reducer";
import {ReduxStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/preloder";


export type AppPropsType = ConnectedProps<typeof connector>;
type MapStateToProps = {
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar friends={store.getState().sidebar.friends}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/loginI"} render={() => <LoginPage login={login} isAuth={false}/>}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: ReduxStateType): MapStateToProps => ({
    initialized: state.app.initialized
})
const connector = connect(mapStateToProps, {initializeApp})

export default compose<React.ComponentType>(
    withRouter,
    connector,
    connect(null, {initializeApp})) (App);

