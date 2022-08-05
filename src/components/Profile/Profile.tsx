import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";
import {ReduxStoreType} from "../../Redux/redux-store";

type ProfileType = {
    store:ReduxStoreType
    //state: ProfilePageType
    //addPost:()=>void
    ///updateNewPostText: (newText:string)=> void
    //dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
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