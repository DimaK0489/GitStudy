import React from 'react';
import './App.css';
import Header from "./components/Header/Heder";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {addMessage, addPost, DialogType, MessageType, PostType, RootStateType} from "./redax/state";

type AppPostType = {
    state: RootStateType
    addPost: (postText: string) => void
    addMessage: (postText: string) => void
}

function App(props: AppPostType) {
    debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={"/dialogs"}
                       render={() => <Dialogs
                           dialogs={props.state.dialogsPage.dialogs}
                           messages={props.state.dialogsPage.messages}
                           addMessage={addMessage}
                           />}/>
                <Route path={"/profile"}
                       render={() => <Profile posts={props.state.profilePage.posts}
                                              addPost={addPost}/>}
                />


                {/* <Route path={"/news"} render={() => <News />} />
                <Route path={"/music"} render={() => <Music />} />
                <Route path={"/settings"} render={() => <Settings />} />
                <Route render={ () => {props.state}}/>*/}
            </div>
        </div>
    );
}

export default App;
