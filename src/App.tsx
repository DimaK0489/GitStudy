import React from 'react';
import './App.css';
import Header from "./components/Header/Heder";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType, DialogType, MessageType, PostType, RootStateType, store} from "./redux/store";
import {News} from './components/News/News';
import {Music} from './components/Music/News';
import {Settings} from './components/Settings/News';
import {ReduxStateType} from './redux/redux-store';
import {Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {
    store: Store
}

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={store.getState().sidebar.friends}/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"}
                       render={() => <DialogsContainer />}/>
                <Route path={"/profile"}
                       render={() => <Profile  />}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
