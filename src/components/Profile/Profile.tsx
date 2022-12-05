import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/profile-reducer";
import s from './Profile.module.css'

type ProfileType = {
    isOwner: boolean
    profile: ProfilePageType | null
    status: string
    updateUserStatus:(newStatus:string)=>void
    savePhoto: (file: File)=>void
    saveProfile: (formData: Partial<ProfilePageType>)=>Promise<void>
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.profileBlock}>
            <ProfileInfo
                isOwner={props.isOwner}
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
}