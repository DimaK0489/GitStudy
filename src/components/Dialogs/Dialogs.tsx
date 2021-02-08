import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redax/state";
import Message from "./Message/Message";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (messageText: string) => void
    changeNewMessage: (newText: string) => void
    dialogsPage:string
}

function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>);
    const messageElements = props.messages.map((message) =>
        <Message message={message.message}/>);

    const addMessage = () => {
        props.addMessage(props.dialogsPage)
        props.changeNewMessage("")
    }
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange} value={props.dialogsPage}/>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;