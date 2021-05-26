import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"

export type ActionsType = ReturnType<typeof setAuthUserData>

export type UsersAuthDataType = {
    email: null | string,
    id: null | number,
    login: null | string,
    isAuth: boolean
}
let initialState: UsersAuthDataType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType): UsersAuthDataType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
//actionCreator
export const setAuthUserData = (userId: null, email: null, login: null, isAuth: boolean) => ({
    type: "SET_USER_DATA",
    payload: {userId, email, login, isAuth}
} as const)

//thunkCreator
export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        });
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        });
}
export const logOut = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}
