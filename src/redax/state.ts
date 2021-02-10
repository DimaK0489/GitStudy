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
        console.log("State changed")
    },
    subscribe(observer){
        this._renderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if(action.type === "ADD-POST"){
            const newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            renderTree()
        }else if (action.type === "CHANGE-NEW-TEXT"){
            this._state.profilePage.messageForNewPost = action.newText;
            renderTree()
        }else if (action.type === "ADD-MESSAGE"){
            const newMessage: MessageType = {
                id: v1(),
                message: action.messageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            renderTree()
        }else if (action.type === "CHANGE-NEW-MESSAGE"){
            this._state.dialogsPage.newMessages = action.newText;
            renderTree()
        }
    }
}
export type StoreType = {
    _state:RootStateType
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
export type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}
export type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    messageText: string
}
export type ChangeNewMessageActionType = {
    type: "CHANGE-NEW-MESSAGE"
    newText: string
}
export type ActionsType = AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeNewMessageActionType











