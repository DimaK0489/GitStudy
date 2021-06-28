import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {ReduxStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type ActionsType = ReturnType<typeof setAuthUserData>

export type UsersAuthDataType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
type ThunkType = ThunkAction<void, ReduxStateType, unknown, ActionsType>
type ThunkDispatchType = ThunkDispatch<ReduxStateType, unknown, ActionsType>
let initialState: UsersAuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType): UsersAuthDataType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA":
            return {...state,
                id:action.payload.userId, email: action.payload.email,
                login: action.payload.login, isAuth: action.payload.isAuth}
        default:
            return state
    }
}
//actionCreator
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "AUTH/SET_USER_DATA",payload: {userId, email, login, isAuth}} as const)

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
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit("login", {_error: "Common error"}) as ActionsType);
    }

}
export const logOut = () => async (dispatch: ThunkDispatchType) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}
