import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/state";

type ProfileType = {
    state: ProfilePageType
    addPost:(value:string)=>void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={addPost}/>
        </div>
    );
}
export default Profile;