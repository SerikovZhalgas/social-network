import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/redux-store";
import {ProfilePageType, setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component<any, any>{

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data)
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