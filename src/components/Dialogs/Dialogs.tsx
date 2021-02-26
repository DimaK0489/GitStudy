import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType,} from "../../redux/store";
import Message from "./Message/Message";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagesText: string
    addMessage: () => void
    onMessageChange: (newText: string) => void
}


function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>);
    const messageElements = props.messages.map((message) =>
        <Message message={message.message}/>);

    const addMessage = () => {
        props.addMessage()
    }
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }
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