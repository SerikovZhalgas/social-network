import {v1} from "uuid";
import users from "../components/Users/Users";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type InitialStateType = {
    users: UserType[]
}

type UserType = {
    id: string
    followed: boolean
    fullname: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

let initialState: InitialStateType = {
    users: [
        {
            id: v1(),
            followed: false,
            fullname: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: true,
            fullname: 'Zhalgas',
            status: 'I am a boss too',
            location: {city: 'Nur-sultan', country: 'Kazakhstan'}
        },
        {
            id: v1(),
            followed: false,
            fullname: 'Akon',
            status: 'I am not a boss',
            location: {city: 'New-York', country: 'USA'}
        },
    ]
}

const usersReducer = (state: InitialStateType = initialState, action: UsersReducerAC): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
type UsersReducerAC = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
export const followAC = (userId: string) => ({type: FOLLOW, userId: userId} as const)
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: InitialStateType) => ({type: SET_USERS, users: users} as const)

export default usersReducer