import {getAuthUserData} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ReduxStateType} from "./redux-store";

let initialState = {
    initialized: false as boolean
}
export type AppType = typeof initialState

export type ActionsType = ReturnType<typeof initializedSuccess>
type ThunkType = ThunkAction<void, ReduxStateType, unknown, ActionsType>
type ThunkDispatchType = ThunkDispatch<ReduxStateType, unknown, ActionsType>

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case "APP/INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}
//actionCreator
export const initializedSuccess = () => ({type: "APP/INITIALIZED-SUCCESS"} as const)

//thunkCreator
export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

