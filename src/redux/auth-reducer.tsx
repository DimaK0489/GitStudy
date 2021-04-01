import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type ActionsType =
    ReturnType<typeof setAuthUserData>


export let initialsState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

}
export type InitialStateType = typeof initialsState

export const authReducer = (state: InitialStateType = initialsState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: null, email: null, login: null) => ({type: "SET_USER_DATA", data: {id, email, login}} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}
