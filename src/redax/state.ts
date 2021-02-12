import {v1} from "uuid";
import {addPostAC, newTextChangeAC, profileReducer} from "./profile-reducer";
import {addMessageAC, dialogsReducer, onMessageChangeAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "it-incubator",
            posts: [
                {id: v1(), message: "How are you", likesCount: 8},
                {id: v1(), message: "It is my first post", likesCount: 6},
                {id: v1(), message: "Hello", likesCount: 12},
            ],
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: v1(), name: "Denis"},
                {id: v1(), name: "Oleg"},
                {id: v1(), name: "Anna"},
            ]
        }
    },
    _renderTree() {
        console.log("State changed")
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    getState(): RootStateType {
        return this._state
    },
    dispatch(action: ActionsType) {
        this.getState().profilePage = profileReducer(this.getState().profilePage, action)
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
        this.getState().sidebar = sidebarReducer(this.getState().sidebar, action)
    }
}
export type StoreType = {
    _state: RootStateType
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type SidebarProps = {
    id: string
    name: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}
export type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    newMessagesText: string
}
export type SidebarPropsType = {
    friends: Array<SidebarProps>
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPropsType
}
export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof onMessageChangeAC>











