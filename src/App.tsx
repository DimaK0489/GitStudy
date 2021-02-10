import React from 'react';
import './App.css';
import Header from "./components/Header/Heder";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType,DialogType,MessageType,PostType,RootStateType,store} from "./redax/state";
import { News } from './components/News/News';
import { Music } from './components/Music/News';
import { Settings } from './components/Settings/News';


type AppPropsType = {
    store: StoreType
    state: RootStateType
    // addPost: (postText: string) => void
    // changeNewText: (newText: string) => void
    // addMessage: (messageText: string) => void
    // changeNewMessage: (newText: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           dialogs={props.state.dialogsPage.dialogs}
                           messages={props.state.dialogsPage.messages}
                           dialogsPage={props.state.dialogsPage.newMessages}
                           dispatch ={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route path={"/profile"}
                       render={() => <Profile
                           posts={props.state.profilePage.posts}
                           message={props.state.profilePage.messageForNewPost}
                           dispatch ={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route path={"/news"} render={() => <News />} />
                <Route path={"/music"} render={() => <Music />} />
                <Route path={"/settings"} render={() => <Settings />} />

            </div>
        </div>
    );
}

export default App;
