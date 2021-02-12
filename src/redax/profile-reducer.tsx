import {v1} from "uuid";
import {renderTree} from "../index";
import {ActionsType, PostType, RootStateType} from "./state";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

export const addPostAC = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
}
export const newTextChangeAC = (newText: string) => {
    return {type: CHANGE_NEW_TEXT, newText: newText} as const
}
export const profileReducer = (state: RootStateType, action: ActionsType) => {
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: v1(),
            message: action.postText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost)
        renderTree()
    } else if (action.type === "CHANGE-NEW-TEXT") {
        state.profilePage.messageForNewPost = action.newText;
        renderTree()
    }
    return state
}