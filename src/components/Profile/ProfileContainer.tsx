import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/redux-store";
import {getUserProfile, getUserStatus, ProfilePageType, updateUserStatus} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";

class ProfileContainer extends React.Component<any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    status={this.props.status}
                    profile={this.props.profile}
                    updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    }
}

type MapStatePropsType = {
    profile: ProfilePageType | null
    status: string
    authorizedUserId: null | number
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (newStatus: string) => void
}

export type ProfileContainerPageType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)