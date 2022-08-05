import {v1} from "uuid";
import {ActionsTypes, ProfilePageType, PropsType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: v1(), message: 'Hi', likesCount: 0},
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Ya?', likesCount: 120201001},
        {id: v1(), message: 'What?!', likesCount: -1}
    ],
    newPostText: ''
}

const profileReducer = (state:ProfilePageType=initialState,action:ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text:string) =>
    ({type: UPDATE_NEW_POST_TEXT,newText:text} as const)

export default profileReducer