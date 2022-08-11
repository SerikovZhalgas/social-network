import {v1} from "uuid";
import {ActionsTypes, PropsType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type InitialStateType = {
    posts: PropsType[]
    newPostText: string
}

let initialState:InitialStateType = {
    posts: [
        {id: v1(), message: 'Hi', likesCount: 0},
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Ya?', likesCount: 120201001},
        {id: v1(), message: 'What?!', likesCount: -1}
    ],
    newPostText: ''
}

const profileReducer = (state:InitialStateType=initialState,action:ProfileReducerAC):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText:'',
                posts:[...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,newPostText:action.newText }
        }
        default:
            return state
    }
}
type ProfileReducerAC = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text:string) =>
    ({type: UPDATE_NEW_POST_TEXT,newText:text} as const)

export default profileReducer