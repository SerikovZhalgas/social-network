import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/redux-store";
import {Navbar} from "./Navbar";
import {UserType} from "../../Redux/users-reducer";

type MapStatePropsType = {
    users: UserType[]
}

export type SidebarPropsType = MapStatePropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

export const NavbarContainer = connect(mapStateToProps,{})(Navbar)