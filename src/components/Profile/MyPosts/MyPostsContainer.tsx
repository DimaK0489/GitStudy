import React from "react";
import {addPostAC, newTextChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {store} from "../../../redux/store";

type  MyPostsContainerPropsType = {
    store: Store
}

/*function MyPostsContainer(props: MyPostsContainerPropsType) {

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const newTextChange = (text: string) => {
        props.store.dispatch(newTextChangeAC(text))
    }

    return (
        <MyPosts
        addPost={addPost}
        newTextChange={newTextChange}
        message={props.store.getState().profilePage.messageForNewPost}
        posts={props.store.getState().profilePage.posts}
    />);
}*/

const mapStateToProps = () => {
    return {
        posts: store.getState().profilePage.messageForNewPost ,
        message: store.getState().profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        newTextChange: (text: string) => {dispatch(newTextChangeAC(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;