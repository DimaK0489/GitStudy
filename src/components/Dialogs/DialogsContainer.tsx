import React, {ChangeEvent} from "react";
import { addMessageAC, onMessageChangeAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import {ReduxStateType} from "../../redux/redux-store";


type DialogsContainerPropsType = {
    store: any
    state: ReduxStateType
}

function DialogsContainer(props: DialogsContainerPropsType) {

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onMessageChange = (text:string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }
    return (
        <Dialogs dialogs={props.state.dialogsPage.dialogs}
                 messages={props.state.dialogsPage.messages}
                 newMessagesText={props.state.dialogsPage.newMessagesText}
                 addMessage={addMessage}
                 onMessageChange={onMessageChange}/>
        )
}

export default DialogsContainer;