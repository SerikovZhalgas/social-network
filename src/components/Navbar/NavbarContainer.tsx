import {connect} from "react-redux";
import {InitialStateType} from "../../Redux/sidebar-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import Navbar from "./Navbar";

type MapStatePropsType = {
    sidebar: InitialStateType
}

export type SidebarPropsType = MapStatePropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps,{})(Navbar)

export default NavbarContainer;