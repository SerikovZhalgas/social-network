import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import Post, {PropsType} from "./Post/Post";

type MyPostsType = {
    posts: PropsType[]
    addPost: (value:string)=> void
}

const MyPosts = (props:MyPostsType) => {

    let PostsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const [value, setValue] = useState('')

    let newPostElement = (event:ChangeEvent<HTMLTextAreaElement>) =>{
        setValue(event.currentTarget.value)
    }

    let addMyPost = ()=> {
        props.addPost(value)
        setValue('')
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={value} onChange={newPostElement}/>
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