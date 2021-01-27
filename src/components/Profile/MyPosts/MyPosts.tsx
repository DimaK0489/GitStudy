import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType, RootStateType} from "../../../redax/state";


type  MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    message: string
    changeNewText: (newText: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map((post) =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        props.addPost(props.message);
    }
    const newTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChange} value={props.message}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;