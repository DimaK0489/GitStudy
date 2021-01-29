import {renderTree} from "../render";
import {v1} from "uuid";

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
type SidebarProps = {
    id: number
    name: string
}

export type RootStateType = {
    profilePage: {
        posts: Array<PostType>
        messageForNewPost: string
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
        messageForNewPost: "it-incubator",
        posts: [
            {id: v1(), message: "How are you", likesCount: 8},
            {id: v1(), message: "It is my first post", likesCount: 6},
            {id: v1(), message: "Good night", likesCount: 10},
            {id: v1(), message: "Hello", likesCount: 12},
            {id: v1(), message: "Good morning", likesCount: 18}
        ],
    },
    dialogsPage: {
        messages: [
            {id: v1(), message: "Hello my friends"},
            {id: v1(), message: "How are you"},
            {id: v1(), message: "Sorry i am latte"},
            {id: v1(), message: "React very easy"},
            {id: v1(), message: "Good buy"},
            {id: v1(), message: "Buy"}
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
        id: v1(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderTree(state)
}
export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    renderTree(state)
}
export const addMessage = (postText: string) => {
    const newMessage: MessageType = {
        id: v1(),
        message: postText,
    }
    state.dialogsPage.messages.push(newMessage)
    renderTree(state)

}
