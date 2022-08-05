import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store, {AppStoreType} from "./Redux/redux-store";
import {EmptyObject} from "redux";


let rerenderEntireTree = (state: EmptyObject & AppStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
        rerenderEntireTree(state)
    }
)
