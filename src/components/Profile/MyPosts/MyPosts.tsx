import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PropsType} from "../../../Redux/store";

type MyPostsType = {
    posts: PropsType[]
    newPostText:string
    updateNewPostText: (newText:string)=>void
    addMyPost:()=>void
}

const MyPosts = (props: MyPostsType) => {
    let PostsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addMyPost = () => {
        props.addMyPost()
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        const text = e.currentTarget.value
        //props.updateNewPostText(e.currentTarget.value)
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
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