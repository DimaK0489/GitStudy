import React from 'react';
import './App.css';
import Header from "./components/Header/Heder";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogType, MessageType, PostType, RootStateType} from "./redax/state";

type AppPostType = {
    state: RootStateType
    // post: Array<PostType>
    // dialogs: Array<DialogType>
    // messages:Array<MessageType>
}

function App(props:AppPostType) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           dialogs={props.state.dialogsPage.dialogs}
                           messages={props.state.dialogsPage.messages}/>} />
                <Route path={"/profile"}
                       render={() => <Profile
                           posts={props.state.profilePage.posts}/>} />
                {/*<Route path={"/news"} render={() => <News />} />*/}
                {/*<Route path={"/music"} render={() => <Music />} />*/}
                {/*<Route path={"/settings"} render={() => <Settings />} />*/}
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
