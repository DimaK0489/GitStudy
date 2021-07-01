import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {Dispatch} from "redux";
import {ThunkDispatchType, ThunkType, UsersAuthDataType} from "./Types";
import {ThunkDispatch} from "redux-thunk";

export type ActionsType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>

export const initialState: UsersAuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action: ActionsType): UsersAuthDataType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA":
        case "SECURITY/GET_CAPTCHA_SUCCESS":
            return {...state, ...action.payload}
        default:
            return state
    }
}
//actionCreator
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "AUTH/SET_USER_DATA", payload: {userId, email, login, isAuth}
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: "SECURITY/GET_CAPTCHA_SUCCESS", payload: {captchaUrl}
} as const)
//thunkCreator
export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {userId, email, login} = response.data.data;
        dispatch(setAuthUserData(userId, email, login, true));
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: ThunkDispatch<UsersAuthDataType, {}, any>) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}
export const logOut = () => async (dispatch: ThunkDispatchType) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
