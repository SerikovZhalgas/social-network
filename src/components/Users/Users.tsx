import React from "react";
import {UserType} from "../../Redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followingInProgress: Array<string>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

const Users = ({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   users,
                   ...props
               }: UsersType) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                   totalUsersCount={totalUsersCount}/>
        {users.map(u => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unFollow={props.unFollow}/>)}
    </div>
}

export default Users