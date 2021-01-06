import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="How are you?" likesCount= {23} />
                <Post message="It is my first post" likesCount= {12}/>
            </div>
        </div>

    );
}

export default MyPosts;