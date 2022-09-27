import {AppActionType, AppThunk} from "./redux-store";
import {authAPI} from "../Api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}
export type AuthActionsType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const)

export const getAuthUserData = ()
    : AppThunk => {
    return (dispatch) => {
        authAPI.me().then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean)
    : AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else{
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const logout = ()
    : AppThunk => {
    return (dispatch) => {
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer