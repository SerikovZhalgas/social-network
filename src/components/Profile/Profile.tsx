import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/state";

type ProfileType = {
    state: ProfilePageType
    addPost:()=>void
    updateNewPostText: (newText:string)=> void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={addPost} message={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}
export default Profile;