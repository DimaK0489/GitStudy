import React from "react";
import {addPostAC, newTextChangeAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";

// type MSTPType = {
//     posts: Array<PostType>
//     message: string
// }
//
// type MDTPType = {
//     newTextChange: (text: string) => void
//     addPost: () => void
// }

const mapStateToProps = (state: ReduxStateType) => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.messageForNewPost
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