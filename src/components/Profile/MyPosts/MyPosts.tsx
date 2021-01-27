import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redax/state";


type  MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText:string) => void
}

function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map((post) =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount} />)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if(newPostElement.current)
        props.addPost(newPostElement.current.value);
        }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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