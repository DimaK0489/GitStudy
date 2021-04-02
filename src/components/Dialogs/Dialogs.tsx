import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType,} from "../../redux/store";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagesText: string
    addMessage: () => void
    onMessageChange: (newText: string) => void
    isAuth: boolean
}

function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageElements = props.messages.map((message) =>
        <Message key={message.id} message={message.message}/>);

    const addMessage = () => { props.addMessage() }
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => { props.onMessageChange(e.currentTarget.value)}

    if (!props.isAuth ) return <Redirect to={"/login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} value={props.newMessagesText}/>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;