import {v1} from "uuid";
import {MessageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const onMessageChangeAC = (newText: string) => ({type: CHANGE_NEW_MESSAGE, newText: newText} as const)

export type ActionsType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof onMessageChangeAC>

export let initialState = {
    newMessagesText: "",
    dialogs: [
        {id: v1(), name: "Alena"},
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Juliya"},
        {id: v1(), name: "Dimas"},
        {id: v1(), name: "Maks"}
    ],
    messages: [
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
            const newMessage: MessageType = {id: v1(), message: state.newMessagesText,}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessagesText: " ",
            };
        case "CHANGE-NEW-MESSAGE":
            return {
                ...state,
                newMessagesText: action.newText
            }
        default:
            return state
    }
}