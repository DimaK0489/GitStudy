import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {ReduxStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Dispatch} from "redux";

export type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

export type UsersAuthDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
    captchaUrl: null | string
}
type ThunkType = ThunkAction<void, ReduxStateType, unknown, ActionsType>
type ThunkDispatchType = ThunkDispatch<ReduxStateType, unknown, ActionsType>
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
            return  {...state, ...action.payload}
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
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {userId, email, login} = response.data;
        dispatch(setAuthUserData(userId, email, login, true));
    }
}
export const login = (email: string, password: string, rememberMe: boolean = false) => async (dispatch: ThunkDispatchType) => {
    let response = await authAPI.login(email, password, rememberMe = false)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}) as ActionsType);
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
