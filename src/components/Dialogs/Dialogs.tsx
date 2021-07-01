import React from "react";
import style from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux} from "./Message/AddMessageForm";

export const Dialogs = React.memo((props: DialogsPropsType) => {
    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map((d) =>
        <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messageElements = state.messages.map((message) =>
        <Message key={message.id} message={message.message}/>);

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessagesText)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
})

