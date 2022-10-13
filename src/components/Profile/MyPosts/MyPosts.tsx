import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePagePropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props: ProfilePagePropsType) => {
    console.log('MyPostsRendered')
    const state = props.profilePage

    let PostsElements = state.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addNewPostText = (formData: FormDataType) => {
        props.addMyPost(formData.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostTextRedux onSubmit={addNewPostText}/>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
})

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostText"
                    validate={[required, maxLength10]}
                    placeholder="Post message"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostTextRedux = reduxForm<FormDataType>({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;