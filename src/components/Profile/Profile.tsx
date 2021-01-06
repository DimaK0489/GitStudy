import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div className={s.content}>
                <img src="https://www.onetwotrip.com/ru/blog/wp-content/uploads/2017/08/rocks.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;