import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redax/store";
import {access} from "fs";

type ProfilePostType = {
    posts: Array<PostType>
    message: string
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePostType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     message={props.message}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;