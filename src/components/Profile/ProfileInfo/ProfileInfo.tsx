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

const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img className={s.img} src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt='wow'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    );
}
export default ProfileInfo;