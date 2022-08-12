import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Friends from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


/*type AppPropsType = {
    //store: ReduxStoreType
    //dispatch:(action:ActionsTypes)=>void
}*/

const App = () => {

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
                       render={() => <Profile/>}
                />
                <Route path={'/users'}
                       render={() => <UsersContainer/>}
                />
            </div>
        </div>
    );
}

export default App;