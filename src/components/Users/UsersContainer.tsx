import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {AppStoreType} from "../../Redux/redux-store";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId:string)=>void
    unFollow: (userId:string)=> void
    setUsers: (users:UserType[])=>void
    setCurrentPage: (currentPage: number)=>void
    setTotalUsersCount: (totalUsersCount: number)=>void
}
export type UsersPageType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)