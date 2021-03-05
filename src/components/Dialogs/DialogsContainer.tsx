import React from "react";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {DialogType, MessageType} from "../../redux/store";


/*function DialogsContainer(props: DialogsContainerPropsType) {

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onMessageChange = (text:string) => {
        props.store.dispatch(onMessageChangeAC(text))
    }
    return (
        <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                 messages={props.store. getState().dialogsPage.messages}
                 newMessagesText={props.store.getState().dialogsPage.newMessagesText}
                 addMessage={addMessage}
                 onMessageChange={onMessageChange}/>
        )
}*/
type MSTPType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessagesText: string
}

type MDTPType = {
    onMessageChange: (text: string) => void
    addMessage: () => void
}

let mapStateToProps = (state: ReduxStateType): MSTPType => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessagesText: state.dialogsPage.newMessagesText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return{
        addMessage: () => {dispatch(addMessageAC())},
        onMessageChange: (text: string) => {dispatch(onMessageChangeAC(text))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;