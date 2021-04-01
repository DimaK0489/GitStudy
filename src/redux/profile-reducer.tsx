import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export const addPostAC = () => ({type: ADD_POST} as const)
export const newTextChangeAC = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText} as const)
export const setUserProfile = (profile: null) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: number) =>(dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeAC>
    | ReturnType<typeof setUserProfile>

export let initialsState = {
    messageForNewPost: "",
    posts: [
        {id: v1(), message: "How are you", likesCount: 8},
        {id: v1(), message: "It is my first post", likesCount: 6},
        {id: v1(), message: "Hello", likesCount: 12},
    ],
    profile: null,
    userId: 0  
}
export type ProfileType = typeof initialsState

export const profileReducer = (state: ProfileType = initialsState, action: ActionsType): ProfileType => {
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
        case "SET_USER_PROFILE":
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}