import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm } from "redux-form";
import { ProfileType } from "../../../redux/profile-reducer";

export type  MyPostsPropsType = {
    postsDate: ProfileType
    newPostText?: string
    addPost: (newPostText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let state = props.postsDate
    const postsElements = state.postsDate.map((post) =>
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;

const AddNewPostForm: React.FC<InjectedFormProps<MyPostsPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}/>
                {/*<textarea onChange={newTextChange} value={props.message}/>*/}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<MyPostsPropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)


