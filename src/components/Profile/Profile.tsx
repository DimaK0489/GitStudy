import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redax/state";
import {access} from "fs";

type ProfilePostType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    message: string
    changeNewText:(newText: string) => void
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePostType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     message={props.message}
                     dispatch={props.dispatch}
                     addPost={props.addPost}
                     changeNewText={props.changeNewText}
            />
        </div>
    )
}

export default Profile;