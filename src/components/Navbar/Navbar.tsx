import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.PROFILE} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.DIALOGS} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.USERS} activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.NEWS} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.MUSIC} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.SETTINGS} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.FRIENDS} activeClassName={s.activeLink}>Friends</NavLink>
            </div>
        </nav>
    );
}