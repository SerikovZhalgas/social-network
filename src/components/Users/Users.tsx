import React from "react";
import {UsersPageType} from "./UsersContainer";
import styles from './users.module.css'
import {v1} from "uuid";

let Users = (props: UsersPageType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://static.dw.com/image/60922713_303.jpg',
                followed: false,
                fullname: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'https://static.dw.com/image/60922713_303.jpg',
                followed: true,
                fullname: 'Zhalgas',
                status: 'I am a boss too',
                location: {city: 'Nur-sultan', country: 'Kazakhstan'}
            },
            {
                id: v1(),
                photoUrl: 'https://static.dw.com/image/60922713_303.jpg',
                followed: false,
                fullname: 'Akon',
                status: 'I am not a boss',
                location: {city: 'New-York', country: 'USA'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} alt={''}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <div>{u.fullname}</div>
                <div>{u.status}</div>
            </span>
                <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
            </div>)
        }
    </div>
}

export default Users