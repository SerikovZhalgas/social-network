import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {AppStoreType} from "../../Redux/redux-store";

type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (userId:string)=>void
    unFollow: (userId:string)=> void
    setUsers: (users:UserType[])=>void
}
export type UsersPageType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId:string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)