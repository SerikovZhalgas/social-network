const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type InitialStateType = {
    users: UserType[]
}

export type UserType = {
    id: string
    photoUrl: string
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
    users: [  ]
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
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users: users} as const)

export default usersReducer