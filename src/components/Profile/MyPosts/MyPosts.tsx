import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/formControls/FormsControls";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(post =>
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addNewPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<MyPostsPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       component={Textarea}
                       placeholder={"Post Message"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<MyPostsPropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

