import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/anonymous-user-flat-icon-vector-18958259.png'
import {NavLink} from 'react-router-dom'
import {UserType} from "../../Redux/users-reducer";

type UserComponentType = {
    user: UserType
    followingInProgress: Array<string>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    isFetching: boolean
}

export const User = ({user, followingInProgress, unFollow, follow, isFetching}: UserComponentType) => {

    return <div className={`${isFetching && styles.disable}`}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}
                             alt={''}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollow(user.id)
                                  }}>
                            Unfollow
                        </button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow
                        </button>
                    }
                </div>
            </span>
        <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
    </div>
}