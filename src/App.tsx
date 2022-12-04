import React, {ComponentType} from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import store, {AppStoreType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hok/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const FriendsContainer = React.lazy(() => import('./components/Navbar/Friends/Friends'))
const Login = React.lazy(() => import('./components/Login/LoginPage'))

export const PATH = {
    PROFILE: '/profile',
    FRIENDS: '/friends',
    DIALOGS: '/dialogs',
    USERS: '/users',
    LOGIN: '/login',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
}

class App extends React.Component<AppType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        return (
            <div>
                {!this.props.initialized && <div className='preloader'><Preloader/></div>}
                <div className={`app-wrapper ${!this.props.initialized && 'disable'}`}>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path={'/'}
                                   render={() => <Redirect to={PATH.PROFILE}/>}/>
                            <Route path={PATH.FRIENDS}
                                   render={withSuspense(FriendsContainer)}/>
                            <Route path={PATH.DIALOGS}
                                   render={withSuspense(DialogsContainer)}/>
                            <Route path={`${PATH.PROFILE}/:userId?`}
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path={PATH.USERS}
                                   render={withSuspense(() => <UsersContainer/>)}/>
                            <Route path={PATH.LOGIN}
                                   render={withSuspense(() => <Login/>)}/>

                            <Route path={'*'}
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export type AppType = MapDispatchPropsType & MapStateToPropsType

let AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const SamuraiJSApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}