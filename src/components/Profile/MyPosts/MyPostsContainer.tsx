import React from "react";
import {addPostAC, newTextChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {PostType, store} from "../../../redux/store";
import {ReduxStateType} from "../../../redux/redux-store";

type MSTPType = {
    posts: Array<PostType>
    message: string
}

type MDTPType = {
    newTextChange: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: ReduxStateType): MSTPType => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        addPost: () => {dispatch(addPostAC())},
        newTextChange: (text: string) => {dispatch(newTextChangeAC(text))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;