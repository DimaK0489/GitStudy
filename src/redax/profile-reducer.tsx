import {v1} from "uuid";
import {renderTree} from "../index";
import {ActionsType, PostType, ProfilePageType, RootStateType} from "./store";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

export const addPostAC = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
}
export const newTextChangeAC = (newText: string) => {
    return {type: CHANGE_NEW_TEXT, newText: newText} as const
}

let initialsState = {
    messageForNewPost: "it-incubator",
    posts: [
        {id: v1(), message: "How are you", likesCount: 8},
        {id: v1(), message: "It is my first post", likesCount: 6},
        {id: v1(), message: "Hello", likesCount: 12},
    ],
}

export const profileReducer = (state = initialsState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            renderTree()
    }
    switch (action.type) {
        case "CHANGE-NEW-TEXT":
            state.messageForNewPost = action.newText
            renderTree()
    }
    return state
}