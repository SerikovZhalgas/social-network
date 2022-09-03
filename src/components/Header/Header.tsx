import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: string | null
    isAuth: boolean
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img
                src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                alt='socialNetworkAvatar'
            />

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
