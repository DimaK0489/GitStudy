import React from 'react';
import './index.css';
import store from "./redax/redax-store"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const renderTree = () => {
    ReactDOM.render(<BrowserRouter><App store={store} state={store.getState()}/>
    </BrowserRouter>, document.getElementById('root'));
}
renderTree();
store.subscribe(renderTree)



