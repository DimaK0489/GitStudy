import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {store} from "./redux/store";
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/News';
import {Store} from "redux";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HederContainer";


export type AppPropsType = {
    store: Store
}

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar friends={store.getState().sidebar.friends}/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/profile/:userId?"} render={() => <ProfileContainer />}/>
                <Route path={"/users"} render={() => <UsersContainer />}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
