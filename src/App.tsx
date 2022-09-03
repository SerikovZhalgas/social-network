import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Friends from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer />
            <div className="app-wrapper-conent">
                <Route path={'/friends'} render={() => <Friends/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}
                />
                <Route path={'/users'}
                       render={() => <UsersContainer/>}
                />
            </div>
        </div>
    );
}

export default App;