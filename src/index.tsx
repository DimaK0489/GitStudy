import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, changeNewMessage, changeNewText, state, subscribe} from "./redax/state"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const renderTree = () => {
    ReactDOM.render(<BrowserRouter><App state={state}
                                        addPost={addPost}
                                        changeNewText={changeNewText}
                                        addMessage={addMessage}
                                        changeNewMessage={changeNewMessage}
    />
    </BrowserRouter>, document.getElementById('root'));
}
renderTree();
subscribe(renderTree)



