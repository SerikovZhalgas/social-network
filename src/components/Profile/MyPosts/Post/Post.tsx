import React from "react";
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://www.vokrug.tv/pic/product/6/a/0/b/6a0bbf9e1e4b3c4564c562f91c6d43ec.jpeg"/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </div>

    );
}
export default Post;