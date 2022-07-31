import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, StoreType} from "./Redux/state";
import Friends from "./components/Navbar/Friends/Friends";

type AppPropsType = {
    store: StoreType
    dispatch:(action:ActionsTypes)=>void
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state}/>
            <div className="app-wrapper-conent">
                <Route path={'/friends'} render={() => <Friends/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           state={state.messagePage}
                           dispatch={props.dispatch}
                       />}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           state={state.profilePage}
                           dispatch={props.dispatch}
                           //addPost={props.store.addPost.bind(props.store)}
                           //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                       />}/>
            </div>
        </div>
    );
}

export default App;