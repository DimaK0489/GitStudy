import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType,} from "../../redux/store";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { DialogsType } from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    messagePege: DialogsType
    addMessage: (values: string) => void
    isAuth: boolean
    //onMessageChange: (newText: string) => void
    //newMessagesText: string
}

function Dialogs(props: DialogsPropsType) {
    let state = props.messagePege
    const dialogsElements = state.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageElements = state.messagesData.map((message) =>
        <Message key={message.id} message={message.message}/>);

    // const addMessage = () => {
    //     props.addMessage()
    // }
    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.onMessageChange(e.currentTarget.value)
    // }
    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessagesText)
    }
    if (props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm: React.FC<InjectedFormProps<DialogsPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessagesText"} placeholder={"Enter your message"}/>
                {/*<textarea onChange={onMessageChange} value={props.newMessagesText}/>*/}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<DialogsPropsType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;