import React from 'react';
import './index.css';
import store, {ReduxStateType} from "./redux/redux-store"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


export const renderTree = (state: ReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
renderTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})




