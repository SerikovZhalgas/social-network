import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/redux-store";
import {getUserProfile, ProfilePageType} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component<any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='login'/>

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

type MapStatePropsType = {
    profile:ProfilePageType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

export type UsersPageType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile:state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {getUserProfile})
(WithUrlDataContainerComponent);