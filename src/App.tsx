import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActionsTypes} from "./Redux/store";
import Friends from "./components/Navbar/Friends/Friends";
import {ReduxStoreType} from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";


type AppPropsType = {
    store: ReduxStoreType
    dispatch:(action:ActionsTypes)=>void
}

const App = (props: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer />
            <div className="app-wrapper-conent">
                <Route path={'/friends'} render={() => <Friends/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer
                           /*store={props.store}*/
                           //state={props.state.messagePage}
                           //dispatch={props.dispatch}
                       />}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           store={props.store}
                           //state={props.state.profilePage}
                           //dispatch={props.dispatch}
                           //addPost={props.store.addPost.bind(props.store)}
                           //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                       />}/>
            </div>
        </div>
    );
}

export default App;