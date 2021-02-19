import {ActionsType, SidebarPropsType} from "./store";
import {v1} from "uuid";

let initialState = {
    friends: [
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Oleg"},
        {id: v1(), name: "Anna"},
    ]
}

export const sidebarReducer = (state = initialState, action: ActionsType): SidebarPropsType => {
    return state
}
