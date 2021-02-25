import React from "react";
import {addPostAC, newTextChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";

type  MyPostsContainerPropsType = {
    store: Store
}

function MyPostsContainer(props: MyPostsContainerPropsType) {
    // let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const newTextChange = (text: string) => {
        props.store.dispatch(newTextChangeAC(text))
    }

    return (<MyPosts
        addPost={addPost}
        newTextChange={newTextChange}
        message={props.store.getState().profilePage.messageForNewPost}
        posts={props.store.getState().profilePage.posts}
    />);
}

export default MyPostsContainer;