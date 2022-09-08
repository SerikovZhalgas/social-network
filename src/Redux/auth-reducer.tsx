import {AppActionType, AppStoreType} from "./redux-store";
import {authAPI} from "../Api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export type AuthActionsType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const)

type ThunkType = ThunkAction<void, AppStoreType, unknown, AppActionType>;
type ThunkDispatchUsers = ThunkDispatch<AppStoreType, unknown, AppActionType>;

export const getAuthUserData = ()
    : ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

export default authReducer