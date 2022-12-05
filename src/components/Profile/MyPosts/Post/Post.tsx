import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
    photo?: string
}

export const Post = (props: PostType) => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <img src={props.photo} alt='avatar' className={s.img}/>
                {props.message}
            </div>
            <div className={s.likes}>
                <span>❤ </span>{props.likesCount}
            </div>
        </div>
    );
}