import React, {ComponentType} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Friends from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStoreType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends React.Component<AppType> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path={'/friends'} render={() => <Friends/>}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}
                    />
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}
                    />
                    <Route path={'/login'}
                           render={() => <Login/>}
                    />

                </div>
            </div>
        );
    }
}
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: ()=>void
}

const mapStateToProps = (state: AppStoreType):MapStateToPropsType  => {
  return {
      initialized: state.app.initialized
  }
}

export type AppType = MapDispatchPropsType & MapStateToPropsType

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
