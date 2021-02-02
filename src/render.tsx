import {addMessage, addPost, changeNewMessage, changeNewText, RootStateType} from "./redax/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(<BrowserRouter><App state={state}
                                        addPost={addPost}
                                        changeNewText={changeNewText}
                                        addMessage={addMessage}
                                        changeNewMessage={changeNewMessage}

    />
    </BrowserRouter>, document.getElementById('root'));
}