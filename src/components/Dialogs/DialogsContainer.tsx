import React from "react";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import {connect} from "react-redux";
import {ReduxStateType} from "../../redux/redux-store";
import {ActionsType, store} from "../../redux/store";


type DialogsContainerPropsType = {
    store: Store
}

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
let mapStateToProps = (state: ReduxStateType) => {
    return{
        dialogs: state.dialogsPage,
        messages: state.dialogsPage,
        newMessagesText: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return{
        addMessage: () => {dispatch(addMessageAC())},
        onMessageChange: (text: string) => {dispatch(onMessageChangeAC(text))}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;