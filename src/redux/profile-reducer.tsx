import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

export const addPostAC = () => ({type: ADD_POST} as const)
export const newTextChangeAC = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText} as const)
export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeAC>

export let initialsState = {
    messageForNewPost: "",
    posts: [
        {id: v1(), message: "How are you", likesCount: 8},
        {id: v1(), message: "It is my first post", likesCount: 6},
        {id: v1(), message: "Hello", likesCount: 12},
    ],
}
export type InitialStateType = typeof initialsState

export const profileReducer = (state: InitialStateType = initialsState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: state.messageForNewPost, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: " "
            }
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                messageForNewPost: action.newText
            }
        default:
            return state
    }
}