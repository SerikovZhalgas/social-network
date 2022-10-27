import React, {ComponentType} from 'react';
import './App.css';
import {HashRouter, Route, withRouter} from "react-router-dom";
import Friends from "./components/Navbar/Friends/Friends";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
//import Login from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import store, {AppStoreType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hok/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'))

const Login = React.lazy(()=> import('./components/Login/LoginPage'))

class App extends React.Component<AppType> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path={'/friends'} render={() => <Friends/>}/>
                    <Route path={'/dialogs'}
                           render={withSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'}
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={'/users'}
                           render={withSuspense(UsersContainer)}/>
                    <Route path={'/login'}
                           render={withSuspense(Login)}/>
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