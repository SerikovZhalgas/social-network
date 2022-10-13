import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow,
    UserType
} from "../../Redux/users-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers,
    getUsersTotalCount
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props
        requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {setCurrentPage, pageSize, requestUsers} = this.props
        requestUsers(pageNumber, pageSize)
        setCurrentPage(pageNumber)
    }

    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </>
    }
}

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}
type MapDispatchPropsType = {
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export type UsersPageType = MapStatePropsType & MapDispatchPropsType
let mapStateToProps = (state: AppStoreType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,
        {
            setCurrentPage, toggleIsFollowingProgress, requestUsers, follow, unFollow
        })
)(UsersContainer)