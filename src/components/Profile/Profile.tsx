import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePostType = {
    post: Array<PostType>
}

function Profile(props: ProfilePostType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.post}/>
        </div>
    )
}

export default Profile;