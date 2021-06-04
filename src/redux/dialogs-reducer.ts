import {v1} from "uuid";

export type ActionsType = ReturnType<typeof addMessageAC>

export type DialogsInitialStateType = typeof initialState

type MessageType = {
    id: string
    message: string
}

type DialogsType = {
    id: string
    name: string
}

export let initialState = {
    dialogs: [
        {id: v1(), name: "Alena"},
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Juliya"},
        {id: v1(), name: "Dimas"},
        {id: v1(), name: "Maks"}
    ]as DialogsType[],
    messages: [
        {id: v1(), message: "Hello my friends"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "Sorry i am latte"},
        {id: v1(), message: "React very easy"},
        {id: v1(), message: "Good night"},
    ] as MessageType[]
}
export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionsType): DialogsInitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessages: MessageType = {
                id: v1(),
                message: action.newMessagesText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessages],
            }
        default:
            return state
    }
}

export const addMessageAC = (newMessagesText: string) => ({type: "ADD-MESSAGE", newMessagesText} as const)