import React from "react";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";


type DialogsContainerPropsType = {
    store: Store
}

function DialogsContainer(props: DialogsContainerPropsType) {

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onMessageChange = (text:string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }
    return (
        <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                 messages={props.store.getState().dialogsPage.messages}
                 newMessagesText={props.store.getState().dialogsPage.newMessagesText}
                 addMessage={addMessage}
                 onMessageChange={onMessageChange}/>
        )
}

export default DialogsContainer;