import React, {ComponentType} from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
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
                    <Switch>
                        <Route exact path={'/'}
                               render={()=><Redirect to={'/profile'}/>}/>
                        <Route path={'/friends'}
                               render={withSuspense(FriendsContainer)}/>
                        <Route path={'/dialogs'}
                               render={withSuspense(DialogsContainer)}/>
                        <Route path={'/profile/:userId?'}
                               render={withSuspense(ProfileContainer)}/>
                        <Route path={'/users'}
                               render={withSuspense(()=><UsersContainer/>)}/>
                        <Route path={'/login'}
                               render={withSuspense(()=><Login/>)}/>

                        <Route path={'*'}
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
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
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}