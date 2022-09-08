import {v1} from "uuid";
import {PropsType} from "./store";
import {AppActionType, AppStoreType} from "./redux-store";
import {usersAPI} from "../Api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type InitialStateType = {
    posts: PropsType[]
    newPostText: string
    profile: ProfilePageType | null
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

let initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi', likesCount: 0},
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Ya?', likesCount: 120201001},
        {id: v1(), message: 'What?!', likesCount: -1}
    ],
    newPostText: '',
    profile: null
}
/*{
    aboutMe: '',
        contacts: {
    facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: ''
},
    lookingForAJob: false,
        lookingForAJobDescription: '',
    fullName: '',
    userId: 1,
    photos: {
    small: '',
        large: ''
}
}*/

const profileReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export type ProfileReducerAC = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

type ThunkType = ThunkAction<void, AppStoreType, unknown, AppActionType>;
type ThunkDispatchUsers = ThunkDispatch<AppStoreType, unknown, AppActionType>;

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: ProfilePageType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number)
    : ThunkType => {
    return (dispatch: ThunkDispatchUsers) => {
        usersAPI.getProfileInfo(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer