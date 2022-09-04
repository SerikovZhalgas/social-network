import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from '../../Redux/auth-reducer'
import {AppStoreType} from "../../Redux/redux-store";
import {usersAPI} from "../../Api/api";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount(): void {
        usersAPI.getAuthMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render(): React.ReactNode {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

type MapStateToProps = {
    isAuth: boolean
    login: null | string
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string)=>void
}

export type HeaderContainerType = MapStateToProps & MapDispatchPropsType

const mapStateToProps = (state: AppStoreType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
