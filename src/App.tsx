import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Switch, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {compose} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HederContainer";
import UsersContainer from './components/Users/UsersContainer';
import {connect, ConnectedProps} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloder";
import Login from "./components/Login/loginPage";

class App extends React.Component<TProps, MapStateType>{
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path="*" render={() => <div>404 Not Found</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state: AppStateType): MapStateType => {
    return {initialized: state.app.initialized}
}

const connector = connect(MapStateToProps, {initializeApp})

export default compose<React.ComponentType>(
    connect(MapStateToProps, {initializeApp}),
    withRouter,
    connector
)(App)

// types
type TProps = ConnectedProps<typeof connector>
type MapStateType = { initialized: boolean }

