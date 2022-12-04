import {v1} from "uuid";
import {PropsType} from "./store";
import {AppActionType, AppStoreType} from "./redux-store";
import {profileAPI, usersAPI} from "../Api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export type InitialStateType = {
    posts: PropsType[]
    profile: ProfilePageType | null
    status: string
}

export type ProfilePageType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}

export const postId1 = v1()
export const postId2 = v1()
export const postId3 = v1()
export const postId4 = v1()

let initialState: InitialStateType = {
    posts: [
        {id: postId1, message: 'Hi', likesCount: 0},
        {id: postId2, message: 'How are you?', likesCount: 23},
        {id: postId3, message: 'Ya?', likesCount: 120201001},
        {id: postId4, message: 'What?!', likesCount: -1}
    ],
    profile: null as ProfilePageType | null,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PropsType = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        }
        case SAVE_PHOTO_SUCCESS:{
            return {...state, profile: {...state.profile, photos: action.photos} as ProfilePageType}
        }
        default:
            return state
    }
}
export type ProfileReducerAC = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

type ThunkType = ThunkAction<void, AppStoreType, unknown, AppActionType>;
type ThunkDispatchUsers = ThunkDispatch<AppStoreType, unknown, AppActionType>;

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfilePageType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusProfile = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const deletePost = (postId: string) => ({type: DELETE_POST, id: postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let response = await usersAPI.getProfileInfo(userId)
    dispatch(setUserProfile(response))
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data))
}

export const updateUserStatus = (newStatus: string): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    try {
        let response = await profileAPI.updateStatus(newStatus)

        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(newStatus))
        }
    }catch (e) {
        //
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch: ThunkDispatchUsers) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfilePageType): ThunkType => async (dispatch: ThunkDispatchUsers, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        if(userId !== null){
            dispatch(getUserProfile(userId))
        }else{
            throw new Error('userId can not be null')
        }

    }else{
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer