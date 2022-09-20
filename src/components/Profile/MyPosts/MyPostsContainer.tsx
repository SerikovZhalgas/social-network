import {addPostActionCreator} from "../../../Redux/profile-reducer";
import {AppStoreType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {InitialStateType} from "../../../Redux/profile-reducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: InitialStateType
}
type MapDispatchPropsType = {
    addMyPost: (newPostText: string)=>void
}
export type  ProfilePagePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch:Dispatch): MapDispatchPropsType => {
    return {
        addMyPost: (newPostText: string)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;