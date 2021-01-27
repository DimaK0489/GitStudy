import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewText, PostType, RootStateType} from "../../redax/state";

type ProfilePostType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    message: string
    changeNewText:(newText: string) => void
}

function Profile(props: ProfilePostType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     message={props.message}
                     addPost={props.addPost}
                     changeNewText={changeNewText}
            />
        </div>
    )
}

export default Profile;