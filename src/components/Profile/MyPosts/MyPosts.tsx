import React from "react";
import s from './MyPosts.module.css'
import Post, {PropsType} from "./Post/Post";

type MyPostsType = {
    posts: PropsType[]
}

const MyPosts = (props:MyPostsType) => {

    let PostsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>wow</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
}
export default MyPosts;