import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsPropsType} from "./DialogsContainer";


function Dialogs(props: DialogsPropsType) {
    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map((d) =>
        <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messageElements = state.messages.map((message) =>
        <Message key={message.id} message={message.message}/>);

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessagesText)
    }
    /*if (props.isAuth) return <Redirect to={"/login"}/>;*/
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