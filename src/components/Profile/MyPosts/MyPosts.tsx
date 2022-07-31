import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PropsType} from "../../../Redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

type MyPostsType = {
    posts: PropsType[]
    //addPost: () => void
    message:string
    //updateNewPostText: (newText:string)=>void
    dispatch:(action:ActionsTypes)=>void
}



const MyPosts = (props: MyPostsType) => {

    let PostsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addMyPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        const text = e.currentTarget.value
        //props.updateNewPostText(e.currentTarget.value)
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addMyPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
}
export default MyPosts;