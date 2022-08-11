import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App dispatch={store.dispatch.bind(store)} store={store}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

