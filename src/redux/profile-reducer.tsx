import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

export type ActionsType =
    | ReturnType<typeof addPostAC>
    //| ReturnType<typeof newTextChangeAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export let initialsState = {
    postsDate: [
        {id: v1(), message: "How are you", likesCount: 8},
        {id: v1(), message: "It is my first post", likesCount: 6},
        {id: v1(), message: "Hello", likesCount: 12},
    ],
    profile: null,
    userId: 0,
    status: " "
}
export type ProfileType = typeof initialsState

export const profileReducer = (state: ProfileType = initialsState, action: ActionsType): ProfileType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            return {
                ...state,
                postsDate: [...state.postsDate, newPost],
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}
export const addPostAC = (newPostText:string) => ({type: ADD_POST, newPostText} as const)
//export const newTextChangeAC = (newText: string) => ({type: CHANGE_NEW_TEXT, newText: newText} as const)
export const setUserProfileAC = (profile: null) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data));
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusAC(status));
        }
    })
}