import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../index";

type MessagesPropsType = {
    message: string
}
function Message(props: MessagesPropsType) {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

type DialogsPropsType={
    dialogs: Array<DialogType>
    messages:Array<MessageType>
}

function Dialogs(props:DialogsPropsType) {

    let dialogsElements = props.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.map( (message) =><Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    );
}

export default Dialogs;