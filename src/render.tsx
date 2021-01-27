import {addMessage, addPost, changeNewText, RootStateType} from "./redax/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(<BrowserRouter><App state={state}
                                        addPost={addPost}
                                        addMessage={addMessage}
                                        changeNewText={changeNewText}
    />
    </BrowserRouter>, document.getElementById('root'));
}