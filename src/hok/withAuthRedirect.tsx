import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStoreType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStoreType): MapStatePropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props:MapStatePropsForRedirectType) => {
        let {isAuth, ...restProps} = props
            if (!isAuth) return <Redirect to='login'/>
            return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}