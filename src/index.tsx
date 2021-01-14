import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostsType = Array<PostType>
let posts: PostsType = [
    {id: 1, message: "How are you", likesCount: 8},
    {id: 2, message: "It is my first post", likesCount: 6},
    {id: 3, message: "Good night", likesCount: 10},
    {id: 4, message: "Hello", likesCount: 12},
    {id: 5, message: "Good morning", likesCount: 18}
]

export type DialogType = {
    id:number
    name: string
}
export type DialogsType = Array<DialogType>
let dialogs: DialogsType = [
    {id: 1, name: "Alena"},
    {id: 2, name: "Denis"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Juliya"},
    {id: 5, name: "Dimas"},
    {id: 6, name: "Maks"}
];


export type MessageType = {
    id:number
    message: string
}
export type MessagesType = Array<MessageType>
let messages: MessagesType = [
    {id: 1, message: "Hello my friends"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Sorry i am latte"},
    {id: 4, message: "React very easy"},
    {id: 5, message: "Good buy"},
    {id: 6, message: "Buy"}
];


ReactDOM.render(<App
    post={posts}
    messages={messages}
    dialogs={dialogs}
/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
