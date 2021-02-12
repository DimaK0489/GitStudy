import {v1} from "uuid";
import {renderTree} from "../index";
import {ActionsType, DialogsPageType, MessageType, RootStateType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE"
export const addMessageAC = (messageText: string) => {
    return {type: ADD_MESSAGE, messageText: messageText} as const
}
export const onMessageChangeAC = (newText: string) => {
    return {type: CHANGE_NEW_MESSAGE, newText: newText} as const
}
export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
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