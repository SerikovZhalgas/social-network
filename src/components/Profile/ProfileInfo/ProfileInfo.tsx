import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    );
}
export default ProfileInfo;