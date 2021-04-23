import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE"
//const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"

export const addMessageAC = (newMessagesText: string) => ({type: ADD_MESSAGE, newMessagesText} as const)
// export const onMessageChangeAC = (newText: string) => ({type: CHANGE_NEW_MESSAGE, newText: newText} as const)

export type ActionsType =
    | ReturnType<typeof addMessageAC>
    // | ReturnType<typeof onMessageChangeAC>

export let initialState = {
    dialogs: [
        {id: v1(), name: "Alena"},
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Juliya"},
        {id: v1(), name: "Dimas"},
        {id: v1(), name: "Maks"}
    ],
    messagesData: [
        {id: v1(), message: "Hello my friends"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "Sorry i am latte"},
        {id: v1(), message: "React very easy"},
        {id: v1(), message: "Good night"},
    ]
}
export type DialogsType = typeof initialState

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsType): DialogsType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            //let newMessage = action.newMessagesText
            return {
                ...state,
                messagesData: [...state.messagesData, {id:v1(), message: action.newMessagesText}]
            };
        // case "CHANGE-NEW-MESSAGE":
        //     return {
        //         ...state,
        //         newMessagesText: action.newText
        //     }
        default:
            return state
    }
}