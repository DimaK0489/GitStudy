import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {ActionsType, DialogType, MessageType} from "../../redax/state";
import Message from "./Message/Message";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (messageText: string) => void
    changeNewMessage: (newText: string) => void
    dialogsPage:string
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>);
    const messageElements = props.messages.map((message) =>
        <Message message={message.message}/>);

    const addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE", messageText: props.dialogsPage})
    }
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-MESSAGE", newText: props.dialogsPage})
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