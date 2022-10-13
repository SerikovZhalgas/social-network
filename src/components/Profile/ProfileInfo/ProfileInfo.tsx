import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePageType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: ProfilePageType | null
    status: string
    updateUserStatus: (newStatus:string)=>void
}

const ProfileInfo = ({profile, status, updateUserStatus}:ProfileInfoType) => {
    if(!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="ava"/>
                <ProfileStatus
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    );
}
export default ProfileInfo;