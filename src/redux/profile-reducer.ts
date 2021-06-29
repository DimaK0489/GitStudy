import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {PhotosType, ProfilePageType, ProfileType} from "./Types";
import {ReduxStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccess>

let initialState: ProfilePageType = {
    postsData: [
        {id: v1(), message: "How are you", likesCount: 8},
        {id: v1(), message: "It is my first post", likesCount: 6},
        {id: v1(), message: "Hello", likesCount: 12},
    ],
    profile: null,
    status: " "
}

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            return {...state, postsData: [...state.postsData, newPost]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status,}
        case "DELETE_POST":
            return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
        case "SAVE_PHOTO_SUCCESS": {
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}

//action
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfileAC = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

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
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (formData: ProfileType) =>
    async (dispatch: ThunkDispatch<ReduxStateType, unknown, any>, getState: () => ReduxStateType) => {
        const userId = getState().auth.id
        const response = await profileAPI.saveProfile(formData)
        if (response.data.resultCode === 0) {
            if (userId !== null) {
                await dispatch(getUserProfile(userId))
            }
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('edit-profile', {_error: message}))
            return Promise.reject(message)
        }
    }

