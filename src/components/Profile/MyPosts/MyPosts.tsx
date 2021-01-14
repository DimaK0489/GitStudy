import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../index";


type  MyPostsPropsType = {
    posts: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
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
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;