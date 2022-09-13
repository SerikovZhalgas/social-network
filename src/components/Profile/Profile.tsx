import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/profile-reducer";

type ProfileType = {
    profile: ProfilePageType | null
    status: string
    updateUserStatus:(newStatus:string)=>void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;