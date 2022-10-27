import {connect} from "react-redux";
import {InitialStateType} from "../../Redux/sidebar-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Navbar from "./Navbar";

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