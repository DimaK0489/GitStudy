import {v1} from "uuid";
import {renderTree} from "../index";
import {ActionsType, DialogsPageType, MessageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"
export const addMessageAC = (messageText: string) => {
    return {type: ADD_MESSAGE, messageText: messageText} as const
}
export const onMessageChangeAC = (newText: string) => {
    return {type: CHANGE_NEW_MESSAGE, newText: newText} as const
}

let initialState = {
    newMessagesText: "Enter your message",
    messages: [
        {id: v1(), message: "Hello my friends"},
        {id: v1(), message: "How are you"},
        {id: v1(), message: "Sorry i am latte"},
        {id: v1(), message: "React very easy"},
        {id: v1(), message: "Good night"},
    ],
    dialogs: [
        {id: 1, name: "Alena"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Juliya"},
        {id: 5, name: "Dimas"},
        {id: 6, name: "Maks"}
    ],
}

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: v1(),
                message: action.messageText,
            }
            state.messages.push(newMessage)
            renderTree()
    }
    switch (action.type) {
        case "CHANGE-NEW-MESSAGE":
            state.newMessagesText = action.newText;
            renderTree()
    }
    return state
}