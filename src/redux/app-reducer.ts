import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false as boolean
}
export type AppType = typeof initialState

export type ActionsType = ReturnType<typeof initializedSuccess>

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case "APP/INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: action.payload
            }
        default:
            return state
    }
}
//actionCreator
export const initializedSuccess = (payload: boolean) => ({type: "APP/INITIALIZED-SUCCESS", payload} as const)

//thunkCreator
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess(true))
        })

}

