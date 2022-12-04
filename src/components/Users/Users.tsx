import React from "react";
import {UserType} from "../../Redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followingInProgress: Array<string>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    isFetching: boolean
}

export const Users = ({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   users,
                   ...props
               }: UsersType) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                   totalItemsCount={totalUsersCount} portionSize={10} isFetching={props.isFetching}/>
        {users.map(u => <User user={u}
                              followingInProgress={props.followingInProgress}
                              follow={props.follow}
                              unFollow={props.unFollow}
                              isFetching={props.isFetching}/>)}
    </div>
}