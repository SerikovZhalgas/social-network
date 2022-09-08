import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/anonymous-user-flat-icon-vector-18958259.png'
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom'

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

const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span
                    key={index}
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                >{p}</span>
            })}
        </div>
        {
            props.users.map(u => {
                return <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                             alt={''}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unFollow(u.id)
                                  }}>
                            Unfollow
                        </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>
                            Follow
                        </button>
                    }
                </div>
            </span>
                    <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
                    <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
                </div>
            })
        }
    </div>

}

export default Users