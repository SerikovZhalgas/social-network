import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/redux-store";
import {ProfilePageType, setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {usersAPI} from "../../Api/api";

class ProfileContainer extends React.Component<any, any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        usersAPI.getProfileInfo(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

type MapStatePropsType = {
    profile:ProfilePageType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfilePageType) => void
}

export type UsersPageType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        profile:state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {setUserProfile})
(WithUrlDataContainerComponent);