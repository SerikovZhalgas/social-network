import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {ReduxStoreType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";

type MyPostsType = {
    store: ReduxStoreType
    //posts: PropsType[]
    //addPost: () => void
    //newPostText: string
    //updateNewPostText: (newText:string)=>void
    //dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState()

    const addMyPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText)
        props.store.dispatch(action)
    }

    return (<MyPosts
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        updateNewPostText={onPostChange}
        addMyPost={addMyPost}
    />);
}
export default MyPostsContainer;