import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {PostType} from "../../../redux/store";

type MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {posts: state.profilePage.postsData}

}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {dispatch(addPostAC(newPostText))}
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

