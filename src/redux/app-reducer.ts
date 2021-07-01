import {getAuthUserData} from './auth-reducer'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from "./redux-store";

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initialized: true }
        default:
            return state
    }
}

// action
export const initializedSuccess = () => ({type: "INITIALIZED_SUCCESS"} as const)

// thunk
export const initializeApp = () =>  (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

// types
type ActionType = ReturnType<typeof initializedSuccess>
export type InitialStateType = {
    initialized: boolean
}


