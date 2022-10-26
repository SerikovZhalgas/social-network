import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfilePageType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from './../../../assets/images/anonymous-user-flat-icon-vector-18958259.png'

type ProfileInfoType = {
    isOwner: boolean
    profile: ProfilePageType | null
    status: string
    updateUserStatus: (newStatus:string)=>void
    savePhoto: (file: File)=>void
}

const ProfileInfo = ({isOwner, profile, status, updateUserStatus, savePhoto}:ProfileInfoType) => {
    if(!profile){
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="ava" className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                <ProfileStatus
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    );
}
export default ProfileInfo;