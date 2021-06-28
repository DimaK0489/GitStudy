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


export type AppPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
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
                <HeaderContainer getAuthUserData={this.props.getAuthUserData}/>
                <Navbar />
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/loginIn"} render={() => <LoginPage/> }/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: ReduxStateType) => ({initialized: state.app.initialized})

export default compose<React.ComponentType>(withRouter,connect(mapStateToProps, {initializeApp})) (App);

