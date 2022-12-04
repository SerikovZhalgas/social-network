import React, {ChangeEvent, useRef, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfilePageType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

import userPhoto from './../../../assets/images/anonymous-user-flat-icon-vector-18958259.png'
import {ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    isOwner: boolean
    profile: ProfilePageType | null
    status: string
    updateUserStatus: (newStatus: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: Partial<ProfilePageType>) => Promise<void>
}

export const ProfileInfo = ({isOwner, profile, status, updateUserStatus, savePhoto, saveProfile}: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    if (!profile) {
        return <div className={s.preloader}><Preloader/></div>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfilePageType) => {
        saveProfile(formData).then(() => {
            setEditMode(!editMode)
        })
    }
    const selectPhotoHandler = () => {
        inputRef && inputRef.current?.click()
    }

    return (
        <div className={`${!profile && s.disable} ${editMode ? s.descriptionBlockEdit : s.descriptionBlockRead}`}>
            {editMode
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <div className={s.descriptionBlock}>
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(!editMode)}/>
                    <div className={s.photoBlock}>
                        <img src={profile.photos.large || userPhoto} alt="ava" className={s.mainPhoto}/>
                        {isOwner && <div>
                            <button onClick={selectPhotoHandler} className={s.uploadPhoto}>upload file</button>
                            <input style={{display: 'none'}}
                                   ref={inputRef}
                                   type={'file'}
                                   onChange={mainPhotoSelected}
                            />
                        </div>}

                        <ProfileStatus
                            status={status}
                            updateUserStatus={updateUserStatus}
                        />
                    </div>
                </div>}
        </div>
    );
}

type ProfileDataType = {
    profile: ProfilePageType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataType) => {
    return <div className={s.profileDataBlock}>
        <div className={s.fullNameBlock}>
            <b>{profile.fullName}</b>
            {isOwner &&
                <button onClick={goToEditMode} className={s.editButton}>
                    <b>Edit</b>
                </button>
            }
        </div>
        <div>
            {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map((e, i) => {
            return <Contact key={i} contactTitle={e}
                            contactValue={profile.contacts[e as keyof typeof profile.contacts]}/>
        })}
        </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactType) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}