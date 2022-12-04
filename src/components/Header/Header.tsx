import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import touch from '../../assets/images/Touch.png';
import {PATH} from "../../App";

type HeaderType = {
    login: string | null
    isAuth: boolean
    logout: ()=> void
}

export const Header = ({login, isAuth, logout}: HeaderType) => {
    return (
        <header className={`${s.header} ${s.down}`}>
            <img
                src={touch}
                alt='socialNetworkAvatar'
                className={s.logo}
            />

            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} |<button onClick={logout} className={s.logOut}>Log out</button></div>
                    : <NavLink to={PATH.LOGIN}>Login</NavLink>
                }
            </div>
        </header>
    );
};