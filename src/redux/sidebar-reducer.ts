import {v1} from "uuid";

let initialState = {
    friends: [
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Oleg"},
        {id: v1(), name: "Anna"},
    ]
}
type InitialStateType = typeof initialState

export const sidebarReducer = (state: InitialStateType = initialState): InitialStateType => {
    return state
}
