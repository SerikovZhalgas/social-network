import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from '../../Redux/auth-reducer'
import {AppStoreType} from "../../Redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerType> {
    render(): React.ReactNode {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
    }
}

type MapStateToProps = {
    isAuth: boolean
    login: null | string
}

type MapDispatchPropsType = {
    logout: ()=>void
}

export type HeaderContainerType = MapStateToProps & MapDispatchPropsType

const mapStateToProps = (state: AppStoreType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);
