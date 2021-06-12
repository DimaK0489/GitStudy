import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const DELETE_POST = "DELETE_POST"

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>

export let initialsState = {
    postsData: [
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
            return {...state,postsData: [...state.postsData, newPost],}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state,status: action.status,}
        case "DELETE_POST":
            return {...state,postsData: state.postsData.filter(p => p.id !== action.postId)}
        default:
            return state
    }
}

//action
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfileAC = (profile: null) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)

//Thunk
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data));

}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data));
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}