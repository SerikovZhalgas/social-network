import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/redux-store";
import {
    getUserProfile,
    getUserStatus,
    ProfilePageType,
    savePhoto,
    saveProfile,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";

class ProfileContainer extends React.Component<any> {

    refreshProfile(){
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

    componentDidMount(): void {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    status={this.props.status}
                    profile={this.props.profile}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
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
        {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer)