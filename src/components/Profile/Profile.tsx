import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/profile-reducer";

type ProfileType = {
    isOwner: boolean
    profile: ProfilePageType | null
    status: string
    updateUserStatus:(newStatus:string)=>void
    savePhoto: (file: File)=>void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;