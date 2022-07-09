import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post, {PropsType} from "./Post/Post";

type MyPostsType = {
    posts: PropsType[]
    addPost: () => void
    message:string
    updateNewPostText: (newText:string)=>void
}

const MyPosts = (props: MyPostsType) => {

    let PostsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addMyPost = () => {
        props.addPost()
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
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