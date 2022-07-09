import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addPost, StateProps} from "./Redux/state";
import Friends from "./components/Navbar/Friends/Friends";

type AppPropsType = {
    state: StateProps
    addPost:(value:string)=>void
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-conent">
                <Route path={'/friends'} render={() => <Friends/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.messagePage}/>}/>
                <Route path={'/profile'} render={() => <Profile state={props.state.profilePage} addPost={addPost}/>}/>
            </div>
        </div>
    );
}

export default App;