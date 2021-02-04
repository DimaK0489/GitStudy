import React from 'react';
import './index.css';
import {store} from "./redax/state"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const renderTree = () => {
    ReactDOM.render(<BrowserRouter><App store={store}
                                        state={store._state}
                                        addPost={store.addPost.bind(store)}
                                        changeNewText={store.changeNewText.bind(store)}
                                        addMessage={store.addMessage.bind(store)}
                                        changeNewMessage={store.changeNewMessage.bind(store)}
    />
    </BrowserRouter>, document.getElementById('root'));
}
renderTree();
store.subscribe(renderTree)



