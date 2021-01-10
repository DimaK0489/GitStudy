import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    let postData = [
        {id: 1, message: "How are you", likesCount: 8},
        {id: 2, message: "It is my first post", likesCount: 10}
    ];
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Delete post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>

    );
}

export default MyPosts;