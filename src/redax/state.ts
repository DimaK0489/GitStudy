import {renderTree} from "../render";
import {strict} from "assert";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
type SidebarProps = {
    id: number
    name: string
}

export type RootStateType = {
    profilePage: {
        posts: Array<PostType>
    }
    dialogsPage: {
        messages: Array<MessageType>,
        dialogs: Array<DialogType>,
    }
    sidebar: {
        friends: Array<SidebarProps>
    }
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "How are you", likesCount: 8},
            {id: 2, message: "It is my first post", likesCount: 6},
            {id: 3, message: "Good night", likesCount: 10},
            {id: 4, message: "Hello", likesCount: 12},
            {id: 5, message: "Good morning", likesCount: 18}
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hello my friends"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Sorry i am latte"},
            {id: 4, message: "React very easy"},
            {id: 5, message: "Good buy"},
            {id: 6, message: "Buy"}
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
            {id: 1, name: "Denis"},
            {id: 2, name: "Lera"},
            {id: 3, name: "Lesha"},
        ]
    }
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderTree(state)
}
export const addMessage = (postText: string) => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: postText,
    }
    state.dialogsPage.messages.push(newMessage)
}
