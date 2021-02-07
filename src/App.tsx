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


type AppPostType = {
    store: StoreType
    state: RootStateType
    addPost: (postText: string) => void
    changeNewText: (newText: string) => void
    addMessage: (messageText: string) => void
    changeNewMessage: (newText: string) => void
}

function App(props: AppPostType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           dialogs={props.state.dialogsPage.dialogs}
                           messages={props.state.dialogsPage.messages}
                           dialogsPage={props.state.dialogsPage.newMessages}
                           addMessage={props.store.addMessage.bind(props.store)}
                           changeNewMessage={props.store.changeNewMessage.bind(props.store)}
                       />}/>
                <Route path={"/profile"}
                       render={() => <Profile
                           posts={props.state.profilePage.posts}
                           message={props.state.profilePage.messageForNewPost}
                           addPost={props.store.addPost.bind(props.store)}
                           changeNewText={props.store.changeNewText.bind(props.store)}
                       />}/>
                <Route path={"/news"} render={() => <News />} />
                <Route path={"/music"} render={() => <Music />} />
                <Route path={"/settings"} render={() => <Settings />} />


                {/* <Route path={"/news"} render={() => <News />} />
                <Route path={"/music"} render={() => <Music />} />
                <Route path={"/settings"} render={() => <Settings />} />
                <Route render={ () => {props.state}}/>*/}
            </div>
        </div>
    );
}

export default App;
