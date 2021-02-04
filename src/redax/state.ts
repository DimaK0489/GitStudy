import {v1} from "uuid";
import {renderTree} from "../index";


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
            newMessages: "Hello",
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
                {id: v1(), name: "Lera"},
                {id: v1(), name: "Lesha"},
            ]
        }
    },
    _renderTree() {
        console.log("state ")
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: v1(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        renderTree()
    },
    changeNewText(newText: string){
        this._state.profilePage.messageForNewPost = newText;
        renderTree()
    },
    addMessage(messageText: string){
        const newMessage: MessageType = {
            id: v1(),
            message: messageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        renderTree()
    },
    changeNewMessage(newText: string){
        this._state.dialogsPage.newMessages = newText;
        renderTree()
    },
    subscribe(observer){
        this._renderTree = observer
    },
    getState() {
        return this._state
    }
}
export type StoreType = {
    _state:RootStateType
    changeNewText:(newText:string) => void
    addPost: (postText: string) => void
    addMessage:(messageText: string) => void
    changeNewMessage:(newText: string) => void
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
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
export type RootStateType = {
    profilePage: {
        posts: Array<PostType>
        messageForNewPost: string
    }
    dialogsPage: {
        messages: Array<MessageType>,
        dialogs: Array<DialogType>,
        newMessages: string
    }
    sidebar: {
        friends: Array<SidebarProps>
    }
}










