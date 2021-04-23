import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: ReduxStateType) => {
    return {
        postsDate: state.profilePage.postsDate,
        //newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText:string) => {dispatch(addPostAC(newPostText))},
        //newTextChange: (text: string) => {dispatch(newTextChangeAC(text))}
    }
}

// @ts-ignore
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;