import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    //store:ReduxStoreType
    //state: ProfilePageType
    //addPost:()=>void
    ///updateNewPostText: (newText:string)=> void
    //dispatch: (action: ActionsTypes) => void
}

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                /*store={props.store}*/
                //posts={props.state.posts}
                //dispatch={props.dispatch}
                //addPost={props.addPost}
                //newPostText={props.state.newPostText}
                //updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}
export default Profile;