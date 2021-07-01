import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {ActionsType} from "./auth-reducer";

//Types Profile
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website:string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts:ContactsType
    photos: PhotosType
}
export type ProfilePageType = {
    newPostText: string;
    postsData: Array<PostType>
    profile: any
    status: string
}
export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (files: File) => void
    saveProfile: (profile: ProfileType) => void
}
export type ProfileDataFormPropsType = {
    initialValues: ProfileType
    onSubmit: (formData: ProfileType) => void
    profile: ProfileType
}
export type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    onEditMode: () => void
}
export type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

//Types Dialogs
export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}

//Types Get Users
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    small: string | undefined
    large: string | undefined
}
export type UpdateStatusResponseType = {
    resultCode: number
    message: string
    data: {}
}
export type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

//Types Follow and UnFollow
export type FollowUserResponseType = {
    resultCode: number
    message: string
    data: {}
}
export type UnfollowUserResponseType = {
    resultCode: number
    message: string
    data: {}
}

//Types Login
export type LoginResponseType = {
    resultCode: number
    messages: string
    data: {}
}
export type LoginPropsType = {
    isAuth: boolean
    captchaUrl: string | null
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

//Types Users
export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}
export type UserProps = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    user: UsersType
}
export type UsersPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<number>
    currentPage: any
}

//Types Thunks
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>
export type UsersAuthDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

//Types App
export type AppPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
    initialized: boolean
}