import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false as boolean
}

export type ActionsType = ReturnType<typeof initializedSuccess>

export type AppType = typeof initialState

export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                    initialized: true
            }
        default:
            return state
    }
}
//actionCreator
export const initializedSuccess = () => ({ type: "INITIALIZED-SUCCESS"} as const)

//thunkCreator
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
    })

}

