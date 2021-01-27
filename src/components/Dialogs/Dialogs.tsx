import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redax/state";

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
    addMessage: (postText: string) => void
}

function Dialogs(props:DialogsPropsType) {

    const dialogsElements = props.dialogs.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    const messageElements = props.messages.map( (message) =><Message message={message.message}/>);


    const newMassage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMassage.current)
            props.addMessage(newMassage.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <textarea ref={newMassage}></textarea>
                <button onClick={addMessage}>Add</button>
            </div>

        </div>

    );
}

export default Dialogs;