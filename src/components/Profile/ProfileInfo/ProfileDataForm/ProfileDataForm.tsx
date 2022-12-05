import React from "react";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfilePageType} from "../../../../Redux/profile-reducer";
import s from './ProfileDataForm.module.css'

export type PropsType = {
    profile: ProfilePageType
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfilePageType, PropsType> & PropsType> = ({
                                                                                                         handleSubmit,
                                                                                                         profile,
                                                                                                         error
                                                                                                     }) => {
    return <form onSubmit={handleSubmit} className={s.profileDataFormBlock}>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b> {createField('Full name', "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b>{createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional
                skills:</b> {createField('My professional skills', "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me:</b> {createField('About me', "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map((e, i) => {
            return <div key={i} className={s.contact}>
                <b>{e}: </b> {createField(e, "contacts." + e, [], Input)}
            </div>
        })}
        </div>
        <div className={s.saveButtonBlock}>
            <button className={s.saveButton}>
                <b>Save</b>
            </button>
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm<ProfilePageType, PropsType>({form: 'edit-profile'})(ProfileDataForm)