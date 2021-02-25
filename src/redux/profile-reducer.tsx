import {v1} from "uuid";
import {renderTree} from "../index";
import {PostType, ProfilePageType} from "./store";
import {addMessageAC, onMessageChangeAC} from "./dialogs-reducer";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

export const addPostAC = () => ({type: ADD_POST} as const)
export const newTextChangeAC = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText} as const)
export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeAC>

export let initialsState = {
    messageForNewPost: "it-incubator",
    posts: [
        {id: v1(), message: "How are you", likesCount: 8},
        {id: v1(), message: "It is my first post", likesCount: 6},
        {id: v1(), message: "Hello", likesCount: 12},
    ],
}
type InitialStateType = typeof initialsState

export const profileReducer = (state: InitialStateType = initialsState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPost = ''

            return state
        case "CHANGE-NEW-TEXT":
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }
}