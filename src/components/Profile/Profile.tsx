import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redax/state";

type ProfilePostType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
}

function Profile(props: ProfilePostType) {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;