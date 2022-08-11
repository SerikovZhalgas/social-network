import React from "react";
import {connect} from "react-redux";
import {InitialStateType} from "../../Redux/sidebar-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Navbar from "./Navbar";

/*const Navbar = () => {

    let friendsElements = props.sidebar.friends.map(f => <img src={f.avatar} className={s.friendImg} alt='Avatar'/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.itemFriends}>
                <NavLink to='/friends' activeClassName={s.activeLink}>
                    <div className={s.friendTitle}>Friends</div>
                    <div className={s.friendItem}>{friendsElements}</div>
                </NavLink>
            </div>
        </nav>
    );
}*/
type MapStatePropsType = {
    sidebar: InitialStateType
}
type MapDispatchPropsType = {

}
export type  SidebarPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {}
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default NavbarContainer;